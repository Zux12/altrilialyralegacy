"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

const videos = document.querySelectorAll("video");

function playVideos() {
  videos.forEach((video) => {
    video.muted = true;
    video.play().catch(() => {
      // Visitors can use the play button if autoplay is blocked.
    });
  });
}

playVideos();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    videos.forEach((video) => video.pause());
  } else {
    playVideos();
  }
});
