const video = document.getElementById('videobackground');
const sound = document.getElementById('sound');
const links = document.querySelectorAll('ul li');
const audioClick = document.getElementById("menuClick");
const audioHover = document.getElementById("audioHover");
const jogarButton = document.getElementById('Jogar');
console.log(links);
jogarButton.addEventListener('click', () => {
    
    clickSound();
});

sound.addEventListener('click', () => {
    sound.classList.toggle('fa-volume-up');

    if (video.muted == false) {
        video.muted = true;
    }else {
        video.muted = false;
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