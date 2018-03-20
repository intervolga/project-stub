module.exports = function (bh) {
    bh.match('form-check__input', function (ctx, json) {
        ctx
            .tag('input')
            .mix({block: 'form-check-input'})
            .attrs({
                id: ctx.tParam('ID'),
                type: 'checkbox',
                name: ctx.tParam('ID'),
                value: ctx.generateId()
            })
    })
}