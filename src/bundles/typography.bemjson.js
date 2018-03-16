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
        {elem: 'header', content: 'Изображения в тексте'},
        {elem: 'body', content: [
          {block: 'img', attrs: {align: 'left'}, src: 'http://placehold.it/400x200', content: 'my image'},
          {tag: 'p', content: 'Эти слова совершенно справедливы, однако эзотерическое многопланово начинает эпитет. Целостность готично диссонирует психологический параллелизм. Художественное опосредование, в том числе, имитирует художественный ритуал. Притча монотонно трансформирует катарсис. Художественное восприятие монотонно заканчивает драматизм. Творческая доминанта заканчивает миракль, подобный исследовательский подход к проблемам художественной типологии можно обнаружить у К.Фосслера.'},
          {tag: 'p', content: 'Развивая эту тему, нивелирование индивидуальности мгновенно. Комплекс априорной бисексуальности имеет бессознательный реконструктивный подход. Адаптация трансформирует сокращенный постмодернизм.'},
          {block: 'img', attrs: {align: 'right'}, src: 'http://placehold.it/400x200', content: 'my image'},
          {tag: 'p', content: 'Интенция возможна. Коллективное бессознательное, согласно традиционным представлениям, изящно имеет анимус. Очевидно, что возвышенное образует элитарный декаданс. Катарсис многопланово диссонирует первоначальный реализм, подобный исследовательский подход к проблемам художественной типологии можно обнаружить у К.Фосслера.'},
          {tag: 'p', content: 'Эти слова совершенно справедливы, однако эзотерическое многопланово начинает эпитет. Целостность готично диссонирует психологический параллелизм. Художественное опосредование, в том числе, имитирует художественный ритуал. Притча монотонно трансформирует катарсис. Художественное восприятие монотонно заканчивает драматизм. Творческая доминанта заканчивает миракль, подобный исследовательский подход к проблемам художественной типологии можно обнаружить у К.Фосслера.'},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Изображения с подписью (Figures)'},
        {elem: 'body', content: [
          {block: 'row', content: [
            require('../blocks.02-common/figure/figure.tmpl-specs/10-all.bemjson.js').map((figure)=>{
              return {block: 'col', content: [
                figure
              ]} 
            }),
          ]}
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
              require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/30-textarea.bemjson.js'),
            ]},
            {mix: {block: 'form-group'}, content: [
              require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/40-file.bemjson.js'),
            ]},
            {mix: {block: 'row'}, content: [
              {mix: {block: 'col'}, content: [
                require('../blocks.03-bootstrap/form-check/form-check.tmpl-specs/10-checkbox.bemjson.js'),
              ]},
              {mix: {block: 'col'}, content: [
                require('../blocks.03-bootstrap/form-check/form-check.tmpl-specs/20-radio.bemjson.js'),
              ]}
            ]},
          ]},
        ]}
      ]},

      {block: 'card', cls: 'mb-4', content: [
        {elem: 'header', content: 'Кнопки'},
        {elem: 'body', content: [
          {elem: 'title', content: 'Стилизация'},
          {block: 'row', content: [
            require('../blocks.03-bootstrap/btn/btn.tmpl-specs/10-all-styled.bemjson.js').map((btn)=>{
              return {block: 'col', mix: {block: 'mb-2'}, content: [
                btn
              ]}
            }),
            {block: 'col'},{block: 'col'},{block: 'col'},{block: 'col'}
          ]},
          {elem: 'title', content: 'Размеры'},
          require('../blocks.03-bootstrap/btn/btn.tmpl-specs/20-all-size.bemjson.js').map((btn)=>{
            return {mix: {block: 'mb-2'}, content: [
              btn
            ]}
          }),
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
