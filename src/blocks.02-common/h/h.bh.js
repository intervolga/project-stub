module.exports = function (bh) {
    bh.match('h', function (ctx, json) {
        json.size = json.size ? json.size : 1;
        ctx.tag('h'+json.size).cls('h'+json.size).bem(false);
    })
}