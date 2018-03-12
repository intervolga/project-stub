module.exports = function (bh) {
    bh.match('list__li', function (ctx, json) {
        ctx.tag('li');
    })
}