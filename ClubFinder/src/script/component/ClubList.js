import './ClubItem.js';

class ClubList extends HTMLElement {

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    set items(items) {
        this._items = items;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = ``;
        this._items.map(item => {
            const clubItemElement = document.createElement('club-item');
            clubItemElement.item = item;
            this._shadowRoot.appendChild(clubItemElement);
        });
    }

    renderError(message){
        this._shadowRoot.innerHTML = `
        <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
        `;
        this._shadowRoot.innerHTML += `
        <h2 class="placeholder">${message}</h2>
        `;
    }

}

customElements.define('club-list', ClubList)