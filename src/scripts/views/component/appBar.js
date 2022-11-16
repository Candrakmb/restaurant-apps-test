class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
            <i class="fa fa-cutlery fa-3x" aria-hidden="true"></i>
            <h1 tabindex="0">
              Resto Ku
            </h1>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);
