const MESSAGE_FILE = 'messages.txt';
const quoteElem = document.getElementById('quote');
const BUTTON = document.querySelector('button');

async function generateQuote() {
  let res = await fetch(MESSAGE_FILE);
  let content = await res.text();
  let quotes = content.split("----");
  
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

  quoteElem.textContent = randomQuote;
}

BUTTON.addEventListener('click', generateQuote);