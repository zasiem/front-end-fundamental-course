class AppName extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>Web Clock</h1>
        `
    }

}

customElements.define('app-name', AppName);