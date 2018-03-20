module.exports = function (bh) {
    bh.match('table', function (ctx, json) {
        ctx.tag('table');
    });
};