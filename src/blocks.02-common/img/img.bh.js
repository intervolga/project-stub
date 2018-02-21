module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        ctx.tag('img').attrs({
            role: 'img',
            width: json.width,
            height: json.height,
            src: ctx.process(json.src || {block: '1px'}),
            title: json.title,
            alt: ctx.content()
        });
    })
}