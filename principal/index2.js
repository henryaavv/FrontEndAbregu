const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let timer;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlider();
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateSlider();
});

nextBtn.addEventListener("click", goToNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

function startSliderTimer() {
  timer = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
}

function stopSliderTimer() {
  clearInterval(timer);
}

slider.addEventListener("mouseenter", stopSliderTimer);
slider.addEventListener("mouseleave", startSliderTimer);

startSliderTimer(); // Start the initial timer

/**TRANSSICION DE GALERIA DE VIDEOS */
const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 5000 // Cambiar cada 5 segundos
  },
  on: {
      slideChange: function () {
          // Detener la reproducción de videos al cambiar de diapositiva
          const videos = document.querySelectorAll('.swiper-slide video');
          videos.forEach(video => {
              video.pause();
          });
      }
  }
});
