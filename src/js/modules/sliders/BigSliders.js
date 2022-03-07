import MainSliders from "./MainSliders";

export default class BigSliders extends MainSliders  {
    constructor(btnNextSelector, perantSlidesSelector) {
        super (btnNextSelector, perantSlidesSelector);
    }  

    show(){
        console.log(this.slides);
    }

    plusSlide() {
        this.nextSlide.forEach(nextSlide => {
            nextSlide.addEventListener('click', () => {
                this.showSlide(++this.slideIndex);
            });          
        });

        // this.previousSlide.forEach(previousSlide => {
        //     previousSlide.addEventListener('click', () => {
        //         this.showSlide(--this.slideIndex);
        //     });          
        // });
    }

    showSlide(n) {
        // 3.1 Прокрутка слайдов по кругу
        // при достижении верхнего слайда
        if (n > this.slides.length) {
            //  Если то, что получилось в plusSlide
            // больше общего количества слайлов, то
            // возвращаемся к первому слайду            
            this.slideIndex = 1;
        }
        // 3.1 При достижении ниже
        // перого слайда
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // 3.2 Удаляем все слайды
        this.slides.forEach(item => {
            item.style.display = "none";

        });

        this.slides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.add('animate__animated', 'animate__fadeInDown');
            // slide.classList.remove('animate__backInDown');
        });

        // 3.3. Показываем слайд с соответствующим 
        // индексом. По умолчанию 1
        // this.slides[this.slideIndex - 1].classList.add('animate__backInDown');
        this.slides[this.slideIndex - 1].style.display = "block";
        /* добавляем один из по порядку */
        // -1, поскольку первый слайд под
        // индексом 0 
    }
}