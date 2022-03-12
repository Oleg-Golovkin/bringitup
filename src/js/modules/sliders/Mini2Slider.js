import MainSliders from "./MainSliders";

export default class Mini2Slider extends MainSliders {
    constructor(btnNextSelector, perantSlidesSelector, btnPreviousSelector) {
        super(btnNextSelector, perantSlidesSelector, btnPreviousSelector);
        this.width = window.getComputedStyle(this.perantSlides).width;
    }

    transformation() {
        this.perantSlides.style.display = 'flex';
        this.perantSlides.style.overflow = 'hidden';
        this.perantSlides.style.flexWrap = 'wrap';
        this.perantSlides.style.alingItems = 'flex-start';
        this.slides[0].lastChild.style.opacity = '1';
    }

    nextSlideWrapper() {
        this.nextSlide.forEach(nextSlide => {
            nextSlide.addEventListener('click', () => {
                this.perantSlides.append(this.slides[0]);
                this.slides.forEach(slide => {
                    slide.lastChild.style.opacity = '0.4';
                    slide.firstChild.lastChild.style.opacity = '0';
                    slide.classList.remove("card-active");
                });
                this.slides[0].lastChild.style.opacity = '1';
                this.slides[0].firstChild.lastChild.style.opacity = '1';
                this.slides[0].classList.add("card-active");
            });
        });
    }

    previousSlideWrapper() {
        this.previousSlide.forEach(previousSlide => {
            previousSlide.addEventListener('click', () => {
                this.perantSlides.prepend(this.slides[this.slides.length - 1]);
            });
        });
    }

    plusSlide() {
        this.previousSlideWrapper();
        this.previousSlideWrapper();
        setInterval(function(){this.nextSlideWrapper();}, 2000);
    }
}