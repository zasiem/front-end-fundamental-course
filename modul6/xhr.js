var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.onload = function(){
    console.log(this.responseText);
    // let response = JSON.parse(this.responseText);
    // response.books.map(book => {
    //     console.log(`${book.title} `);
    // })
}

xhr.onerror = function(){
    console.log("error bosku");
}

xhr.open("POST", " https://web-server-book-dicoding.appspot.com/add");

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");

const book = {
    id: 31,
    title: "Halo Gan",
    author: "Erza Putra"
}

xhr.send(JSON.stringify(book));