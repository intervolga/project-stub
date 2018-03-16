module.exports = [
    {block: 'table', cls: 'table-bordered', content: [
        {elem: 'thead', cls: 'thead-light', content:[
            {elem: 'tr', content: [
                {elem: 'th', content: 'Заголовок'},
                {elem: 'th', content: 'Заголовок'},
                {elem: 'th', content: 'Заголовок'}
            ]}
        ]},
        {elem: 'tbody', content: [
            {elem: 'tr', content: [
                {elem: 'td', content: 'Ячейка'},
                {elem: 'td', content: 'Ячейка'},
                {elem: 'td', content: 'Ячейка'}
            ]}
        ]},
        {elem: 'tfoot', content: [
            {elem: 'tr', content: [
                {elem: 'td', content: 'Ячейка'},
                {elem: 'td', content: 'Ячейка'},
                {elem: 'td', content: 'Ячейка'}
            ]}
        ]}
    ]}
]
