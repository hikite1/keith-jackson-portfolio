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

  messageEl.innerHTML = "Oh no! You have deleted all files. Self-destruct begins in...";
  let count = 5;
  countdownEl.textContent = count;

  // Store interval and timeout references
  let selfDestructInterval, haTimeout, clearTimeout1, rebootInterval;

  function cleanup() {
    clearInterval(selfDestructInterval);
    clearTimeout(haTimeout);
    clearTimeout(clearTimeout1);
    clearInterval(rebootInterval);
    messageEl.innerHTML = '';
    countdownEl.style.display = 'none';
    rebootCountdownEl.style.display = 'none';
    container.style.display = 'none';
  }

  // Add click event to cancel everything
  container.onclick = cleanup;

  selfDestructInterval = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count <= 0) {
      countdownEl.style.display = 'none';
      clearInterval(selfDestructInterval);

      messageEl.innerHTML = '';

      haTimeout = setTimeout(() => {
        messageEl.innerHTML = 'Ha ha! <strong>Just kidding. That isn’t a button.</strong>';

        clearTimeout1 = setTimeout(() => {
          messageEl.innerHTML = '';

          let rebootCount = 3;
          rebootCountdownEl.textContent = `Rebooting in... ${rebootCount}`;

          rebootInterval = setInterval(() => {
            rebootCount--;
            if (rebootCount > 0) {
              rebootCountdownEl.textContent = `Rebooting in... ${rebootCount}`;
            } else {
              clearInterval(rebootInterval);
              rebootCountdownEl.textContent = '';
              rebootCountdownEl.style.display = 'none';
              container.style.display = 'none';
            }
          }, 1000);
        }, 2000);
      }, 1000);
    }
  }, 1000);
}
