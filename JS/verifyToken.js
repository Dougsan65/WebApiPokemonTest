async function tokenVerify() {
    response = await fetch('https://api-nodejs-7vxu.onrender.com/verificartoken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
}


// Verifica se o token está presente na memória do navegador
const token = localStorage.getItem('token');

if (!token) {
    alert('Você precisa estar logado para acessar esta página!');
    // Se o token não estiver presente, redirecione o usuário para a página de login
    window.location.href = '/index.html';
}else{
    tokenVerify();
}
