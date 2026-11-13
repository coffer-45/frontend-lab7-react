import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import GoodsCard from './components/GoodsCard.jsx';
import { goods } from './data/goods.js';

function GoodsGallery() {
  return (
    <section className="section section-goods" id="goods" aria-labelledby="goods-heading">
      <div className="wrap section-grid">
        <div className="section-side"><span className="section-number">05</span><span>Галерея товарів</span></div>
        <div className="section-main">
          <p className="section-kicker">Завдання 2 / GoodsCard + props</p>
          <h2 id="goods-heading">Місто — на пам’ять.</h2>
          <p className="goods-intro">Шість фотопринтів із різних фрагментів однієї фотографії Мукачева. Кожна картка створена компонентом <code>GoodsCard</code> із параметрами, переданими через <code>props</code>.</p>
          <div className="goods-grid">
            {goods.map((product) => (
              <GoodsCard
                key={product.id}
                photo={product.photo}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
          <p className="goods-credit">Фотографія та її кадрування — навчальний приклад; ціни демонстраційні. Автор: <a href="https://commons.wikimedia.org/wiki/File:%D0%9C%D1%83%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%BE%2C_%D1%86%D0%B5%D0%BD%D1%82%D1%80.jpg">Петро Паровінчак / Wikimedia Commons</a>, ліцензія <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Кадри змінено обрізанням і поширено на тих самих умовах.</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Content />
        <GoodsGallery />
      </main>
      <footer>
        <div className="wrap footer-inner">
          <span>Вовк Андрій Андрійович</span>
          <span>ІО-41 · Лабораторна №7 · Варіант 7 / №67 у списку</span>
        </div>
      </footer>
    </>
  );
}
