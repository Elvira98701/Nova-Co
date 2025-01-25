export class Accordion {
  constructor() {
    this.accordion = document.querySelector("#accordion");
    this.accordionContent = document.querySelectorAll(
      "#accordion .services__content"
    );
    this.bindEvents();
  }

  close() {
    this.accordionContent.forEach((item) => {
      item.style.maxHeight = null;
    });
  }

  open(header) {
    const content = header.nextElementSibling;

    if (!content) {
      console.warn("ошибка");
      return;
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      this.close();

      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  onClick(event) {
    const header = event.target.closest(".services__header");
    if (header) {
      this.open(header);
    }
  }

  bindEvents() {
    this.accordion.addEventListener("click", this.onClick.bind(this));
  }
}
