var audio = document.querySelector('audio');
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var prevBtn = document.querySelector('#prev');
var nextBtn = document.querySelector('#next');
var playlist = ['music_Faded.mp3', 'music_fallingdown.mp3', 'music_Rather Be.mp3', 'music_stay.mp3'];
var currentTrack = 0;

playBtn.addEventListener('click', function() {
  audio.play();
});

pauseBtn.addEventListener('click', function() {
  audio.pause();
});

prevBtn.addEventListener('click', function() {
  currentTrack--;
  if (currentTrack < 0) {
    currentTrack = playlist.length - 1;
  }
  audio.src = playlist[currentTrack];
  audio.play();
});

nextBtn.addEventListener('click', function() {
  currentTrack++;
  if (currentTrack >= playlist.length) {
    currentTrack = 0;
  }
  audio.src = playlist[currentTrack];
  audio.play();
});

console.log(currentTrack);
