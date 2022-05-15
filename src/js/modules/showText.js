export default class ShowText {
    constructor({
        plusSelector,
        textSelector
    }) {
        this.plus = document.querySelectorAll(plusSelector);
        this.text = document.querySelectorAll(textSelector);
    }

    init() {
        this.plus.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (window.getComputedStyle(this.text[i]).display == "none") {
                    this.text[i].style.display = "block";
                } else {
                    this.text[i].style.display = "none";
                }
            });
        });


    }
}