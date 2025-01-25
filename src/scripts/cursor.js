export class Cursor {
  constructor() {
    this.cursor = document.querySelector("#cursor");
    this.mouseoverlay = document.querySelectorAll(".mouseoverlay");
    this.mouse = {
      x: -100,
      y: -100,
    };
    this.isMoving = false;

    this.getCoordsFromLocalStorage();
    this.animateCursor();
    this.bindEvents();
  }

  updateCoordinates(e) {
    this.mouse.x = e.clientX - this.cursor.offsetWidth / 2;
    this.mouse.y = e.clientY - this.cursor.offsetHeight / 2;
    this.isMoving = true;
  }

  stopMoving() {
    this.isMoving = false;
  }

  animateCursor() {
    if (this.isMoving) {
      this.cursor.style.transform = `translate(${this.mouse.x}px,${this.mouse.y}px)`;
      this.isMoving = false;
    }

    requestAnimationFrame(this.animateCursor.bind(this));
  }

  setCoordsToLocalStorage() {
    localStorage.setItem("cursorX", this.mouse.x);
    localStorage.setItem("cursorY", this.mouse.y);
  }

  getCoordsFromLocalStorage() {
    const x = parseFloat(localStorage.getItem("cursorX"));
    const y = parseFloat(localStorage.getItem("cursorY"));

    if (!isNaN(x) && !isNaN(y)) {
      this.cursor.style.transform = `translate(${x}px,${y}px)`;
    }
  }

  bindEvents() {
    window.addEventListener("mousemove", this.updateCoordinates.bind(this));
    window.addEventListener("mousedown", this.stopMoving.bind(this));
    window.addEventListener("mouseup", this.updateCoordinates.bind(this));
    window.addEventListener(
      "beforeunload",
      this.setCoordsToLocalStorage.bind(this)
    );

    this.mouseoverlay.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        this.cursor.classList.add("overlay");
      });

      elem.addEventListener("mouseleave", () => {
        this.cursor.classList.remove("overlay");
      });
    });
  }
}
