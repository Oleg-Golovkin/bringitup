import BigSliders from './modules/sliders/BigSliders';
import MiniSlider from './modules/sliders/MiniSlider';
import ShowVideo from './modules/showVideo';
import ShowCards from './modules/showCards';
import Forms from './modules/forms';
import MaskPhone from './modules/maskPhone';

document.addEventListener('DOMContentLoaded', () => {

    const NewBigSliders = new BigSliders({
        btnNextSelector: ".next",
        perantSlidesSelector: ".page"
    });
    NewBigSliders.plusSlide();

    const NewBig2Sliders = new BigSliders({
        btnNextSelector: ".next",
        btnPreviousSelector: ".prev",
        perantSlidesSelector: ".moduleapp"

    });
    NewBig2Sliders.plusSlide();


    const NewMiniSlider = new MiniSlider({
        nextSlideSelector: ".showup__next",
        previousSlideSelector: ".showup__prev",
        perantSlidesSelector: ".showup__content-slider"
    });
    NewMiniSlider.plusSlide();

    const NewMini2Slider = new MiniSlider({
        nextSlideSelector: ".modules__info-btns .slick-next",
        previousSlideSelector: ".modules__info-btns .slick-prev",
        perantSlidesSelector: ".modules__content-slider",
        // autoPlay: true,
    });
    NewMini2Slider.plusSlide();

    const NewMini3Slider = new MiniSlider({
        nextSlideSelector: ".feed__slider .slick-next",
        previousSlideSelector: ".feed__slider .slick-prev",
        perantSlidesSelector: ".feed__slider",

    });
    NewMini3Slider.plusSlide();

    new ShowVideo({
        btnSelector: ".schedule .play__circle",
        overlaySelector: ".overlay"
    }).init();
    
    new ShowVideo({
        btnSelector: ".module__video-item .play__circle",
        overlaySelector: ".overlay"
    }).init();

    // E8iYMQIY9dk

    const cardsOne = new ShowCards({
        containerSelector: '.officerold'
    });
    cardsOne.init();

    const cardsTwo = new ShowCards({
        containerSelector: '.officernew'
    });
    cardsTwo.init();

    new Forms({
        formSelector: '.form'
    }).formsAll();

    new MaskPhone().initMask();
});