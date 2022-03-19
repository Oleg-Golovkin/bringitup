export default class showCards {
    constructor({
        containerSelector
    }) {
        this.container = document.querySelector(containerSelector);
        this.cards = this.container.querySelectorAll(".officer__card-item");
        this.plus = this.container.querySelector(".plus");
        this.index = 0;
    }

    hideCards() {
        this.cards.forEach(card => {
            card.style.display = 'none';
            card.classList.add("animate__animated", "animate__fadeIn");
        });
    }

    showLastCards() {        
        this.cards[this.cards.length - 1].style.display = 'flex';
    }

    plusIndex() {
        this.plus.addEventListener("click", () => {
            this.plusCard(this.index +=1);
        });        
    }

    plusCard(n) {        
        if(n >= this.cards.length - 1) {
            this.index = this.cards.length - 1;
        }
        this.cards[this.index - 1].style.display = 'flex';
    }

    init() {
        this.hideCards();
        this.showLastCards();
        this.plusIndex();
    }
}