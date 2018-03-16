module.exports = function (bh) {
    bh.match('btn', function (ctx, json) {
        ctx
            .tag('a')
            .mod('styled', 'primary')
            .cls([
                ctx.mod('size') && 'btn-'+ctx.mod('size'),
                ctx.mod('styled') && 'btn-'+ctx.mod('styled')
            ].join(' '));

        switch (ctx.tag()) {
            case 'div': break;
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
                }).content(false, false);
                break;
                
            default:
                ctx.attr('type', 'button');
        }
    })
}