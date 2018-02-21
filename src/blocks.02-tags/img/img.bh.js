module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        ctx.tag('img').attrs({
            src: json.src || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            alt: ctx.content()
        });
    })
}