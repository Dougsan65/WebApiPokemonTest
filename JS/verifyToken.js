async function tokenVerify() {
    response = await fetch('https://api-nodejs-7vxu.onrender.com/verificartoken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
    if (response.ok) {
        console.log('Token verificado com sucesso!');
    } else {
        alert('Seu login expirou! Faça login novamente!');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        window.location.href = '/Pages/loginPage.html';
    }
}


// Verifica se o token está presente na memória do navegador
const token = localStorage.getItem('token');

if (!token) {
    alert('Você precisa estar logado para acessar esta página!');
    // Se o token não estiver presente, redirecione o usuário para a página de login
    window.location.href = '/Pages/loginPage.html';
}else{
    tokenVerify();
}
