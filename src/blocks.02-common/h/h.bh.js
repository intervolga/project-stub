module.exports = function (bh) {
    bh.match('h', function (ctx, json) {
        ctx.tag(json.size && 'h'+json.size);
    })
}