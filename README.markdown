# FreeCodeCamp: Front End Libs Project 1 - Random Quote Generator
 This project was originally completed in Codepen - Original URL: [https://codepen.io/plcoster/pen/PoqjQpR](https://codepen.io/plcoster/pen/PoqjQpR).

 ## The Simpsons Random Quote Generator

 ### Project Aims:
 The aim of this project was to build a random quote generator with functionally similar to https://codepen.io/freeCodeCamp/full/qRZeGZ

This project was built using the following technologies:
* **HTML**
* **CSS**
* **JavaScript**

### Project Requirements:

* User Story #1: I can see a wrapper element with a corresponding id="quote-box".

* User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

* User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

* User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

* User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

* User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

* User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

* User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

* User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

* User Story #10: I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

* User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.


### Project Writeup:

This is the first of the Free Code Camp: Front End Libraries Projects, and could be completed in several ways. For example, an array of quotes could be included in the JS script to be randomly selected when a user request a new quote. Alternatively an API could be used to obtain random quotes. Having found a very nice Simpson's Quote generator by J. Luboff (https://thesimpsonsquoteapi.glitch.me/), I decided to try out using an API to obtain random quotes.

* index.html - this is the only page of the website, and contains the various elements, classes and ID's required by the User Stories, as well as some placeholder text while the page loads. The page uses style.css for styling and script.js controls the behaviour of the page.

* style.css - basic styling for the page which I tried to keep in the Simpon's style and colour scheme as best as possible. To create the 'Quote Generator' text I used a slightly modified version of a font style from Lionel-Rowe's own version of this quote generator (https://github.com/lionel-rowe/simpsons_quotes).

* script.js - controls the behaviour of the page. It contains a function (getQuote) to retrieve quotes from the Simpsons Quote API, which is run as the page loads. This function then calls a second function (displayQuote) that updates the page with the quote text, author text, and updates the tweet button with the the required url such that a the quote and author can be posted to twitter. The tweet total length is limited to 280 chars, but will always include the full author name, and truncate the quote itself instead. An event listener is added to the New Quote button which calls the getQuote function whenever it is clicked. Finally when the page loads for the first time, getQuote is called a single time so there is an initial quote on the page.


