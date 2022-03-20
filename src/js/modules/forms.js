export default class Forms {
    constructor({
        formSelector
    }) {
        this.forms = document.querySelectorAll(formSelector);        
    }

    formsAll() {
        this.forms.forEach(form => {
            // console.log(form);
            this.postForms(form);
        });
    }

    postForms(form) {
        console.log(form);
        form.addEventListener("submit", (e) => {
            console.log('form');
            e.preventDefault();
            const formData = new FormData(form);
            this.post("assets/question.php", formData)
                // 1.4.  обрабатываем то, что получили
                //    в res.text();
                // При положительном варианте событий при 
                // повторном обращении к .then можем выполнять  
                // действия
                .then(data => {
                    console.log(data);
                    // statusMessage.textContent = message.success;
                })
                .catch(() => {
                    console.log('хуй');
                    // statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    // form.reset();
                });
        });
    }

    async post (url, request) {
        let  res = await fetch(url, {
            method: "POST",
            // отправляем информацию на сервер
            body: request
        });
        // Возвращаем полученный ответ от сервера
        // о том, что  информация отправлена .then 
        // или нет .catch
        return await res.text();
    };






}