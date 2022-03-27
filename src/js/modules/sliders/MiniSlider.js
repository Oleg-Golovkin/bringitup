import MainSliders from "./MainSliders";

export default class MiniSlider extends MainSliders {
    constructor(btnNextSelector, perantSlidesSelector, btnPreviousSelector, autoPlay) {
        super(btnNextSelector, perantSlidesSelector, btnPreviousSelector, autoPlay);
    }

    transformation() {
        try {
            this.perantSlides.style.display = 'flex';
            this.perantSlides.style.overflow = 'hidden';
            this.perantSlides.style.flexWrap = 'wrap';
            this.perantSlides.style.alingItems = 'flex-start';
            this.slides[0].lastChild.style.opacity = '1';
            this.slides.forEach(slide => {
                try {
                    if (slide.closest('.feed__slider')) {
                        this.perantSlides.style.height = '380px';
                        slide.style.minHeight = "auto";
                        slide.style.maxHeight = "314px";
                        slide.style.marginBottom = "50px";
                        this.slides[0].style.minHeight = "314px";
                        this.slides[0].style.maxHeight = "none";
                        if (slide.getAttribute("type") == "button") {
                            slide.style.marginBottom = "0px";
                            slide.style.marginTop = "100px";
                        }
                    }
                } catch (e) {}
            });
            this.slides[0].lastChild.style.opacity = '1';
            this.slides[0].firstChild.lastChild.style.opacity = '1';
        } catch (e) {}
    }
    // try {} catch (e) {}
    next() {
        this.perantSlides.append(this.slides[0]);     
        console.log(this.slides[0]);      
        this.slides.forEach(slide => {
            try {
                if (slide.closest('.showup__content-slider')) {
                    slide.classList.remove("card-active");
                    slide.lastChild.style.opacity = '0.4';
                    slide.firstChild.lastChild.style.opacity = '0';
                    this.slides[0].lastChild.style.opacity = '1';
                    this.slides[0].firstChild.lastChild.style.opacity = '1';
                }
                if (slide.closest('.feed__slider')) {
                    if (slide.getAttribute("type") == "button") {
                        slide.style.marginBottom = "0px";
                        slide.style.marginTop = "100px";
                        this.perantSlides.append(slide);
                    }
                    slide.classList.remove("feed__item-active");                                   
                    if (slide.getAttribute("type") != "button") {
                        slide.style.minHeight = "auto";
                        slide.style.maxHeight = "314px";
                        slide.style.marginBottom = "50px";
                        this.slides[0].style.minHeight = "314px";
                        this.slides[0].style.maxHeight = "none";
                    } 
                    this.slides[0].classList.add("feed__item-active");                   
                }
                if (slide.closest('.modules__content-slider')) {
                    slide.classList.remove("card-active");
                    this.slides[0].classList.add("card-active");
                }
            } catch (e) {}
        });

    }

    nextClick() {
        this.nextSlide.addEventListener('click', () => this.next());

    }

    previous() {
        this.perantSlides.prepend(this.slides[this.slides.length - 1]);
        this.slides.forEach(slide => {
            slide.lastChild.style.opacity = '0.4';
            slide.firstChild.lastChild.style.opacity = '0';
            if (slide.closest('.modules__content-slider')) {
                slide.classList.remove("card-active");
            }
        });
        this.slides[0].lastChild.style.opacity = '1';
        this.slides[0].firstChild.lastChild.style.opacity = '1';
        if (this.slide.closest('.modules__content-slider')) {
            this.slides[0].classList.add("card-active");
        }

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
        try {
            this.nextClick();
            this.previousClick();

            if (this.autoPlay) {
                this.interval();
            }
        } catch (e) {}
        this.transformation();
    }

}