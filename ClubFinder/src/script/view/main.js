import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(response => {
            return renderResult(response);
        })
        .catch(error => {
            return fallbackResult(error);
        })
    };

    const renderResult = results => {
        clubListElement.items = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;