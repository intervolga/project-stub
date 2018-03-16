module.exports = {
  block: 'page',
  title: 'Шаблон типографии',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      {block: 'h', size: 1, content: 'Типография'},

      {block: 'card', content: [
        {elem: 'header', content: 'Featured'},
        {elem: 'body', content: [

        ]}
      ]},
      {block: 'h', size: 2, content: 'Глобальные настройки'},
      {block: 'list', content: [
        'Семейство шрифтов для основного текста: "PT Sans", Helvetica, Arial, sans-serif',
        'Семейство шрифтов для заголовков текста: "Open Sans", Helvetica, Arial, sans-serif',
        'Базовый размер шрифта для основного текста на сайте 14px',
        'Базовый размер межстрочечного интервала для основного текста на сайте 21px === 1.5',
      ]},

      {tag: 'hr'},

      {block: 'h', size: 2, content: 'Используемые цвета'},
      {block: 'p', content: 'Список цветов используемых на сайте'},

      {tag: 'hr'},

      {block: 'h', size: 2, content: 'Заголовки'},
      require('../blocks.02-common/h/h.tmpl-specs/10-all.bemjson.js'),

      {tag: 'hr'},

      {block: 'h', size: 2, content: ''},
      {block: 'h', size: 2, content: ''},
      {block: 'h', size: 2, content: ''},
      {block: 'h', size: 2, content: ''},
      {block: 'h', size: 2, content: ''},
      {block: 'h', size: 2, content: ''}

    ]},
    require('./common/footer.bemjson.js')
  ]
};
