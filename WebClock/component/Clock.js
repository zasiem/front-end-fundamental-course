class Clock extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `  
        <div id="time"></div>
        <div id="date"></div>
        `
    }
    
}

customElements.define('clock-widget', Clock);

