function gantiEpisode(videoID) {
    const iframe = document.getElementById('videoPlayer');
    iframe.src = `https://short.ink/${videoID}`;


const episodePrompt = document.getElementById('episodePrompt');
    episodePrompt.style.display = 'none';
}
