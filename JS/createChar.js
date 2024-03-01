const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');

// Fechar modal ao clicar no botão de fechar
closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');
});

// Abrir modal ao selecionar a opção de criar personagem 01
document.getElementById('select-createChar01').addEventListener('click', function() {
    modal.classList.remove('hidden');

    const confirmNameBtn = document.getElementById('confirmName');
    const inputName = document.getElementById('characterName');

    // Lidar com a entrada do nome do personagem
    inputName.addEventListener('input', function(e) {
        inputName.value = e.target.value;
    });

    // Confirmar o nome do personagem
    confirmNameBtn.addEventListener('click', function() {
        console.log(inputName.value);
        modal.classList.add('hidden'); // Fechar o modal após confirmar o nome

        // Adicionar o nome no banco de dados
        const response = fetch('https://api-nodejs-7vxu.onrender.com/criarpersonagem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({name: inputName.value})
        }).then(response => {
            console.log(response);
            localStorage.setItem('name01', inputName.value);
            window.location.href = '/Pages/criarPersonagem.html';
        });

        console.log(response);
        
    });


});

// Abrir modal ao selecionar a opção de criar personagem 02
document.getElementById('select-createChar02').addEventListener('click', function() {
    modal.classList.remove('hidden');

    const confirmNameBtn = document.getElementById('confirmName');
    const inputName = document.getElementById('characterName');

    // Lidar com a entrada do nome do personagem
    inputName.addEventListener('input', function(e) {
        inputName.value = e.target.value;
    });

    // Confirmar o nome do personagem
    confirmNameBtn.addEventListener('click', function() {
        console.log(inputName.value);
        modal.classList.add('hidden'); // Fechar o modal após confirmar o nome

        // Adicionar o nome no banco de dados
        const response = fetch('https://api-nodejs-7vxu.onrender.com/criarpersonagem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({name: inputName.value})
        }).then(response => {
            console.log(response);
            localStorage.setItem('name01', inputName.value);
            window.location.href = '/Pages/criarPersonagem.html';
        });

        console.log(response);
        
    });
});

// Abrir modal ao selecionar a opção de criar personagem 03
document.getElementById('select-createChar03').addEventListener('click', function() {
    modal.classList.remove('hidden');

    const confirmNameBtn = document.getElementById('confirmName');
    const inputName = document.getElementById('characterName');

    // Lidar com a entrada do nome do personagem
    inputName.addEventListener('input', function(e) {
        inputName.value = e.target.value;
    });

    // Confirmar o nome do personagem
    confirmNameBtn.addEventListener('click', function() {
        console.log(inputName.value);
        modal.classList.add('hidden'); // Fechar o modal após confirmar o nome

        // Adicionar o nome no banco de dados
        const response = fetch('https://api-nodejs-7vxu.onrender.com/criarpersonagem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({name: inputName.value})
        }).then(response => {
            console.log(response);
            localStorage.setItem('name01', inputName.value);
            window.location.href = '/Pages/criarPersonagem.html';
        });

        console.log(response);
        
    });
});

