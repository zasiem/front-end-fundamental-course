import data from './data.js';
import "./articles-list.js";

const articleElement = document.createElement("article-list");
articleElement.articles = data;

document.body.appendChild(articleElement)