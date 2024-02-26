const token = localStorage.getItem('token');
if (token) {
    window.location.href = 'gameloop.html';
} else {
    window.location.href = 'loginPage.html';
}