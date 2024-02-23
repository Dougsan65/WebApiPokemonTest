document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const fetchButton = document.getElementById('fetch-button');

    fetchButton.addEventListener('click', () => {
        fetchVideos();
    });

    async function fetchVideos() {
        try {
            const response = await fetch('https://api-nodejs-7vxu.onrender.com/videos'); // Substitua com o URL real da sua API
            console.log(response);
            if (response.ok) {
                const videos = await response.json();
                videoList.innerHTML = '';
                videos.forEach(video => {
                    const li = document.createElement('li');
                    li.textContent = `${video.title} - ${video.duration}`;
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
