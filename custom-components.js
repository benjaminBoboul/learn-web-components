class CardElement extends HTMLDivElement {
    constructor () {
        super()
        this.classList.add("inline-block")
        this.classList.add("shadow-md")
        this.classList.add("h-32")
        this.classList.add("w-20")
    }
}

if (!customElements.get("card-item")) {
    customElements.define("card-item", CardElement, {extends: "div"})
}


class DeckOfCardsElement extends HTMLDivElement {
    constructor () {
        super()
        this.classList.add("flex")
        this.classList.add("items-start")
    }
}

if (!customElements.get("deck-item")) {
    customElements.define("deck-item", CardElement, {extends: "div"})
}