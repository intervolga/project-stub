module.exports = function (bh) {
    bh.match('btn', function (ctx, json) {
        ctx
            .tag('a')
            .cls('btn-primary');

        switch (ctx.tag()) {
            case 'a':
                ctx.attrs({
                    role: 'button',
                    href: json.url || '#'
                }); 
                break;

            case 'input':
                ctx.attrs({
                    type: 'submit',
                    value: ctx.content() 
                }).content(false, true);
                break;

            case 'button':
                ctx.attr('type', 'button');
                break;

            default:
                ctx.attr('role', 'button');
        }
    })
}