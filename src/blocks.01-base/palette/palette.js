document.addEventListener("DOMContentLoaded", (e)=>{
    var colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
    var style = getComputedStyle(document.body);
    var items = colors.map((name)=>{
        let hex = style.getPropertyValue('--'+name).trim();
        return {elem: 'item', attrs: {'style': 'background:'+hex}, content: {elem: 'title', content: ['$'+name, ': ', hex]}};
    });

    window.getBH((BH)=>{
        var palettes = document.getElementsByClassName('palette');
        for (var i = 0; i < palettes.length; i++) {
            palettes[i].outerHTML = BH.apply({block: 'palette', content: items})
        }
    });
})
