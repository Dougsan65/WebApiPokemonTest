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
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', clickSound);
}

async function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    await audio.play();
}

function hoverSound(){
    var audio = new Audio('src/audio/menu/clickHover.wav');
    audio.play();
}

document.getElementById('account-Create').addEventListener('click', () => {
    clickSound();
    setTimeout(function() {window.location.href = '/Pages/loginPage.html'}, 1000); 
});

document.getElementById('logout').addEventListener('click', () => {
    // 1. Testar a reprodução do som isoladamente
    clickSound();
    
    // 2. Forçar um pequeno atraso antes de mudar de página
    setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenTemp');
        localStorage.removeItem('name');
        
        window.location.href = '/index.html';
    }, 1000); 
});

document.getElementById('mainGame').addEventListener('click', () => {
    clickSound();
    setTimeout(function() {window.location.href = '/Pages/gameloop.html'}, 1000); 
});
