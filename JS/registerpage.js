const form = document.getElementById('register-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
        console.log(key)

    });
    try {
        const responseTokenTemp = await fetch(`https://api-nodejs-7vxu.onrender.com/usuariosregistrados/gerartokenTemporario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        const responsetokenTemp = await responseTokenTemp.json();
        const tokenTemp = responsetokenTemp.token;
        localStorage.setItem('tokenTemp', tokenTemp);
        
    } catch (error) {
        console.error(error);
    }
    

    try {
        const tokenTemp = localStorage.getItem('tokenTemp');
        const response = await fetch(`https://api-nodejs-7vxu.onrender.com/usuariosregistrados?search=${requestData['name']}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenTemp
            }
        });
    
        const responseEmail = await fetch(`https://api-nodejs-7vxu.onrender.com/emailsregistrados?search=${requestData['email']}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenTemp
            }
        });

        if (response.ok || responseEmail.ok) {
            const data = await response.json();
            const dataEmail = await responseEmail.json();
            console.log(data.length, dataEmail.length);
            
            if (data.length > 0 || dataEmail.length > 0) {
                alert('Usuário ou e-mail já registrado!');
                return;
            }
        } else {
            throw new Error('Falha ao verificar usuário ou e-mail');
        }
    
        const registerResponse = await fetch('https://api-nodejs-7vxu.onrender.com/registrarusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
    
        if (registerResponse.ok) {
            const data = await registerResponse.json();
            console.log(data);
            localStorage.removeItem('tokenTemp');
            alert('Registrado com sucesso!');
        } else {
            throw new Error('Falha ao registrar usuário');
        }
    } catch (error) {
        console.error(error);
        alert('Falha na comunicação com o servidor'+error);
    }
    
});