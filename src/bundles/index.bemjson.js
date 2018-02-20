module.exports = {
  block: 'page',
  title: 'Шаблон базовых элементов',
  content: [
    require('./common/header.bemjson.js'),
    {
      block: 'container',
      content: [
        {mix: {block: 'mb-3'}, content: [
          {block: 'img', src: 'http://placehold.it/100x100'},
          {block: 'img', mods: {lazy: true},
            srcset: [
              'http://placehold.it/100x100 100w',
              'http://placehold.it/200x100 200w',
              'http://placehold.it/300x100 300w'
            ],
            src: 'http://placehold.it/100x100?text=lazy'
          }
        ]},
        {mix: {block: 'mb-3'}, content: [
          {block: 'form-control', placeholder: 'Placeholder', content: 'Input value'},
        ]},
        {mix: {block: 'mb-3'}, content: [
          {block: 'form-control', placeholder: 'Placeholder', content: ''},
        ]},
        {mix: {block: 'mb-3'}, content: [
          {block: 'form-control', tag: 'select', content: [
            "Пункт 1",
            "Пункт 2",
            "Пункт 3",
            {tag: 'option', attrs: {value: 'Значение', selected: true}, content: "Пункт 4"}
          ]},
        ]},
        {mix: {block: 'mb-3'}, content: [
          {block: 'form-control', tag: 'textarea', content: [
            "Текст в многосторочном поле ввода"
          ]}
        ]},
      ],
    },
    require('./common/footer.bemjson.js'),
  ],
};
