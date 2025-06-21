let play = document.getElementById("play");
let playIcon = document.getElementById("play-icon");
let audio = document.getElementById("audio");
let img = document.getElementById("img");
let trackName = document.getElementById("trackName");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let volumeup = document.getElementById("volumeup");
let volumedown = document.getElementById("volumedown");
let duration = document.getElementById("duration");
let currentTime = document.getElementById("currentTime");
let progress = document.getElementById("progress");

let audios = [
    "Vellipomaake-SenSongsMp3.Com.mp3",
    "Kadalalle - SenSongsMp3.Co (1).mp3",
    "Aakasam Baddalaina-SenSongsMp3.Co.mp3",
    "I Wanna Fly - SenSongsMp3.Co.mp3",
    "Samayama.mp3"
];

let images = [
    "vellipomake.jpg",
    "kadalalle.jpeg",
    "Akasam2.jpeg",
    "I wanna fly.jpeg",
    "samayama.jpeg"
    
];

let trackNames = [
    "Vellipomake",
    "Kadalalle",
    "Akasam Baddalaina",
    "I wanna Fly",
    "Samayama"
];

let currentIndex = 0;

audio.src = audios[currentIndex];
img.src = images[currentIndex];
trackName.textContent = trackNames[currentIndex];

play.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
});

next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= audios.length) {
        currentIndex = 0;
    }
    audio.src = audios[currentIndex];
    img.src = images[currentIndex];
    trackName.textContent = trackNames[currentIndex];
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
});

prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audios.length - 1;
    }
    audio.src = audios[currentIndex];
    img.src = images[currentIndex];
    trackName.textContent = trackNames[currentIndex];
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
});

volumeup.addEventListener("click", function () {
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
    if (audio.volume > 1) {
        audio.volume = 1;
    }
});

volumedown.addEventListener("click", function () {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
    if (audio.volume < 0) {
        audio.volume = 0;
    }
});

audio.addEventListener("ended", function () {
    currentIndex++;
    if (currentIndex >= audios.length) {
        currentIndex = 0;
    }
    audio.src = audios[currentIndex];
    img.src = images[currentIndex];
    trackName.textContent = trackNames[currentIndex];
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
});
