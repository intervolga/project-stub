module.exports = {
  block: 'page',
  title: 'Шаблон базовых элементов',
  content: [
    require('./common/header.bemjson.js'),
    {
      mix: {block: 'container'},
      content: [
        require('../blocks.02-common/img/img.tmpl-specs/10-default.bemjson.js'),
        require('../blocks.02-common/img/img.tmpl-specs/20-lazy.bemjson.js'),
        require('../blocks.02-common/img/img.tmpl-specs/30-retina.bemjson.js'),
        require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/10-default.bemjson.js'),
        require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/20-select.bemjson.js'),
        require('../blocks.03-bootstrap/form-control/form-control.tmpl-specs/30-textarea.bemjson.js'),
      ],
    },
    require('./common/footer.bemjson.js'),
  ],
};
