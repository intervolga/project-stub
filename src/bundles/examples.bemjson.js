module.exports = {
  block: 'page',
  title: 'Шаблон базовых элементов',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      {mix: {block: 'mb-5'}, content: [
        {block: 'h', size: '2', content: 'Блок "img"'},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/img/img.tmpl-specs/10-default.bemjson.js')
        ]},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/img/img.tmpl-specs/20-lazy.bemjson.js')
        ]},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/img/img.tmpl-specs/30-retina.bemjson.js')
        ]}
      ]},
      
    ]},
    require('./common/footer.bemjson.js')
  ]
};
