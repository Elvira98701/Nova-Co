export class Slider {
  constructor() {
    this.slides = document.querySelector("#slides");
    this.slideElements = document.querySelectorAll(".projects__slide");
    this.prevButton = document.querySelector("#prevButton");
    this.nextButton = document.querySelector("#nextButton");
    this.currentIndex = 0;
    this.startX = 0;
    this.endX = 0;
    this.updateSlidesPerView();
    this.updateSlider();
    this.bindEvents();
  }

  updateSlidesPerView() {
    if (window.innerWidth <= 750) {
      this.slidesPerView = 1;
    } else if (window.innerWidth <= 1249) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 4;
    }
  }

  handleTouchStart(event) {
    this.startX = event.touches[0].clientX;
  }

  handleTouchMove(event) {
    this.endX = event.touches[0].clientX;
  }

  handleTouchEnd() {
    const deltaX = this.startX - this.endX;
    const threshold = 50;

    if (deltaX > threshold) {
      this.changeSlide(this.currentIndex + 1);
    } else if (deltaX < -threshold) {
      this.changeSlide(this.currentIndex - 1);
    }
  }

  changeSlide(index) {
    if (index < 0) {
      this.currentIndex = this.slideElements.length - this.slidesPerView;
    } else if (index > this.slideElements.length - this.slidesPerView) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = index;
    }

    this.updateSlider();
  }

  updateSlider() {
    const offset = -this.currentIndex * (100 / this.slidesPerView);
    this.slides.style.transform = `translateX(${offset}%)`;
  }

  bindEvents() {
    this.prevButton.addEventListener("click", () =>
      this.changeSlide(this.currentIndex - 1)
    );
    this.nextButton.addEventListener("click", () =>
      this.changeSlide(this.currentIndex + 1)
    );
    window.addEventListener("resize", () => this.updateSlidesPerView());
    this.slides.addEventListener(
      "touchstart",
      (e) => this.handleTouchStart(e),
      { passive: true }
    );
    this.slides.addEventListener("touchmove", (e) => this.handleTouchMove(e), {
      passive: true,
    });
    this.slides.addEventListener("touchend", () => this.handleTouchEnd());
  }
}
