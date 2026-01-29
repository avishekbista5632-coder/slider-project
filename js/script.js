const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progress = document.querySelector(".progress span");

let index = 0;
let duration = 5000; // 5 seconds
let timer;

/* Show slide */
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");

    resetProgress();
}

/* Next slide */
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

/* Previous slide */
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

/* Progress animation */
function resetProgress() {
    progress.style.transition = "none";
    progress.style.width = "0";

    setTimeout(() => {
        progress.style.transition = `width ${duration}ms linear`;
        progress.style.width = "100%";
    }, 50);
}

/* Auto play */
function startSlider() {
    timer = setInterval(nextSlide, duration);
    resetProgress();
}

function restartSlider() {
    clearInterval(timer);
    startSlider();
}

/* Events */
nextBtn.onclick = () => {
    nextSlide();
    restartSlider();
};

prevBtn.onclick = () => {
    prevSlide();
    restartSlider();
};

/* Init */
showSlide(index);
startSlider();
