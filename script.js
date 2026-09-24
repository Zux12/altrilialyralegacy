"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

// Play only one video at a time.
const videos = Array.from(document.querySelectorAll("video"));

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

// Pause videos when the visitor leaves the tab.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    videos.forEach((video) => video.pause());
  }
});
