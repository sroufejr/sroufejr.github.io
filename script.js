function slideBackground() {

let background = document.getElementsByClassName('video').style.backgroundImage;
let i = 0;

setInterval(function(){
    background.style.backgroundPosition = i + 'px 0';
    i++;    
}, 10);
    }

window.addEventListener('load', slideBackground, false);
