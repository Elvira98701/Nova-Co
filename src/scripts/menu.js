export class Menu {
  constructor() {
    this.navigation = document.querySelector("#navigation");
    this.burgerButton = document.querySelector("#burgerButton");
    this.bindEvents();
  }

  toggleShow(event) {
    event.stopPropagation();
    this.navigation.classList.toggle("show");
  }

  removeShow() {
    this.navigation.classList.remove("show");
  }

  bindEvents() {
    this.burgerButton.addEventListener("click", this.toggleShow.bind(this));
    window.addEventListener("click", this.removeShow.bind(this));
  }
}
