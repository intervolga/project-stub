document.addEventListener("DOMContentLoaded", ()=>{
    var style = getComputedStyle(document.body);
    var colors = ['indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'white', 'gray', 'gray-dark', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

    var images = colors.map((color)=>{
        let hex = style.getPropertyValue('--'+color).replace('#', '').trim();
        return {
            block: 'img', src: 'http://placehold.it/100x100/'+hex+'?text='+color
        };
    });
    var palettes = document.getElementsByClassName('palette');
    for (var i = 0; i < palettes.length; i++) {
        palettes[i].innerHTML = BH.apply(images);
    }
})
