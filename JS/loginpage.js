async function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    await audio.play();
}

const soundCreate = document.getElementById('soundCreate');
soundCreate.addEventListener('click', (event) => {
    event.preventDefault();
    clickSound();
    setTimeout(function() {window.location.href = 'registerPage.html'}, 1000); 
});
