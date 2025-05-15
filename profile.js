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










function scrollFunction() {
    window.addEventListener('scroll', () => {
        const prompt = document.getElementById('scrollPrompt');
        if (window.scrollY > 30) {
        prompt.style.opacity = '0';
        prompt.style.pointerEvents = 'none';
        } else {
        prompt.style.opacity = '1';
        prompt.style.pointerEvents = 'auto';
        }        
    });
}













function handleNotAButtonClick() {
  const container = document.getElementById('not-a-button-video');
  const video = document.getElementById('funVideo');
  const countdownEl = document.getElementById('countdown');
  const rebootCountdownEl = document.getElementById('reboot-countdown');
  const messageEl = document.querySelector('.fun-message');

  container.style.display = 'flex';
  video.currentTime = Math.max(video.duration - 10, 0);
  video.play();

  // Reset the countdown elements
  countdownEl.style.display = 'block';
  countdownEl.textContent = '5';
  rebootCountdownEl.style.display = 'block';
  rebootCountdownEl.textContent = '';

  // Step 1: "Oh no!" countdown
  messageEl.innerHTML = "Oh no! You have deleted all files. Self-destruct begins in...";
  let count = 5;
  countdownEl.textContent = count;
  
  const selfDestructInterval = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count <= 0) {
      countdownEl.style.display = 'none'; // Hide the countdown element
      clearInterval(selfDestructInterval);

      // Step 2: Clear text
      messageEl.innerHTML = '';

      // Step 3: Ha ha message
      setTimeout(() => {
        messageEl.innerHTML = 'Ha ha! <strong>Just kidding. That isn’t a button.</strong>';

        // Step 4: Clear text again
        setTimeout(() => {
          messageEl.innerHTML = '';

          // Step 5: Rebooting countdown
          let rebootCount = 3;
          rebootCountdownEl.textContent = `Rebooting in... ${rebootCount}`;

          const rebootInterval = setInterval(() => {
            rebootCount--;
            if (rebootCount > 0) {
              rebootCountdownEl.textContent = `Rebooting in... ${rebootCount}`;
            } else {
              clearInterval(rebootInterval);

              // Step 6: Clear everything and hide
              rebootCountdownEl.textContent = '';
              rebootCountdownEl.style.display = 'none'; // Hide the reboot countdown element
              container.style.display = 'none';
            }
          }, 1000);
        }, 2000); // Wait 2s after Ha ha message
      }, 1000); // Wait 1s after countdown
    }
  }, 1000);
}















var videoIndex = 0;
var videoList = [
  "348yyj_iG4s",
  "bdgXuVDv9DM",
  "Y_ISkADL330",
  "70mGPnlkmBM",
  "_rqwO6BJR18",
  "gGFg6jzjius"
];

var player;

function onYouTubeIframeAPIReady() {
  console.log("YouTube API Ready");
  player = new YT.Player('youtube-frame', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    rotateVideos();
  }
}

function rotateVideos() {
  videoIndex = (videoIndex + 1) % videoList.length;
  console.log("Rotating to video:", videoList[videoIndex]);
  player.cueVideoById(videoList[videoIndex]);
}

// Rotate every 10 seconds
setInterval(rotateVideos, 10000);
