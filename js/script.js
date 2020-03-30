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
    citation:"Unkown",
    source: "Louis L'Amour",
    year:"2019"
  },
  {
    quote: "And the piano, it sounds like a carnival, and the microphone smells like a beer, \
    And they sit at the bar, and put bread in my jar, and say man what are you doing here",
    citation:"Piano Man",
    source: "Billy Joel",
    year:"1973"
  },
  {
    quote: "Be yourself, everyone else is already taken.",
    citation:" The Hudson Review",
    source: "Oscar Wilde",
    year:"1967"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    citation:"Unknown",
    source: "Thomas A. Edison",
    year:"Circa 1910"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\
     You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    citation:"Oh, The Places You'll Go",
    source: "Dr Seuss",
    year:"1990"
  }

];


/***
 * `getRandomQuote` function
***/
// variable that will hold viewed quotes
let viewedQuotes = [];
// getRandomQuote function selects and returns a random quote object
function getRandomQuote(){
  if (quotes.length === 0){
    quotes = viewedQuotes.splice(0, viewedQuotes.length);
  }
  let randNum = Math.floor(Math.random() * quotes.length);
  let splicedQuote = quotes.splice(randNum, 1)[0];
  viewedQuotes.push(splicedQuote);
  return splicedQuote;
}
/*function getRandomQuote() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote from the array
    if (quotes.length === 0) {
      quotes.push(viewedQuotes);
      viewedQuotes = [0];
    }
    return quotes[quoteIndex];  // returns the random quote
}*/


/***
 * `printQuote` function
***/
function printQuote(message){
  var result = getRandomQuote(); //Calls and stores the getRandomQuote is a variable
  var message = "<p class='quote'>" + result.quote + "</p>" +"<p class='citation'>" + result.citation + "</p>"+
  "<p class='source'>" + result.source + "</p>"+"<p class='source'>" + result.year + "</p>";
   document.getElementById('quote-box').innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
