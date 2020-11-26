import './ClubItem.js';

class ClubList extends HTMLElement {

    set items(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._items.map(item => {
            const clubItemElement = document.createElement('club-item');
            clubItemElement.item = item;
            this.appendChild(clubItemElement);
        });
    }

    renderError(message){
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define('club-list', ClubList)