/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  //Winston Churchill Quote
  {
    quote: "There will come a time when you believe everything is finished. That will be the beginning.",
    author: "Louis L'Amour, Unkown, 2019",    
  },
];


/***
 * `getRandomQuote` function
***/
// getRandomQuote function selects and returns a random quote object
function getRandomQuote() {
    var quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote
    return quotes[quoteIndex];  // returns the random quote
}


/***
 * `printQuote` function
***/
function printQuote(message){
  var result = getRandomQuote(); //Calls and stores the getRandomQuote is a variable
  var message = "<p class='quote'>" + result.quote + "</p>" +"<p class='source'>" + result.author + "</p>";
   document.getElementById('quote-box').innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
