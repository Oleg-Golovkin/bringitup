import BigSliders from './modules/sliders/BigSliders';
import Big2Sliders from './modules/sliders/Big2Sliders';
import Mini1Slider from './modules/sliders/Mini1Slider';



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
        btnNextSelector: ".showup__next",
        btnPreviousSelector: ".showup__prev",
        perantSlidesSelector: ".showup__content-slider"
    });
    NewMini1Slider.plusSlide();
    NewMini1Slider.transformation();
    



    // const perantSlides = document.querySelector('.page');
    // const slides = perantSlides.children;
    // const es = perantSlides.childNodes;
    // // console.log(slides);
    // // console.log(es);




    // for(let i = 0; i < slides.length; i++) {
    //     console.log(slides[i]);
    // }
    // slides.forEach(item => {
    //     console.log(item);
    // });
    // es.forEach(es => {
    //     console.log(es);
    // });

    // const s = document.querySelector('.moduleapp');
    // const es = s.children;
    // console.log(es);









});