module.exports = function (bh) {
    bh.match('figure__caption', function (ctx, json) {
        ctx
            .tag('figcaption')
            .mix({block: 'figure-caption'});
    })
}