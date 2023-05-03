
const quoteText = document.getElementById("content");
const quoteAuthor = document.getElementById("author");
const url = "https://api.quotable.io/random";

function getRandomQuote(){
    fetch(url)
   .then((data)=> data.json())
   .then((item)=> { 
    quoteText.innerHTML = item.content;
    quoteAuthor.innerHTML = item.author;
   });
};

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteText.innerHTML)
}