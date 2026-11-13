#set page(paper: "a4", margin: (x: 1.7cm, y: 1.8cm), numbering: none)
#set text(font: "New Computer Modern", lang: "uk", size: 11pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  Національний технічний університет України \
  «Київський політехнічний інститут імені Ігоря Сікорського»
  #v(0.2cm)
  Факультет інформатики та обчислювальної техніки \
  Кафедра інформаційних систем та технологій
]

#v(1fr)
#align(center)[
  #text(size: 21pt)[Основи FE-технологій]
  #v(0.6cm)
  #text(size: 22pt, weight: "bold")[Лабораторна робота №7]
  #v(0.3cm)
  «Робота з React. Створення та робота з компонентами. Робота з props»
]
#v(1fr)
#align(right)[
  Виконав: Вовк Андрій Андрійович \
  студент групи ІО-41 \
  Номер у загальному списку: 67 \
  Варіант завдання №4: 7
]
#v(1fr)
#align(center)[Київ — 2026]

#pagebreak()
#set page(numbering: "1", number-align: center + bottom)
#counter(page).update(1)

*Мета.* Реалізувати сторінку ЛР №4 засобами React і створити галерею
товарів із повторно використовуваного компонента, передаючи дані через props.

*Вибір варіанта.* За слайдом 9 вступної лекції номер 67 із десяти варіантів
дає `(67 - 1) % 10 + 1 = 7`. ЛР №7 (с. 41 PDF методички) повторює завдання
ЛР №4, де для `n = 7` треба змінювати кольори елементів №8 і №9.

#v(0.2cm)
#align(center)[#text(size: 15pt, weight: "bold")[Завдання 1. Сторінка ЛР №4 на React]]

Проєкт створено на React 19 і Vite; на відміну від старого прикладу
`create-react-app` у методичці, Vite дає сучасний процес збирання. Компонент
`Header` є функцією, компонент `Image` є функцією з props, а `Content` — класом,
який успадковує `React.Component` і зберігає стан.

У `Content` відтворено вміст попередньої лабораторної: інформацію про автора,
список захоплень, 10 пронумерованих елементів і фото Мукачева. Картки №8 і
№9 незалежно перемикають колір фону й тексту; повторний клік повертає їх до
початкового стану. Кнопки «Додати», «Збільшити», «Зменшити», «Видалити»
працюють із масивом фотографій у стані. `setState()` оновлює відображення;
ручна зміна DOM, як у ЛР №4, не потрібна.

#figure(
  align(center)[#image("dom-screenshot.png", width: 79%)],
  caption: [Після кліку елементи №8 і №9 змінили колір фону й тексту],
)

Роботу компонента `Image` та кнопок також показано на
#link("https://github.com/coffer-45/frontend-lab7-react/blob/main/image-screenshot.png")[окремому скриншоті в репозиторії].

#pagebreak()
#align(center)[#text(size: 15pt, weight: "bold")[Завдання 2. Галерея GoodsCard]]

У `src/data/goods.js` описано шість демонстраційних фотопринтів Мукачева.
У `App.jsx` масив перетворюється на шість екземплярів `GoodsCard`: кожному
через props передано фото, назву, опис та ціну в гривнях. Картки мають
локальні зображення й адаптивно перебудовуються на вузьких екранах.
Для фото взято зображення Петра Паровінчака з Wikimedia Commons під
ліцензією CC BY-SA 3.0; товарні кадри змінено обрізанням та атрибутовано.

#figure(
  align(center)[#image("goods-screenshot.png", width: 72%)],
  caption: [Шість карток фотопринтів з фото, назвами й цінами],
)

*Перевірка та запуск.* Після `npm ci` команда `npm run dev` запускає сайт
локально; `npm run build` створює статичну версію в `docs/`.
Перевірено складання Vite й взаємодії в браузері Firefox: картки №8 і №9
перемикають кольори, а кнопки змінюють кількість і розмір фото.

*Публікація.* Код:
#link("https://github.com/coffer-45/frontend-lab7-react")[GitHub-репозиторій],
зокрема #link("https://github.com/coffer-45/frontend-lab7-react/blob/main/src/components/Content.jsx")[клас Content]
та #link("https://github.com/coffer-45/frontend-lab7-react/blob/main/src/components/GoodsCard.jsx")[компонент GoodsCard].
Сайт: #link("https://coffer-45.github.io/frontend-lab7-react/")[GitHub Pages].

*Документація.*
#link("https://react.dev/learn/your-first-component")[React: компоненти];
#link("https://react.dev/learn/passing-props-to-a-component")[React: props];
#link("https://react.dev/reference/react/Component")[React: класовий компонент];
#link("https://vite.dev/guide/")[Vite: робота з проєктом].

*Висновок.* Сторінку ЛР №4 реалізовано компонентами React; окрема галерея
містить шість товарів із параметрами, переданими через props.
