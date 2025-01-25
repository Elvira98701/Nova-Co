export class Modal {
  constructor() {
    this.modal = document.querySelector("#modal");
    this.bindEvents();
  }

  open() {
    if (this.modal) {
      this.modal.classList.add("active");
      document.documentElement.classList.add("popup-opened");
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove("active");
      this.modal.classList.remove("hide");
      this.modal.removeEventListener("animationend", this.close);
      document.documentElement.classList.remove("popup-opened");
    }
  }

  hide() {
    if (this.modal) {
      this.modal.classList.add("hide");
      this.modal.addEventListener("animationend", this.close);
    }
  }

  onClick(event) {
    const action = event.target.dataset.modalAction;
    if (action && this[action]) {
      this[action]();
    }
  }

  bindEvents() {
    document.onclick = this.onClick.bind(this);
    this.close = this.close.bind(this);
  }
}
