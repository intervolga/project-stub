module.exports = function (bh) {
    bh.match('table__thead', function (ctx, json) {
        ctx.tag('thead');
    });
};