class EksplorRestaurants extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="restaurant">
            <div class="info__content">
                <h2 class="title__content" tabindex="0">
                    Eksplor Restaurant
                </h2>
            </div>
            <div id="restaurants" class="list__resto">
            </div>
        </section>`;
    }
}

customElements.define('eksplor-restaurants', EksplorRestaurants);
