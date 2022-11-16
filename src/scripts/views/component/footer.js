class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
          <div class="center_items">      
              <p tabindex="0"> &copy;2022 <span>Restoku corp</span></p>
              <br>
          </div>
        </footer>
        `;
    }
}

customElements.define('footer-app', Footer);
