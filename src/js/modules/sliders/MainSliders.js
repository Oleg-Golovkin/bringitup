export default class MainSliders {
    constructor({btnNextSelector = "", perantSlidesSelector = ""} = {}) {
        this.nextSlide = document.querySelectorAll(btnNextSelector);
        this.perantSlides = document.querySelector(perantSlidesSelector);
        this.slides = this.perantSlides.childNodes ;
        this.slideIndex = 1;
    }
}