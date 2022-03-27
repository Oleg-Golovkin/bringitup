export default class Forms {
    constructor({
        formSelector
    }) {
        this.forms = document.querySelectorAll(formSelector);
    }

    ShowThanksModal(form) {
        const img = document.createElement("img"),
            parent = form.parentNode;
        form.remove();
        parent.append(img);
        img.src = "assets/img/ok.png";
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.margin = "0 auto";
        img.style.marginTop = "20%";
        img.style.display = "block";
        img.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(function () {
            img.remove();
            parent.append(form);
        }, 2000);
    }

    validateEmail() {
        const email = document.querySelectorAll('[name="email"]');
        email.forEach(email => {
            email.addEventListener("input", (e) => {
                email.value = email.value.replace(/[а-яА-Я]/, '');
            });
        });
    }

    formsAll() {
        this.forms.forEach(form => {
            this.postForms(form);
        });
        this.validateEmail();      
    }

    postForms(form) {
        form.addEventListener("submit", (e) => {
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
                    this.ShowThanksModal(form);
                })
                .catch(() => {
                    console.log('хуй');
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    async post(url, request) {
        let res = await fetch(url, {
            method: "POST",
            // отправляем информацию на сервер
            body: request
        });
        // Возвращаем полученный ответ от сервера
        // о том, что  информация отправлена .then 
        // или нет .catch
        return await res.text();
    }






}