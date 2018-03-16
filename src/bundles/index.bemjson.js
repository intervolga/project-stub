module.exports = {
  block: 'page',
  title: 'Пустая странциа',
  content: [
    require('./common/header.bemjson.js'),
    {mix: {block: 'container'}, content: [
      {block: 'bh', content: [
        {block: 'h', size: 2, content: 'Сгенерирован на JS'}
      ]}
    ]},
    require('./common/footer.bemjson.js'),
  ],
};
