const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Every moment is a fresh beginning.",
        author: "T. S. Eliot"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

function newQuote() {

    const randomNumber =
        Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomNumber].text;

    author.textContent =
        "— " + quotes[randomNumber].author;
}

button.addEventListener("click", newQuote);

// Quote automatically appears when app opens
newQuote();