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
      {mix: {block: 'mb-5'}, content: [
        {block: 'h', size: '2', content: 'Блок "h"'},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/h/h.tmpl-specs/10-all.bemjson.js'),
        ]},
      ]},

      {mix: {block: 'mb-5'}, content: [
        {block: 'h', size: '2', content: 'Блок "list"'},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/list/list.tmpl-specs/10-default.bemjson.js'),
        ]},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.02-common/list/list.tmpl-specs/20-numerical.bemjson.js'),
        ]}
      ]},


      {mix: {block: 'mb-5'}, content: [
        {block: 'h', size: '2', content: 'Блок "form-control"'},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/10-default.bemjson.js')
        ]},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/20-select.bemjson.js')
        ]},
        {mix: {block: 'mb-2'}, content: [
          require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/30-textarea.bemjson.js')
        ]}
      ]}
      
    ]},
    require('./common/footer.bemjson.js')
  ]
};
