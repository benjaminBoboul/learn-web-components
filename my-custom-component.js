class CardElement extends HTMLParagraphElement {

  constructor () {
    super()

    this.setAttribute("class", "antialiased")
  }

  connectedCallback() {
    console.debug("Add CardEelement to the page")
  }
}

if (!customElements.get("some-element")) {
  customElements.define("some-element", CardElement, {extends: "p"})
}
