module.exports = {
  block: 'page',
  title: 'Title of the page',
  content: [
    {
      block: 'container',
      content: [
        {
          block: 'img',
          url: 'http://via.placeholder.com/1024x100?text=%D0%9E%D0%B1%D1%8B%D1%87%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0',
        },
        {
          block: 'img',
          mods: {fluid: true},
          url: 'http://via.placeholder.com/1800x100/ddd/d00?text=%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0',
        },
        {
          block: 'img',
          mods: {lazy: true},
          url: 'http://via.placeholder.com/1400x100/0d0/000?text=%D0%9B%D0%B5%D0%BD%D0%B8%D0%B2%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0',
        },
        {
          block: 'swiper-slider',
          pagination: true,
          buttons: true,
          scrollbar: true,
          content: [
            'Text slide',
            {
              block: 'unknown-block',
            },
            {
              block: 'img',
              url: '',
            },
            {
              block: 'video',
              url: '',
            },
          ],
        },
      ],
    },

  ],
};
