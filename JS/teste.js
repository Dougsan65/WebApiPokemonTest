document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('usuariologado').innerHTML = localStorage.getItem('name');
    const token = localStorage.getItem('token');


    
    
    // Button to fetch videos
    const fetchButton = document.getElementById('fetch-button');
    fetchButton.addEventListener('click', () => {
        fetchVideos();
    });

    // Metodo GET
    async function fetchVideos() {
    
        try {
            document.getElementById('carregando').innerHTML = 'Carregando...';
            document.getElementById('carregando').classList.add('carregando');
            const response = await fetch('https://api-nodejs-7vxu.onrender.com/videos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            }); 
            document.getElementById('carregando').innerHTML = '...';
            document.getElementById('carregando').classList.remove('carregando');
            console.log(response);
            if (response.ok) {
                const videos = await response.json();
                const videoList = document.getElementById('video-list');
                videoList.innerHTML = '';
                videos.forEach(video => {
                    const divVideo = document.createElement('div');
                    divVideo.classList.add('divVideo');
                    const liTitle = document.createElement('span');
                    liTitle.textContent = `Titulo:${video.title} `;
                    liTitle.classList.add('title');

                    const liDescription = document.createElement('span');
                    liDescription.textContent = `Descrição:${video.description} `;

                    const liDuration = document.createElement('span');
                    liDuration.textContent = `Duração:${video.duration} `;

                    const liZone = document.createElement('span');
                    liZone.textContent = `Zona:${video.zone} `;

                    const liId = document.createElement('span');
                    liId.textContent = `ID: ${video.id} `;

                    divVideo.appendChild(liTitle);  
                    divVideo.appendChild(liDescription);
                    divVideo.appendChild(liDuration);
                    divVideo.appendChild(liZone);
                    divVideo.appendChild(liId);
                    videoList.appendChild(divVideo);
                    
                });
            } else {
                throw new Error('Failed to fetch videos');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while fetching videos');
        }
    }
    
    // Metodo POST
    const form = document.getElementById('create-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const requestData = {};
        formData.forEach((value, key) => {
            requestData[key] = value;
        });

        try {
            document.getElementById('carregando').innerHTML = 'Carregando...';
            document.getElementById('carregando').classList.add('carregando');
            const response = await fetch('https://api-nodejs-7vxu.onrender.com/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(requestData)
            });
            document.getElementById('carregando').innerHTML = '';
            document.getElementById('carregando').classList.remove('carregando');
            if (response.ok) {
                console.log('asdasdsa'+response);
                alert('Video created successfully!');
            } else {
                throw new Error('Failed to create video');
            }
        } catch (error) {
            console.error(error);
            alert('API Failed to create video');
        }

    });
        
    //Metodo DELETE
    document.getElementById('delete-button').addEventListener('click', async (e) => {
        e.preventDefault();
        const id = document.getElementById('id').value;
        try {
            document.getElementById('carregando').innerHTML = 'Carregando...';
            document.getElementById('carregando').classList.add('carregando');
            const response = await fetch(`https://api-nodejs-7vxu.onrender.com/videos/${id}`, {
                method: 'DELETE',
                'Authorization': `${token}`
            });
            document.getElementById('carregando').innerHTML = '';
            document.getElementById('carregando').classList.remove('carregando');
            if (response.ok) {
                alert('Video deleted successfully!');
            } else {
                throw new Error('Failed to delete video');
            }
        } catch (error) {
            console.error(error);
            alert('API failed to delete the video');
        }
    });

    //Metodo PUT
    document.getElementById('update-button').addEventListener('click', async (e) => {
        e.preventDefault();
        const id = document.getElementById('id').value;
        const formData = new FormData(document.getElementById('create-form'));
        console.log(formData);
        const requestData = {};
        formData.forEach((value, key) => {
            console.log(value);
            console.log(key);
            requestData[key] = value;
        });
        console.log(JSON.stringify(requestData));

        try {
            document.getElementById('carregando').innerHTML = 'Carregando...';
            document.getElementById('carregando').classList.add('carregando');
            const response = await fetch(`https://api-nodejs-7vxu.onrender.com/videos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(requestData)
            });
            document.getElementById('carregando').innerHTML = '';
            document.getElementById('carregando').classList.remove('carregando');
            if (response.ok) {
                alert('Video updated successfully!');
            } else {
                throw new Error('Failed to update video');
            }
        } catch (error) {
            console.error(error);
            alert('API failed to update the video');
        }
    });

});








