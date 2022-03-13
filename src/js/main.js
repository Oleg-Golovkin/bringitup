import BigSliders from './modules/sliders/BigSliders';
import Big2Sliders from './modules/sliders/Big2Sliders';
import Mini1Slider from './modules/sliders/Mini1Slider';
import Mini2Slider from './modules/sliders/Mini2Slider';



document.addEventListener('DOMContentLoaded', () => {

    try {
        const NewBigSliders = new BigSliders({
            btnNextSelector: ".next",
            perantSlidesSelector: ".page"
        });
        NewBigSliders.plusSlide();
    } catch (e) {
        const NewBig2Sliders = new Big2Sliders({
            btnNextSelector: ".next",
            btnPreviousSelector: ".prev",
            perantSlidesSelector: ".moduleapp"

        });
        NewBig2Sliders.plusSlide();
    }

    const NewMini1Slider = new Mini1Slider({
        nextSlideSelector: ".showup__next",
        previousSlideSelector: ".showup__prev",
        perantSlidesSelector: ".showup__content-slider"
    });
    NewMini1Slider.plusSlide();
    NewMini1Slider.transformation();

    const NewMini2Slider = new Mini2Slider({
        nextSlideSelector: ".modules__info-btns .slick-next",
        previousSlideSelector: ".modules__info-btns .slick-prev",
        perantSlidesSelector: ".modules__content-slider"
    });
    
   
    // NewMini2Slider.nextWrapper();
    // NewMini2Slider.previousWrapper();
    NewMini2Slider.plusSlide();
    NewMini2Slider.transformation();

});