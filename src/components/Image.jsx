export default function Image({ photo, src }) {
  return (
    <a
      className="city-photo"
      href="https://mukachevo-rada.gov.ua/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Фото центру Мукачева. Відкрити офіційний сайт міста"
      style={{ width: `${photo.width}%` }}
    >
      <img src={src} alt="Центральна площа Мукачева з ратушею" width="1050" height="700" />
      <span className="photo-action">Відкрити сайт міста <span aria-hidden="true">↗</span></span>
    </a>
  );
}
