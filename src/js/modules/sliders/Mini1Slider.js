import MainSliders from "./MainSliders";

export default class Mini1Slider extends MainSliders {
    constructor(btnNextSelector, perantSlidesSelector, btnPreviousSelector) {
        super(btnNextSelector, perantSlidesSelector, btnPreviousSelector);
    }
    
    transformation() {
        try {
            this.perantSlides.style.display = 'flex';
            this.perantSlides.style.overflow = 'hidden';
            this.perantSlides.style.flexWrap = 'wrap';
            this.perantSlides.style.alingItems = 'flex-start';
            this.slides[0].lastChild.style.opacity = '1';
        } catch (e) {}
    }

    plusSlide() {
        this.nextSlide.addEventListener('click', () => {
            this.perantSlides.append(this.slides[0]);
            this.slides.forEach(slide => {
                slide.lastChild.style.opacity = '0.4';
                slide.firstChild.lastChild.style.opacity = '0';
            });
            this.slides[0].lastChild.style.opacity = '1';
            this.slides[0].firstChild.lastChild.style.opacity = '1';
        });

        this.previousSlide.addEventListener('click', () => {
            this.perantSlides.prepend(this.slides[this.slides.length - 1]);
            this.slides.forEach(slide => {
                slide.lastChild.style.opacity = '0.4';
                slide.firstChild.lastChild.style.opacity = '0';
            });
            this.slides[0].lastChild.style.opacity = '1';
            this.slides[0].firstChild.lastChild.style.opacity = '1';
        });

    }
}