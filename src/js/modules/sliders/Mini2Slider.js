import MainSliders from "./MainSliders";

export default class Mini2Slider extends MainSliders {
    constructor(nextSlideSelector, perantSlidesSelector, previousSlideSelector) {
        super(nextSlideSelector, perantSlidesSelector, previousSlideSelector);
        this.width = window.getComputedStyle(this.perantSlides).width;
        this.stopInterval = true;
    }

    transformation() {
        this.perantSlides.style.display = 'flex';
        this.perantSlides.style.overflow = 'hidden';
        this.perantSlides.style.flexWrap = 'wrap';
        this.perantSlides.style.alingItems = 'flex-start';
        this.slides[0].lastChild.style.opacity = '1';
        
    }

    next() {
        this.perantSlides.append(this.slides[0]);
        this.slides.forEach(slide => {
            slide.lastChild.style.opacity = '0.4';
            slide.firstChild.lastChild.style.opacity = '0';
            slide.classList.remove("card-active");
        });
        this.slides[0].lastChild.style.opacity = '1';
        this.slides[0].firstChild.lastChild.style.opacity = '1';
        this.slides[0].classList.add("card-active");
    }

    nextClick() {
        this.nextSlide.addEventListener('click', () => {
            this.next();
        });
    }

    previous() {
        this.perantSlides.prepend(this.slides[this.slides.length - 1]);
        this.slides.forEach(slide => {
            slide.lastChild.style.opacity = '0.4';
            slide.firstChild.lastChild.style.opacity = '0';
            slide.classList.remove("card-active");
        });
        this.slides[0].lastChild.style.opacity = '1';
        this.slides[0].firstChild.lastChild.style.opacity = '1';
        this.slides[0].classList.add("card-active");
    }

    previousClick() {
        this.previousSlide.addEventListener('click', () => this.previous());
    }

    plusSlide() {
        this.nextClick();
        this.previousClick();      
        setInterval(() => this.next(), 2000);       
    }   
}