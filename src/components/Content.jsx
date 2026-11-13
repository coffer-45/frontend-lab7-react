import { Component } from 'react';
import Image from './Image.jsx';
import cityPhoto from '../assets/mukachevo-center.jpg';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: { 8: false, 9: false },
      photos: [{ id: 1, width: 100 }],
      nextPhotoId: 2,
      photoStatus: '',
    };
  }

  toggleColors = (number) => {
    this.setState((previous) => ({
      active: { ...previous.active, [number]: !previous.active[number] },
    }));
  };

  addPhoto = () => {
    this.setState((previous) => ({
      photos: [...previous.photos, { id: previous.nextPhotoId, width: 100 }],
      nextPhotoId: previous.nextPhotoId + 1,
      photoStatus: `Додано зображення. Тепер їх ${previous.photos.length + 1}.`,
    }));
  };

  removePhoto = () => {
    this.setState((previous) => {
      if (!previous.photos.length) return null;
      const photos = previous.photos.slice(0, -1);
      return {
        photos,
        photoStatus: photos.length
          ? `Зображення видалено. Залишилося ${photos.length}.`
          : 'Усі зображення видалено. Натисніть «Додати».',
      };
    });
  };

  resizePhoto = (delta) => {
    this.setState((previous) => {
      if (!previous.photos.length) return null;
      const lastIndex = previous.photos.length - 1;
      const width = Math.max(60, Math.min(140, previous.photos[lastIndex].width + delta));
      return {
        photos: previous.photos.map((photo, index) => (
          index === lastIndex ? { ...photo, width } : photo
        )),
        photoStatus: `Ширина останнього зображення: ${width}%.`,
      };
    });
  };

  renderInteractiveCard(number) {
    const active = this.state.active[number];
    return (
      <button
        key={number}
        className="dom-card dom-card-action"
        id={number === 8 ? 'dom-element-8' : undefined}
        data-dom-order={number}
        type="button"
        aria-pressed={active}
        onClick={() => this.toggleColors(number)}
        style={active ? { backgroundColor: '#c5ec6b', color: '#15211e' } : undefined}
      >
        <span>{String(number).padStart(2, '0')} / React state</span>
        <strong>Змінити кольори</strong>
      </button>
    );
  }

  render() {
    const hasPhotos = this.state.photos.length > 0;
    const labels = [
      'Про мене', 'Освіта', 'Захоплення', 'Фільми', 'Мукачево',
      'Фото міста', 'Джерело фото', null, null, 'Результат',
    ];

    return (
      <>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Привіт, я Андрій</p>
            <h1 id="hero-title">Коджу.<br />Досліджую.<br /><em>Перезбираю.</em></h1>
            <p className="hero-lead">Студент групи ІО-41. Люблю знаходити незвичне в інтернеті, писати код і розбиратися, як усе працює.</p>
            <a className="text-link" href="#about">Познайомитися ближче <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-aside">
            <span className="aside-index">01 / 05</span>
            <div className="orbit" aria-hidden="true"><span /><span /><span /></div>
            <p>Про мене, мої інтереси<br />та місто, з якого все почалося.</p>
          </div>
        </section>

        <section className="section section-light" id="about" aria-labelledby="about-heading">
          <div className="wrap section-grid">
            <div className="section-side"><span className="section-number">01</span><span>Знайомство</span></div>
            <div className="section-main">
              <p className="section-kicker">Коротка історія</p>
              <h2 id="about-heading">Вовк Андрій Андрійович</h2>
              <div className="fact-grid">
                <div className="fact"><span className="fact-label">Народився</span><p>17 листопада 2006 року<br />в місті Мукачево</p></div>
                <div className="fact"><span className="fact-label">Освіта</span><p>Закінчив школу №187. Зараз навчаюся в КПІ ім. Ігоря Сікорського, група ІО-41.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="interests" aria-labelledby="interests-heading">
          <div className="wrap section-grid">
            <div className="section-side"><span className="section-number">02</span><span>Що мене захоплює</span></div>
            <div className="section-main">
              <p className="section-kicker">Поза навчанням</p>
              <h2 id="interests-heading">Три речі, до яких<br />я повертаюся</h2>
              <ul className="interest-list">
                <li><span className="interest-index">01</span><span>Перезбирати систему кожної середи</span><span className="interest-mark" aria-hidden="true">✳</span></li>
                <li><span className="interest-index">02</span><span>Шукати дивовижну інформацію в інтернеті</span><span className="interest-mark" aria-hidden="true">✳</span></li>
                <li><span className="interest-index">03</span><span>Кодити й пробувати нові ідеї</span><span className="interest-mark" aria-hidden="true">✳</span></li>
              </ul>
              <div className="works">
                <div><p className="section-kicker">Улюблені фільми</p><h3>Історії, які запам’яталися</h3></div>
                <ol>
                  <li><span>Той, хто біжить по лезу 2049</span><small>фільм</small></li>
                  <li><span>Made in Abyss: Journey’s Dawn</span><small>фільм</small></li>
                  <li><span>Made in Abyss: Dawn of the Deep Soul</span><small>фільм</small></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dom" id="dom" aria-labelledby="dom-heading">
          <div className="wrap section-grid">
            <div className="section-side"><span className="section-number">03</span><span>Робота з DOM</span></div>
            <div className="section-main">
              <p className="section-kicker">Завдання 1 / React-компоненти</p>
              <h2 id="dom-heading">Десять елементів.<br />Два інтерактивні.</h2>
              <p className="dom-intro">Номер варіанта — 7, отже, <code>(7 % 10) + 1 = 8</code>. Натисніть на елементи №8 і №9: колір фону й тексту змінюється при кожному натисканні. У React їхній стан зберігається в класовому компоненті <code>Content</code>.</p>
              <div className="dom-grid" role="group" aria-label="Десять елементів сторінки за порядком">
                {labels.map((label, index) => {
                  const number = index + 1;
                  if (number === 8 || number === 9) return this.renderInteractiveCard(number);
                  return (
                    <div className="dom-card" data-dom-order={number} key={number}>
                      <span>{String(number).padStart(2, '0')}</span><strong>{label}</strong>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-city" id="city" aria-labelledby="city-heading">
          <div className="wrap section-grid">
            <div className="section-side"><span className="section-number">04</span><span>Улюблене місто</span></div>
            <div className="section-main">
              <p className="section-kicker">Місто, де я народився</p>
              <h2 id="city-heading">Мукачево<span className="period">.</span></h2>
              <p className="city-copy">Мукачево мені подобається своїм затишним центром, старими вулицями й особливою атмосферою Закарпаття. Це місто, до якого приємно повертатися: тут знайомі місця щоразу нагадують про дім.</p>
              <figure>
                <div className="photo-gallery">
                  {this.state.photos.map((photo) => <Image key={photo.id} photo={photo} src={cityPhoto} />)}
                </div>
                {!hasPhotos && <p className="photo-empty">Зображення видалено. Натисніть «Додати», щоб повернути його.</p>}
                <div className="photo-controls" role="group" aria-label="Керування зображеннями">
                  <button type="button" onClick={this.addPhoto}>Додати</button>
                  <button type="button" disabled={!hasPhotos} onClick={() => this.resizePhoto(10)}>Збільшити</button>
                  <button type="button" disabled={!hasPhotos} onClick={() => this.resizePhoto(-10)}>Зменшити</button>
                  <button type="button" disabled={!hasPhotos} onClick={this.removePhoto}>Видалити</button>
                </div>
                <p className="photo-status" role="status" aria-live="polite">{this.state.photoStatus}</p>
                <figcaption>Центр Мукачева. Фото: <a href="https://commons.wikimedia.org/wiki/File:%D0%9C%D1%83%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%BE%2C_%D1%86%D0%B5%D0%BD%D1%82%D1%80.jpg">Петро Паровінчак / Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Оригінальний файл не змінено.</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </>
    );
  }
}
