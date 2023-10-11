const MESSAGE_FILE = './quotes.csv';
const quoteElem = document.getElementById('quote');
const BUTTON = document.querySelector('button');
const AUTHOR = 0;
const QUOTE = 1;

async function getQuote() {
  let res = await fetch(MESSAGE_FILE);
  let content = await res.text();
  let lines = content.split('\n');
  lines.splice(0,1);

  let randomQuote = lines[Math.floor(Math.random()*lines.length)].split(',');
  let finalQuote = `"${randomQuote[QUOTE]}"\n- ${randomQuote[AUTHOR]}`;
  
  quoteElem.textContent = finalQuote;
}

BUTTON.addEventListener('click', getQuote);