document.addEventListener("DOMContentLoaded", async function() {
    // Carregar personagens
    try {
        const response = await fetch('https://api-nodejs-7vxu.onrender.com/personagens', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Erro ao carregar os personagens');
        }

        const data = await response.json();
        
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.remove(); // Remover a div de loading se ela existir
        }
        
        for (let i = 0; i < data.length; i++) {
            const char = data[i];
            console.log(data[i]);
            localStorage.setItem(`name0${i+1}`, char.nomepersonagem);
        }

        // Adicionar os personagens no HTML
        for (let i = 1; i <= data.length; i++) {
            document.getElementById(`name0${i}`).innerHTML = localStorage.getItem(`name0${i}`);
        }
        
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('logoPoke').addEventListener('click', () => {
    setTimeout(function() {window.location.href = '/index.html'}, 1000); 
});
