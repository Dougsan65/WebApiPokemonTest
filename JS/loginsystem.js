// Login System
formLogin = document.getElementById('login-form')
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    clickSound();
    setTimeout(function() {console.log('oi')}, 1000); 
    token = localStorage.getItem('token');
    if (token) {
        alert('Você já está logado!');
        window.location.href = 'gameloop.html';
    }
    
    const formData = new FormData(formLogin);
    const requestData = {};
    formData.forEach((value, key) => {
        if (key === 'name') {
            requestData['name'] = value;
        } else if (key === 'password') {
            requestData['password'] = value;
        }

    });
    // verificar se o usuario ja existe
    console.log(requestData);

    try {
        const response = await fetch(`https://api-nodejs-7vxu.onrender.com/autenticacaologin`, {
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
            localStorage.setItem('token', token);
            localStorage.setItem('name', requestData['name']);
            window.location.href = 'gameloop.html';
            console.log(token);
            alert('Logado com sucesso!');
           
        } else {
            alert('Usuario ou senha incorretos!');
        }
    
        
    } catch (error) {
        console.error(error);
        
    }
    
});

async function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    await audio.play();
}

