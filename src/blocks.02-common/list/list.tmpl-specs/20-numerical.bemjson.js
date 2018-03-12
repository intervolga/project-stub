module.exports = [
    {block: 'list', tag: 'ol', content: [
        'Пункт 1',
        'Пункт 2',
        {block: 'list', tag: 'ol', content: [
            'Пункт 1',
            'Пункт 2',
            'Пункт 3'
        ]},
        'Пункт 3'
    ]}
]
