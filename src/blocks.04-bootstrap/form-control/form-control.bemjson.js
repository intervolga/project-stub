module.exports = [
    // Default tag input for bootstrap
    {block: 'form-control', placeholder: 'Placeholder', content: 'Input value'},

    // Default tag input for bootstrap
    {block: 'form-control', placeholder: 'Placeholder', content: ''},

    // Default tag select for bootstrap
    {block: 'form-control', tag: 'select', content: [
        "Пункт 1",
        "Пункт 2",
        "Пункт 3",
        {tag: 'option', attrs: {value: 'Значение', selected: true}, content: "Пункт 4"}
    ]},

    // Default tag textarea for bootstrap
    {block: 'form-control', tag: 'textarea', placeholder: 'Placeholder', content: "Текст в textarea поле ввода"}
];