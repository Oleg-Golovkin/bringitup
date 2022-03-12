export default class MainSliders {
    constructor({btnNextSelector = null, perantSlidesSelector = null, btnPreviousSelector = null} = {}) {
        this.nextSlide = document.querySelectorAll(btnNextSelector);
        this.perantSlides = document.querySelector(perantSlidesSelector);
        try{this.slides = this.perantSlides.childNodes;} catch(e){}        
        this.previousSlide = document.querySelectorAll(btnPreviousSelector);
        this.slideIndex = 1;
    }
}