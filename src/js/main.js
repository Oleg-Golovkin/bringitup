import BigSliders from './modules/sliders/BigSliders';
import MiniSlider from './modules/sliders/MiniSlider';
import showVideo from './modules/showVideo';
import showCards from './modules/showCards';

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
        autoPlay: true,
    });
    NewMini2Slider.plusSlide();

    const newShowVideo = new showVideo({
        btnSelector: ".play__circle",
        overlaySelector: ".overlay"
    });
    newShowVideo.init();

    const cardsOne = new showCards({
        containerSelector: '.officerold'
    });
    cardsOne.init();

    const cardsTwo = new showCards({
        containerSelector: '.officernew'
    });
    cardsTwo.init();

});