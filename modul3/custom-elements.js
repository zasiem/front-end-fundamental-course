class CustomElements extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    set data(data){
        this.src = data.src;
        this.alt = data.alt;
        this.caption = data.caption;
        this.title = data.title;
    }

    connectedCallback() {
        this.src = this.getAttribute('src') ?? "#";
        this.alt = this.getAttribute('alt') || null;
        this.caption = this.getAttribute('caption') || null;
        this.title = this.getAttribute('title') || null;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            small{
                background-color:lightgray;
                padding: 20px;
            }
        </style>
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