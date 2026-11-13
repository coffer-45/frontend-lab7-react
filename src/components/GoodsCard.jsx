const currency = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
  maximumFractionDigits: 0,
});

export default function GoodsCard({ photo, name, price, description }) {
  return (
    <article className="goods-card">
      <img src={photo} alt={`Фотопринт «${name}»`} width="900" height="650" loading="lazy" />
      <div className="goods-info">
        <span className="goods-label">ФОТОПРИНТ / МУКАЧЕВО</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <strong className="goods-price">{currency.format(price)}</strong>
      </div>
    </article>
  );
}
