module.exports = {
  block: 'page',
  title: 'Шаблон типографии',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      {block: 'h', size: 1, content: 'Типография'},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Глобальные настройки'},
        {elem: 'body', content: [
          {block: 'list', content: [
            'Семейство шрифтов для основного текста: "PT Sans", Helvetica, Arial, sans-serif',
            'Семейство шрифтов для заголовков текста: "Open Sans", Helvetica, Arial, sans-serif',
            'Базовый размер шрифта для основного текста на сайте 14px',
            'Базовый размер межстрочечного интервала для основного текста на сайте 21px === 1.5',
          ]},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Используемые цвета'},
        {elem: 'body', content: [

        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Заголовки типографии'},
        {elem: 'body', content: [
          require('../blocks.02-common/h/h.tmpl-specs/10-all.bemjson.js'),
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Заголовки привлекающие внимание'},
        {elem: 'body', content: [
          {block: 'h', size: 1, cls: 'display-1', content: 'Заголовок 1'},
          {block: 'h', size: 1, cls: 'display-2', content: 'Заголовок 2'},
          {block: 'h', size: 1, cls: 'display-3', content: 'Заголовок 3'},
          {block: 'h', size: 1, cls: 'display-4', content: 'Заголовок 4'},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Встроенные текстовые элементы'},
        {elem: 'body', content: [
          {block: 'list', content: [
            '<p>Вы можете использовать тег метки, чтобы <mark>выделить</mark> текст.</p>',
            '<p><del>Эта строка текста предназначена для обработки как удаленный текст.</del></p>',
            '<p><u>Эта строка текста будет отображаться как подчеркнутая</u></p>',
            '<p><small>Эта строка текста должна рассматриваться как мелкая.</small></p>',
            '<p><strong>Эта строка выделена полужирным шрифтом.</strong></p>',
            '<p><em>Эта строка выделена курсивом.</em></p>'
          ]}
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Списки'},
        {elem: 'body', content: [
          {mix: {block: 'row'}, content: [
            {mix: {block: 'col'}, content: [
              require('../blocks.02-common/list/list.tmpl-specs/10-default.bemjson.js'),
            ]},
            {mix: {block: 'col'}, content: [
              require('../blocks.02-common/list/list.tmpl-specs/20-numerical.bemjson.js'),
            ]}
          ]},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Таблицы'},
        {elem: 'body', content: [

        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Изображения'},
        {elem: 'body', content: [

        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Изображения с подписью (Figures)'},
        {elem: 'body', content: [

        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Элементы формы'},
        {elem: 'body', content: [
          {block: 'form', content: [
            {mix: {block: 'form-group'}, content: [
              require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/10-default.bemjson.js'),
            ]},
            {mix: {block: 'form-group'}, content: [
              require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/20-select.bemjson.js'),
            ]},
            {mix: {block: 'form-group'}, content: [
              require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/30-textarea.bemjson.js')
            ]},
            {block: 'form-check', content: 'Check me out'}
          ]},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Кнопки'},
        {elem: 'body', content: [

        ]}
      ]},


      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Модальное окно'},
        {elem: 'body', content: [

        ]}
      ]},

    ]},
    require('./common/footer.bemjson.js')
  ]
};
