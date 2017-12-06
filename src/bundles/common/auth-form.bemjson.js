module.exports = {
  block: 'form',
  content: [
    {
      block: 'form-group',
      content: [
        {
          block: 'label',
          content: 'Email',
        },
        {
          block: 'input',
          mods: {type: 'email'},
          mix: {elem: 'form-control'},
        },
      ],
    },
  ],
};
