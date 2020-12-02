const fetch = require('node-fetch');

const getAllBook = () => {
    fetch("https://web-server-book-dicoding.appspot.com/list")
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

const addBook = book => {
    fetch("https://web-server-book-dicoding.appspot.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "12345"
        },
        body: JSON.stringify(book)
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(`response: ${response.message}`);
        })
        .catch(error => {
            console.log(`response: ${error}`);
        })
}

addBook({
    id: 33,
    title: "Halo Gan",
    author: "Erza Putra"
})