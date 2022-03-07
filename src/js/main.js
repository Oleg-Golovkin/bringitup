import BigSliders from './modules/sliders/BigSliders';
import Big2Sliders from './modules/sliders/Big2Sliders';



document.addEventListener('DOMContentLoaded', () => {

    const NewBigSliders = new BigSliders({
        btnNextSelector: ".next",
        perantSlidesSelector: ".page"
    });
    NewBigSliders.plusSlide();

    const NewBig2Sliders = new Big2Sliders({
        btnNextSelector: ".next",
        perantSlidesSelector: ".moduleapp"
    });
    NewBig2Sliders.plusSlide();

    // const New2Sliders = new Sliders({
    //     btnNextSelector: ".next",
    //     perantSlidesSelector: ".moduleapp",
    //     btnPreviousSelector: '.prev'
    // });
    // New2Sliders.plusSlide();




});