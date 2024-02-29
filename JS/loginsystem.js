
// Register System
// form = document.getElementById('login-form')
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(form);
//     const requestData = {};
//     formData.forEach((value, key) => {
//         requestData[key] = value;
//         console.log(key)

//     });
//     const emailForm = requestData['email'];
//     // verificar se o usuario ja existe
//     document.getElementById('carregando').innerHTML = 'Carregando...';
//     document.getElementById('carregando').classList.add('carregando');
//     try {
//         const response = await fetch(`https://api-nodejs-7vxu.onrender.com/usuariosregistrados?search=${requestData['name']}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
    
//         const responseEmail = await fetch(`https://api-nodejs-7vxu.onrender.com/emailsregistrados?search=${requestData['email']}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         document.getElementById('carregando').innerHTML = '';
//         document.getElementById('carregando').classList.remove('carregando');
//         if (response.ok || responseEmail.ok) {
//             const data = await response.json();
//             const dataEmail = await responseEmail.json();
//             console.log(data.length, dataEmail.length);
            
//             if (data.length > 0 || dataEmail.length > 0) {
//                 alert('Usuário ou e-mail já registrado!');
//                 document.getElementById('login-data').classList.add('hidden');
//                 document.getElementById('login-form').classList.remove('hidden');
//                 return;
//             }
//         } else {
//             throw new Error('Falha ao verificar usuário ou e-mail');
//         }
    
//         const registerResponse = await fetch('https://api-nodejs-7vxu.onrender.com/registrarusuario', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestData)
//         });
    
//         if (registerResponse.ok) {
//             const data = await registerResponse.json();
//             console.log(data);
//             document.getElementById('login-data').classList.add('hidden');
//             document.getElementById('login-form').classList.remove('hidden');
//             alert('Registrado com sucesso!');
//         } else {
//             throw new Error('Falha ao registrar usuário');
//         }
//     } catch (error) {
//         console.error(error);
//         alert('Falha na comunicação com o servidor'+error);
//     }
    
// });


// //Button to go to login form
// document.getElementById('alreadyRegistred').addEventListener('click', async (e) => {
//     e.preventDefault();
//     document.getElementById('login-data').classList.add('hidden');
//     document.getElementById('login-form').classList.remove('hidden');
// });



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




//Button to go to register form
// document.getElementById('notRegistred').addEventListener('click', async (e) => {
//     e.preventDefault();
//     document.getElementById('login-form').classList.add('hidden');
//     document.getElementById('login-data').classList.remove('hidden');
// });


// document.getElementById('logout').addEventListener('click', async (e) => {
//     e.preventDefault();
//     localStorage.removeItem('token');
//     localStorage.removeItem('name');
//     window.location.href = 'index.html';
// });


async function clickSound() {
    var audio = new Audio('src/audio/menu/clickMenu.wav');
    await audio.play();
}

