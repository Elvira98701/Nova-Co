export class TeamSlider {
  constructor() {
    this.slides = document.querySelectorAll(".team__slide");
    this.prevButton = document.querySelector("#teamPrevButton");
    this.nextButton = document.querySelector("#teamNextButton");
    this.currentIndex = 0;
    this.bindEvents();
  }

  handleChangeSlide(direction) {
    const activeSlide = document.querySelector(".team__slider .active");
    activeSlide.classList.remove("active");

    this.currentIndex =
      direction === "next"
        ? (this.currentIndex + 1) % this.slides.length
        : (this.currentIndex - 1 + this.slides.length) % this.slides.length;

    this.slides[this.currentIndex].classList.add("active");
  }

  bindEvents() {
    setInterval(() => this.handleChangeSlide("next"), 5000);
    this.nextButton.addEventListener("click", () =>
      this.handleChangeSlide("next")
    );
    this.prevButton.addEventListener("click", () =>
      this.handleChangeSlide("prev")
    );
  }
}
