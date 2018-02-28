module.exports = function (bh) {
    bh.match('footer', function (ctx, json) {
        ctx.tag('footer');
    })
}