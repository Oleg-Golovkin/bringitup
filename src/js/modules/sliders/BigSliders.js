import MainSliders from "./MainSliders";

export default class BigSliders extends MainSliders {
    constructor(btnNextSelector, perantSlidesSelector, btnPreviousSelector) {
        super(btnNextSelector, perantSlidesSelector, btnPreviousSelector);
    }

    plusSlide() {
        this.btnNext.forEach(btnNext => {
            btnNext.addEventListener('click', () => {
                this.showSlide(++this.slideIndex);
            });
            btnNext.parentNode.previousElementSibling.addEventListener('click', () => {
                this.showSlide(this.slideIndex = 1);
            });
        });

        try {
            this.btnPrevious.forEach(btnPrevious => {
                btnPrevious.addEventListener('click', () => {
                    this.showSlide(--this.slideIndex);
                });
                btnPrevious.parentNode.previousElementSibling.addEventListener('click', () => {
                    this.showSlide(this.slideIndex = 1);
                });
            });
        } catch (e) {}
    }      

    showSlide(n) {
        try {
            // 3.1 Прокрутка слайдов по кругу
            // при достижении верхнего слайда
            // console.log(this.slides);
            // console.log(this.slides.length);
            // console.log(n);
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

            try {
                this.hanson = document.querySelector(".hanson");
                this.hanson.style.display = "none";
                this.hanson.classList.add("animate__animated", "animate__fadeInUpBig");
                if (this.slideIndex == 3) {
                    setTimeout(() => {
                        this.hanson.style.display = "block";
                    }, 1000);
                }
            } catch (e) {}

            // 3.2 Удаляем все слайды
            this.slides.forEach(item => {
                item.style.display = "none";

            });

            this.slides.forEach(slide => {
                slide.style.display = "none";
                slide.classList.add('animate__animated', 'animate__fadeIn');
            });

            // 3.3. Показываем слайд с соответствующим 
            // индексом. По умолчанию 1
            this.slides[this.slideIndex - 1].style.display = "block";
            /* добавляем один из по порядку */
            // -1, поскольку первый слайд под
            // индексом 0 

            
        } catch (e) {}
    }
}