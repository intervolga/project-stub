module.exports = {
  block: 'page',
  title: 'Пустая странциа',
  content: [
    {block: 'h', size: '1', content: 'Блок "h"'},
    {
      block: 'bh-br',
      content: 'bh-br',
    },
    require('./common/header.bemjson.js'),
    {
      mix: {block: 'container'}, content: [],
    },
    require('./common/footer.bemjson.js'),
  ],
};
