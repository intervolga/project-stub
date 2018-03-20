module.exports = function (bh) {
    bh.match('form-check__label', function (ctx, json) {
        ctx
            .tag('label')
            .mix({block: 'form-check-label'})
            .attr('for', ctx.tParam('ID'))
    })
}