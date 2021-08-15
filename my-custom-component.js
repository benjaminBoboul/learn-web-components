class CardElement extends HTMLElement {
  connectedCallback() {
    console.debug("Add CardEelement to the page")
  }
}

if (!customElements.get("some-element")) {
  customElements.define("some-element", CardEelement)
}
