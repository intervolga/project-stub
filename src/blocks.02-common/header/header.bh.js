module.exports = function (bh) {
    bh.match('header', function (ctx, json) {
        ctx.tag('header');
    })
}