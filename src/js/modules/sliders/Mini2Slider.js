import MainSliders from "./MainSliders";

export default class Mini2Slider extends MainSliders {
    constructor(nextSlideSelector, perantSlidesSelector, previousSlideSelector) {
        super(nextSlideSelector, perantSlidesSelector, previousSlideSelector);

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

    interval() {
        let interval = setInterval(() => this.next(), 2000);
        this.slides.forEach(slide => {
            slide.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                clearInterval(interval);                
            });
            slide.addEventListener("mouseout", (e) => {
                interval = setInterval(() => this.next(), 2000);
                e.stopPropagation();
            });
        });
    }

    plusSlide() {
        this.nextClick();
        this.previousClick();
        this.interval();
        this.transformation();
    }
}