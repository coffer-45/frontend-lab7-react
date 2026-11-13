export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#home" aria-label="На початок сторінки">АВ<span className="brand-dot">.</span></a>
        <nav aria-label="Розділи сторінки">
          <a href="#about">Про мене</a>
          <a href="#interests">Захоплення</a>
          <a href="#dom">DOM</a>
          <a href="#city">Місто</a>
          <a href="#goods">Товари</a>
        </nav>
        <span className="header-note">FE / ЛР 07</span>
      </div>
    </header>
  );
}
