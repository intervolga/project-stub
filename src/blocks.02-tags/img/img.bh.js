module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        ctx.tag('img').attrs({
            src: json.src
        });
    })
}