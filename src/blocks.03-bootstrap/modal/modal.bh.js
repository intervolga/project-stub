module.exports = function (bh) {
    bh.match('modal', function (ctx, json) {
        ctx
            .attrs({
                id: ctx.generateId(),
                tabindex: '-1',
                role: 'dialog'
            })
            .content([
                {elem: 'dialog', content: [
                    {elem: 'content', content: [
                        ctx.content()
                    ]}
                ]}
            ], true);
    });
}; 