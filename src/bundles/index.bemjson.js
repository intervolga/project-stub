module.exports = {
  block: 'page',
  title: 'Шаблон базовых элементов',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      
    ]},
    require('./common/footer.bemjson.js')
  ]
};
