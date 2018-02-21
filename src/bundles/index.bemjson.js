module.exports = {
  block: 'page',
  title: 'Шаблон базовых элементов',
  content: [
    require('./common/header.bemjson.js'),
    {
      mix: {block: 'container'},
      content: [
        require('../blocks.02-tags/img/img.bemjson.js'),
        require('../blocks.04-bootstrap/form-control/form-control.bemjson.js'),
      ],
    },
    require('./common/footer.bemjson.js'),
  ],
};
