var videoIndex = 0;
var videoList = [
    "348yyj_iG4s",
    "bdgXuVDv9DM",
    "Y_ISkADL330",
    "70mGPnlkmBM",
    "_rqwO6BJR18",
    "gGFg6jzjius"
    // Add more video IDs as needed
];

var player; // YouTube Iframe API player object
var timeoutId; // ID of the timeout
var pausedTime; // Time when the video was paused

function onYouTubeIframeAPIReady() {
  console.log("onYouTubeIframeAPIReady called");
    player = new YT.Player('youtube-frame', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        rotateVideos();
    } else if (event.data === YT.PlayerState.PAUSED) {
        pausedTime = new Date().getTime();
        timeoutId = setTimeout(checkPauseTime, 10000); // Check pause time after 10 seconds
    } else if (event.data === YT.PlayerState.PLAYING) {
        clearTimeout(timeoutId); // Clear the timeout
    }
}

function checkPauseTime() {
    var currentTime = new Date().getTime();
    if (currentTime - pausedTime >= 10000) {
        rotateVideos();
    }
}

function rotateVideos() {
    videoIndex = (videoIndex + 1) % videoList.length;
    player.loadVideoById(videoList[videoIndex]);
}

// Load the first video
player.loadVideoById(videoList[0]);

// Add an event listener to the document to detect clicks outside the container
document.addEventListener('click', function(event) {
    if (!document.getElementById('.youtube-container').contains(event.target)) {
        rotateVideos();
    }
});










function changeSong() {
    // Get the selected song from the dropdown
    var songSelector = document.getElementById("song-selector");
    var selectedSong = songSelector.value;
  
    // Get the audio player and update its source
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = selectedSong;
  
    // Play the new song automatically (optional)
    audioPlayer.play();
  }









function handleClick() {
  alert('Oops! This is not a button 😄');
}
