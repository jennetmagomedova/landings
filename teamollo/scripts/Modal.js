class Modal {
  selectors = {
    root: "[data-js-modal]",
    openButton: "[data-js-modal-open]",
    closeButton: "[data-js-modal-close]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.openButtonElement = document.querySelector(this.selectors.openButton);
    this.closeButtonElement = this.rootElement.querySelector(
      this.selectors.closeButton,
    );
    this.bindEvents();
  }

  bindEvents() {
    this.openButtonElement.addEventListener("click", () => {
      this.rootElement.showModal();
    });

    this.closeButtonElement.addEventListener("click", () => {
      this.rootElement.close();
    });

    this.rootElement.addEventListener("close", () => {
      this.openButtonElement.focus();
    });

    this.rootElement.addEventListener("click", (event) => {
      if (event.target === this.rootElement) {
        this.rootElement.close();
      }
    });
  }
}

export default Modal;
