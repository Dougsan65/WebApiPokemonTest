document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const fetchButton = document.getElementById('fetch-button');

    fetchButton.addEventListener('click', () => {
        fetchVideos();
    });

    async function fetchVideos() {
        try {
            const response = await fetch('https://api-nodejs-7vxu.onrender.com/videos'); 
            console.log(response);
            if (response.ok) {
                const videos = await response.json();
                videoList.innerHTML = '';
                videos.forEach(video => {
                    const li = document.createElement('li');
                    li.textContent = `Titulo: ${video.title} Duracão: ${video.duration} ID do video: ${video.id}`;
                    videoList.appendChild(li);
                });
            } else {
                throw new Error('Failed to fetch videos');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while fetching videos');
        }
    }

    
});

const form = document.getElementById('create-form');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
        console.log(value, key);
        console.log(requestData);
    });

    try {
        const response = await fetch('https://api-nodejs-7vxu.onrender.com/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        if (response.ok) {
            console.log('asdasdsa'+response);
            alert('Video created successfully!');
        } else {
            throw new Error('Failed to create video');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while creating the video');
    }
});

