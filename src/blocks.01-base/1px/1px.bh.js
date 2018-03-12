module.exports = function (bh) {
    bh.match('1px', function (ctx, json) {
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    })
}