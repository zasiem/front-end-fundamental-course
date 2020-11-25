class CustomElements extends HTMLElement {

    constructor() {
        super();
        // console.log('constructor');
    }

    connectedCallback() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this.caption = this.getAttribute('caption');
        this.title = this.getAttribute('title');
        this.render();
    }

    render() {
        this.innerHTML = `
        <center>
            <h2>${this.title}</h2>
            <img src="${this.src}" alt="${this.alt}" height="200px" />
            <p><small>${this.caption}</small></p>
        </center>
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
          this[name] = newValue;
          this.render();
        }
      }

    static get observedAttributes() {
        return ['title'];
    }

}

customElements.define('custom-element', CustomElements);