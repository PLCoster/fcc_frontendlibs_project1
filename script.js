const endpoint = 'https://thesimpsonsquoteapi.glitch.me/quotes';

function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      displayQuote(data);
    })
    .catch(function () {
      console.log('An error occurred - API offline?');
      let data = {
        quote: "Do'h! - The Simpson Quote API is offline!",
        character: 'Homer',
      };
      console.log(data);
      displayQuote(data);
    });
}

function displayQuote(data) {
  const quoteText = document.querySelector('.quote-text');
  const authText = document.querySelector('.author');
  const main = document.querySelector('main');

  let quotedcont = data[0].quote;

  quoteText.textContent = quotedcont;
  authText.textContent = '- ' + data[0].character;
  main.setAttribute('style', `background-image: url(${data[0].image}`);

  const tweetButton = document.querySelector('.tweet');
  //Truncate tweet to max 280 chars:
  if (quotedcont.length + 3 + data[0].character.length > 280) {
    quotedcont =
      quotedcont.slice(0, 280 - 6 - data[0].character.length) + '...';
  }
  tweetButton.setAttribute(
    'href',
    `https://twitter.com/intent/tweet?related=freecodecamp&text=${quotedcont} - ${data[0].character}`
  );
}

// Add Event Listener to the 'Next Quote' button
const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

window.onload = getQuote();
