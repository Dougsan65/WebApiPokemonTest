// Verifica se o token está presente na memória do navegador
const token = localStorage.getItem('token');

if (!token) {
    // Se o token não estiver presente, redirecione o usuário para a página de login
    window.location.href = 'index.html';
}
