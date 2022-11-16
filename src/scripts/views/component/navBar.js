class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul id="drawer" class="nav">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.instagram.com/candra_kmb/?hl=id" rel="noopener" target="_blank">About Us</a></li>
            </ul>
        `;
    }
}

customElements.define('nav-bar', NavBar);
