module.exports = {
  block: 'page',
  title: 'Пустая странциа',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      
    ]},
    require('./common/footer.bemjson.js')
  ]
};
