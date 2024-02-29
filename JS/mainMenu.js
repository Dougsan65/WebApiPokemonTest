const video = document.getElementById('videobackground');
const sound = document.getElementById('sound');
const links = document.querySelectorAll('ul li');
const audioClick = document.getElementById("menuClick");
const audioHover = document.getElementById("audioHover");
const jogarButton = document.getElementById('Jogar');


sound.addEventListener('click', () => {
    if (video.muted == false) {
        video.muted = true;
        sound.classList.remove('fa-volume-up');
        sound.classList.add('fa-volume-mute');
    } else {
        video.muted = false;
        sound.classList.remove('fa-volume-mute');
        sound.classList.add('fa-volume-up');
    }

    clickSound();
});


sound.addEventListener('mouseenter', hoverSound());
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', hoverSound);
    console.log(links[i]);
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', clickSound);
}

function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    audio.play();
}

function hoverSound(){
    var audio = new Audio('src/audio/menu/clickHover.wav');
    audio.play();
}