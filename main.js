//let loading = true;
const button = document.getElementById("generate-btn");
let quotes = [];
let quota;
const phrase = document.getElementById("phrase");
const author = document.getElementById("author");

/*if (quote.innerText === "" || author.innerText === "") {
  document.getElementById("loading").className = "show";
  document.getElementById("content").className = "";
} else {
  document.getElementById("loading").classList.remove("show");
  document.getElementById("content").classList.add("show");
}*/

/*if (loading) {
  document.getElementById("loading").className = "show";
  document.getElementById("content").className = "";
} else {
  document.getElementById("loading").className = "";
  document.getElementById("content").className = "show";
}*/

document.addEventListener("DOMContentLoaded", generateQuote);
button.addEventListener("click", generateQuote);

function generateQuote() {
  //quote.innerText = "";
  //author.innerText = "";

  const num = Math.floor(Math.random() * (69 - 0 + 1) + 0);

  fetch("https://www.breakingbadapi.com/api/quotes/")
    .then((res) => res.json())
    .then((data) => (quotes = data));
  //.then((quote) => quotes[num])
  //.then(() => console.log(quote));
  let quota = quotes[num];
  phrase.innerText = quota.quote;
  author.innerText = quota.author;
}
