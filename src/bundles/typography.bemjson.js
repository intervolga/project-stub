module.exports = {
  block: 'page',
  title: 'Шаблон типографии',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      
    ]},
    require('./common/footer.bemjson.js')
  ]
};
