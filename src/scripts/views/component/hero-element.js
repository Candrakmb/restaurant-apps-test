class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero-text">
                <h1  tabindex="0">butuh healing? Disini Tempatnya</h1>
                <p  tabindex="0">anda penat mari healing ditempat yang kami rekomendasikan, perut kenyang
                  penat pun hilang </p>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-element', HeroElement);
