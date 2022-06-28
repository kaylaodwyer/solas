const homeVideo = document.querySelector(".video-wrapper");
const btn = document.querySelector(".video-button");
btn.onclick = function () {
  if (homeVideo.style.display !== "none") {
    homeVideo.style.display = "none";
  } else {
    homeVideo.style.display = "block";
  }
};

let aboutModal = document.querySelector(".modal-about");
let aboutButton = document.querySelector(".about-button");
aboutButton.onclick = function () {
  aboutModal.style.display = "flex";
};

let processModal = document.querySelector(".modal-process");
let processButton = document.querySelector(".process-button");
processButton.onclick = function () {
  processModal.style.display = "flex";
};

let contactModal = document.querySelector(".modal-contact");
let contactButton = document.querySelector(".contact-button");
contactButton.onclick = function () {
  contactModal.style.display = "flex";
};

let connectModal = document.querySelector(".modal-connect");
let connectButton = document.querySelector(".connect-button");
connectButton.onclick = function () {
  connectModal.style.display = "flex";
};

window.onclick = function (event) {
  event.preventDefault();
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target == processModal) {
    processModal.style.display = "none";
  }
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target == connectModal) {
    connectModal.style.display = "none";
  }
};
