// Variable declarations
const resultsDiv = document.getElementById("results-div");
const content = document.getElementById("content");
// Call getQuote function automatically when the DOM loads
document.addEventListener("DOMContentLoaded", getQuote);

//Function to get quotes and load them into the HTML
function getQuote() {
  // Output set to display loading gif by default while quote is fetched
  content.innerHTML = `<img src="images/Loading.gif" alt="Loading..." id="loader" />`;

  //Fetch random quote from the Breaking Bad API
  fetch("https://www.breakingbadapi.com/api/quote/random")
    //Check the status of the response and throw an error if it's not ok
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })

    .then((res) => res.json())

    // Dynamically insert fetched data about the quote and the author inside of the content div
    .then((data) => {
      content.innerHTML = `
      <div id="output">
        <div id="wrap">
          <div id="results-div">
            <h2 id="quote">"${data[0].quote}"</h2>
            <h3 id="author">-${data[0].author}</h3>
          </div>
        </div>
        <button id="generate-btn">Generate another quote</button>
      </div>`;

      //Add event listener to the dynamically generated button that will allow another quote to be fetched
      document
        .getElementById("generate-btn")
        .addEventListener("click", getQuote);
    })

    //If there is not a valid response from the API or if any error occurs, stop loading and display an error message
    .catch((error) => {
      content.innerHTML = `
        <div id = "output">
          <h1 id = "error">An error has occured. Unable to retrieve quote</h1>
          <button id="generate-btn">Try again</button>
        </div>
      `;

      document
        .getElementById("generate-btn")
        .addEventListener("click", getQuote);
    });
}
