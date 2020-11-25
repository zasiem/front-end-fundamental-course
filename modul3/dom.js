import data from "./data.js";

const mainDom = () => {

    const customElement = document.querySelector('custom-element');
    const titleElement = document.querySelector('#title');

    const titleChangeHandler = () => {
        const value = titleElement.value;
        customElement.setAttribute("title", value);
    }

    customElement.data = data;
    titleElement.addEventListener('input', titleChangeHandler);
    
}

document.addEventListener("DOMContentLoaded", mainDom);