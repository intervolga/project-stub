module.exports = [
    {block: 'img', mods: {lazy: true},
        src: 'http://placehold.it/100x100?text=lazy',
        srcset: [
            'http://placehold.it/100x100?text=default 1x',
            'http://placehold.it/200x200?text=retina  2x',
        ],
        content: 'my image'
    }
]
