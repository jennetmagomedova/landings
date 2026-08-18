import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const rootSelector = "[data-js-slider]";
const sliderParams = {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 29,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 29,
    },
  },
};

class Slider {
  selectors = {
    root: rootSelector,
    swiper: "[data-js-slider-swiper]",
    previousButton: "[data-js-slider-previous-button]",
    nextButton: "[data-js-slider-next-button]",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
    this.previousButtonElement = this.rootElement.querySelector(
      this.selectors.previousButton,
    );
    this.nextButtonElement = this.rootElement.querySelector(
      this.selectors.nextButton,
    );
    this.init();
  }

  init() {
    new Swiper(this.swiperElement, {
      ...sliderParams,
      navigation: {
        prevEl: this.previousButtonElement,
        nextEl: this.nextButtonElement,
      },
    });
  }
}

class SliderCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element);
    });
  }
}

export default SliderCollection;
