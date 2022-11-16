class socialMedia extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div class="container">
    <div class="icon_item">
      <a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1" class="icon_link"
        target="_blank" aria-label="facebook">
        <i class="fa fa-facebook fa-5x" aria-hidden="true"></i> </a>
      <p>facebook</p>
    </div>
    <div class="icon_item">
      <a href="https://www.instagram.com/candra_kmb/?hl=id" target="_blank" class="icon_link" aria-label="instagram">
      <i class="fa fa-instagram fa-5x" aria-hidden="true"></i></a>
      <p>Instagram</p>
    </div>
    <div class="icon_item">
      <a href="https://twitter.com/i/flow/login" target="_blank" class="icon_link" aria-label="twitter">
      <i class="fa fa-twitter fa-5x" aria-hidden="true"></i></a>
      <p>Twitter</p>
    </div>
  </div>
        `;
    }
}

customElements.define('social-media', socialMedia);
