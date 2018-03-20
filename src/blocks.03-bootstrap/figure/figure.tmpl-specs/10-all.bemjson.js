module.exports = [
    {block: 'figure', src: 'http://placehold.it/400x200', alt: 'My image', content: 'Подпись к изображению'},
    {block: 'figure', content: [
        {block: 'img', mix: [{block: 'figure-img'}, {block: 'img-fluid'}], src: 'http://placehold.it/400x200', content: 'My image'},
        {elem: 'caption', mix: {block: 'text-center'}, content: 'Подпись к изображению'}
    ]},
    {block: 'figure', content: [
        {block: 'img', mix: [{block: 'figure-img'}, {block: 'img-fluid'}], src: 'http://placehold.it/400x200', content: 'My image'},
        {elem: 'caption', mix: {block: 'text-right'}, content: 'Подпись к изображению'}
    ]}
]
