"use strict";

(() => {
  const data = window.ALTRILIA_TESTIMONIALS;
  const section = document.getElementById("testimoni");

  if (!data || !section) return;

  const reviews = data.reviews;
  const track = section.querySelector(".review-track");
  const dialog = document.getElementById("review-dialog");
  const sampleNotice = section.querySelector(".review-sample-note");
  const motionButton = section.querySelector(".review-motion");
  let lastTrigger = null;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(`${date}T00:00:00Z`));

  function setStars(element, rating) {
    element.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);
    element.setAttribute("aria-label", `${rating} dari 5 bintang`);
  }

  sampleNotice.hidden = !data.sample;

  const average = reviews.length
    ? reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length
    : 0;

  section.querySelector(".review-average").textContent =
    reviews.length ? average.toFixed(1) : "—";

  section.querySelector(".review-count").textContent =
    `${reviews.length} ${data.sample ? "Ulasan" : "ulasan"}`;

  function openReview(review, trigger) {
    lastTrigger = trigger;

    dialog.querySelector(".review-dialog-name").textContent = review.name;
    dialog.querySelector(".review-dialog-date").textContent =
      formatDate(review.date);
    dialog.querySelector(".review-dialog-text").textContent = review.text;
    dialog.querySelector(".review-dialog-label").textContent =
      data.sample ? "CONTOH ULASAN" : "ULASAN PELANGGAN";

    setStars(dialog.querySelector(".review-dialog-stars"), review.rating);
    dialog.showModal();
  }

  [...reviews].reverse().forEach((review) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "review-card";
    card.setAttribute(
      "aria-label",
      `Baca ${data.sample ? "contoh " : ""}ulasan ${review.name}, ` +
      `${review.rating} dari 5 bintang`
    );

    const stars = document.createElement("span");
    stars.className = "review-stars";
    setStars(stars, review.rating);

    const quote = document.createElement("span");
    quote.className = "review-excerpt";
    quote.textContent = review.text;

    const name = document.createElement("span");
    name.className = "review-name";
    name.textContent = review.name;

    const date = document.createElement("span");
    date.className = "review-date";
    date.textContent = formatDate(review.date);

    const more = document.createElement("span");
    more.className = "review-read";
    more.textContent = "Baca selengkapnya ↗";

    card.append(stars, quote, name, date, more);
    card.addEventListener("click", () => openReview(review, card));
    track.appendChild(card);
  });

  dialog.querySelector(".review-dialog-close").addEventListener(
    "click",
    () => dialog.close()
  );

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();

    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    ) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });

  // Slow horizontal movement. Pause for reading and interaction.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let paused = reduceMotion.matches;
  let hovering = false;
  let touching = false;
  let direction = 1;
  let previousTime = 0;
  let scrollRemainder = 0;
  let manualPauseUntil = 0;

  function updateMotionButton() {
    motionButton.textContent = paused
      ? "Lanjutkan gerakan"
      : "Jeda gerakan";
    motionButton.setAttribute("aria-pressed", String(paused));
  }

  updateMotionButton();

  motionButton.addEventListener("click", () => {
    paused = !paused;
    updateMotionButton();
  });

  reduceMotion.addEventListener("change", (event) => {
    paused = event.matches;
    updateMotionButton();
  });

  track.addEventListener("mouseenter", () => { hovering = true; });
  track.addEventListener("mouseleave", () => { hovering = false; });
  track.addEventListener("pointerdown", () => { touching = true; });

  window.addEventListener("pointerup", () => {
    if (touching) manualPauseUntil = performance.now() + 4000;
    touching = false;
  });

  window.addEventListener("pointercancel", () => { touching = false; });

  track.addEventListener("wheel", () => {
    manualPauseUntil = performance.now() + 4000;
  }, { passive: true });

  function animate(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
    previousTime = time;

    const focused = track.contains(document.activeElement);
    const bounds = track.getBoundingClientRect();
    const visible = bounds.bottom > 0 && bounds.top < window.innerHeight;
    const limit = track.scrollWidth - track.clientWidth;

    if (
      !paused && !hovering && !touching && !focused &&
      !dialog.open && !document.hidden && visible &&
      time > manualPauseUntil && limit > 0
    ) {
      if (track.scrollLeft >= limit - 1) direction = -1;
      if (track.scrollLeft <= 0) direction = 1;

      scrollRemainder += elapsed * 0.04;

const pixels = Math.floor(scrollRemainder);

if (pixels >= 1) {
  track.scrollLeft += direction * pixels;
  scrollRemainder -= pixels;
}
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // Prevent accidental submission until a real submission service is added.
  document.getElementById("review-form").addEventListener(
    "submit",
    (event) => event.preventDefault()
  );
})();
