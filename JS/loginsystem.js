// Login System
formLogin = document.getElementById('login-form')
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    clickSound();
    setTimeout(function() {console.log('oi')}, 1000); 
    token = localStorage.getItem('token');
    if (token) {
        alert('Você já está logado!');
        window.location.href = '/Pages/gameloop.html';
    }
    
    const formData = new FormData(formLogin);
    const requestData = {};
    formData.forEach((value, key) => {
        if (key === 'username') {
            requestData['username'] = value;
        } else if (key === 'password') {
            requestData['password'] = value;
        }

    });
    // verificar se o usuario ja existe
    console.log(requestData);

    try {
        const response = await fetch(`https://back-end-application-p34r.onrender.com/usuarios/autenticarUsuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(requestData)
        });
        console.log(JSON.stringify(requestData));
    
        

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            const levelUser = data.leveluser;
            console.log(data);
            localStorage.setItem('token', token);
            localStorage.setItem('name', requestData['name']);
            window.location.href = '/Pages/criarPersonagem.html';
            console.log(token);
            alert('Logado com sucesso!');
           
        } else {
            alert('Usuario ou senha incorretos!');
        }
    
        
    } catch (error) {
        console.error(error);
        
    }
    
});

document.getElementById('logoPoke').addEventListener('click', () => {
    clickSound();
    setTimeout(function() {window.location.href = '/index.html'}, 1000); 
});

async function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    await audio.play();
}



