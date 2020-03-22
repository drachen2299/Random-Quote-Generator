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
const quotes = [
  //Winston Churchill Quote
  {
    quote: "There will come a time when you believe everything is finished. That will be the beginning.",
    source: "Louis L'Amour, Unkown, 2019",
  },
  {
    quote: "And the piano, it sounds like a carnival, and the microphone smells like a beer, \
    And they sit at the bar, and put bread in my jar, and say man what are you doing here",
    source: "Billy Joel, Piano Man, 1973",
  },
  {
    quote: "Be yourself, everyone else is already taken.",
    source: "Oscar Wilde, The Hudson Review, 1967",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison, Unknown, Circa 1910",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\
     You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    source: "Dr Seuss, Oh, The Places You'll Go, 1990",
  }

];


/***
 * `getRandomQuote` function
***/
// getRandomQuote function selects and returns a random quote object
function getRandomQuote() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote from the array
    return quotes[quoteIndex];  // returns the random quote
}


/***
 * `printQuote` function
***/
function printQuote(message){
  var result = getRandomQuote(); //Calls and stores the getRandomQuote is a variable
  var message = "<p class='quote'>" + result.quote + "</p>" +"<p class='source'>" + result.source + "</p>";
   document.getElementById('quote-box').innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
