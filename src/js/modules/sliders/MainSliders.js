export default class MainSliders {
    constructor({
        nextSlideSelector = null,
        previousSlideSelector = null,
        perantSlidesSelector = null,       
        btnNextSelector = null,
        btnPreviousSelector = null
    } = {}) {
        this.nextSlide = document.querySelector(nextSlideSelector);        
        this.previousSlide = document.querySelector(previousSlideSelector);
        this.perantSlides = document.querySelector(perantSlidesSelector);
        try {
            this.slides = this.perantSlides.childNodes;
        } catch (e) {}        
        this.slideIndex = 1;
        this.btnNext = document.querySelectorAll(btnNextSelector);
        this.btnPrevious = document.querySelectorAll(btnPreviousSelector);
    }
}