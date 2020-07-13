//const button = document.getElementById("generate-btn");
const resultsDiv = document.getElementById("results-div");
const content = document.getElementById("content");
// const button = document.getElementById("generate-btn");
//const output = document.getElementById("output");
//const phrase = document.getElementById("phrase");
//const author = document.getElementById("author");

// document.addEventListener("fetchStart", showLoading);
// document.addEventListener("fetchEnd", hideLoading);
document.addEventListener("DOMContentLoaded", getQuote);
// button.addEventListener("click", getQuote);

function getQuote() {
  let results;
  content.innerHTML = `<img src="images/Loading.gif" alt="Loading..." id="loader" />`;
  // document.getElementById("loading").className = "show";
  // document.getElementById("content").className = "";
  fetch("https://www.breakingbadapi.com/api/quote/random")
    .then((res) => res.json())
    // .then(document.getElementById("loading").classList.remove("show"))
    //   .then(
    //     (document.getElementById("output").innerHTML = `<div id="output">
    //   <div id="results-div"></div>
    //   <button id="generate-btn">Generate another quote</button>
    // </div>`)
    //   )
    .then((data) => {
      content.innerHTML = `<div id="output">
    <div id="results-div"><h2 id="quote">"${data[0].quote}"</h2>
                          <h3 id="author">-${data[0].author}</h3>
                          </div>
    <button id="generate-btn">Generate another quote</button>
  </div>`;

      document
        .getElementById("generate-btn")
        .addEventListener("click", getQuote);
    });
  // .then((data) => {
  //   let results = `<h2 id="quote">"${data[0].quote}"</h2>
  //                  <h3 id="author">-${data[0].author}</h3>`;

  //   // resultsDiv.innerHTML = results;
  // })
  // .then(
  //   document
  //     .getElementById("generate-btn")
  //     .addEventListener("click", getQuote)
  // );
  //.then((output.innerHTML = resultsDiv));
  // .then(document.getElementById("content").classList.add("show"));
}

// function showLoading() {
//   document.getElementById("loading").className = "show";
//   document.getElementById("content").className = "";
// }

// function hideLoading() {
//   document.getElementById("loading").classList.remove("show");
//   document.getElementById("content").classList.add("show");
// }

// if (loading === true) {
//   document.getElementById("loading").className = "show";
//   document.getElementById("content").className = "";
// } else {
//   document.getElementById("loading").classList.remove("show");
//   document.getElementById("content").classList.add("show");
// }

/*let loading = true;
const button = document.getElementById("generate-btn");
let quotes = [];
const phrase = document.getElementById("phrase");
const author = document.getElementById("author");
const content = document.getElementById("content");

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
}

document.addEventListener("DOMContentLoaded", generateQuotes);
document.addEventListener("DOMContentLoaded", insertQuote);
button.addEventListener("click", insertQuote);

const num = Math.floor(Math.random() * (69 - 0 + 1) + 0);

function generateQuotes() {
  //quote.innerText = "";
  //author.innerText = "";

  fetch("https://www.breakingbadapi.com/api/quotes/")
    .then((res) => res.json())
    .then((data) => (quotes = data));
  //.then((quote) => quotes[num])
  //.then(() => console.log(quote));
}

function insertQuote() {
  //const phrase = document.createElement("h2");
  //const author = document.createElement("h3");

  //phrase.id = "phrase";
  // author.id = "author";

  let quote = quotes[num];
  phrase.innerHTML = `${quote.quote}`;
  author.innerHTML = `${quote.author}`;

  //content.insertBefore(author, button);
  //content.insertBefore(phrase, author);
}*/
