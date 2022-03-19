export default class ShowVideo {
    constructor({
        // Не обязательный блок
        // Кнопка, открывающая модльное окно с плеером.       
        btnSelector,
        // Не обязательный блок
        // Само модальное окно
        overlaySelector
    }) {
        this.btn = document.querySelectorAll(btnSelector);
        this.overlay = document.querySelector(overlaySelector);
        // Не обязательный блок. Крестик модального окна
        this.close = this.overlay.querySelector(".close");
    }

    // 2. Функция создания плеера. 
    newPlayer(url) {
        // Пустая переменная, к которой присваевается
        // плеер
        this.player = new YT.Player('player', {
            // размер плеера
            height: '100%',
            // размер плеера
            width: '100%',
            // Адрес видео. Он берется с адресной
            // строки из YouTube 
            // Последнее слово, https://www.youtube.com/watch?v=J58VPpPrmQU
            videoId: `${url}`,
        });
    }

    init() {
        //1. Создается тэг script (код иднетичен тому, который
        // на оф. сайте 
        // https://developers.google.com/youtube/iframe_api_reference?hl=ru#Loading_a_Video_Player))
        const tag = document.createElement('script');
        //1.1. Присваиваем к нему путь.
        tag.src = "https://www.youtube.com/iframe_api";
        // 1.2. Находим главный тэг скрипта в верстке
        const firstScriptTag = document.getElementsByTagName('script')[0];
        //  1.3. Перед уже находящимся в верстке тэгом скрипта помещаем
        //  созданный здесь тэг скрипта
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        // 2. При нажатии на кнопку
        this.btn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                // 2.1. Показывается окно с плеером
                this.overlay.style.display = "flex";
    //            Чтобы плеер запускался один раз. Иначе
    // будут ошибки.
                if (!this.player) {
                // 3. Запускается плеер
                // Этот адрес можно брать из кнопки, открывающей
                // модальное окно, в виде дата атрибута
                    this.newPlayer('J58VPpPrmQU');
                }
                console.log(this.player);
            });
        });

        // Не обязательный блок. Закрытие модального окна
        this.overlay.addEventListener("click", (event) => {
            this.overlay.style.display = "none";
            
            this.player.stopVideo();

            if (event.target == this.close) {
                this.overlay.style.display = "none";

            }
        });
    }
}