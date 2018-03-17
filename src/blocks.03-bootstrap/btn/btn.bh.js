module.exports = function (bh) {
    bh.match('btn', function (ctx, json) {
        ctx
            .tag('a')
            .mod('styled', 'primary')
            .mix({block: 'btn-'+ctx.mod('styled')})
            .mix({block: !!ctx.mod('size') && 'btn-'+ctx.mod('size')});

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