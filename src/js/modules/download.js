export default class Download {
    constructor({
        btnSelector,
        
    }) {
        // Кнопка, по которой кликаем при скачивании файлов
        this.btn = document.querySelectorAll(btnSelector);
    //    адресс файла
        this.path = "./assets/img/Bitmap.jpg";
    }
    // 3. Создается ссылка; помещается в любом месте страницы;
    // присваиваются к ней атрибуты - адреса файла и обозначения, 
    // того, что это ссылка для скачивания; в ручном порядке
    // присваиваем клик; удаляем ссылку    
    download(path){
        const a = document.createElement("a");
        a.setAttribute("href", path);
        a.setAttribute("download", "Bitmap");
        document.body.append(a);
        a.click();
        a.remove();
    }

    // 1. Вешаем клик на кнопку
    init() {
        this.btn.forEach((item, i) => {
            item.addEventListener('click', () => {
                // 2. Присваиваем путь к ссылке
                this.download(this.path);
            });
        });
    }
}