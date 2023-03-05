const quotes = [
    {
        quote: "perardua ad astra",
        author: "Frederick Hugh Sykes",
    },
    {
        quote: "Only in the agony of parting do we look into the depths of love",
        author: "George Eliot",
    },
    {
        quote: "Man's feelings are always purest and most glowing in the hour of meeting and of farewell.",
        author: "Jean Paul Richter",
    },
    {
        quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "I do not know what the future holds, but I know who holds the future.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Nothing great in the world has been accomplished without passion.",
        author: "Georg Wilhelm",
    },
    {
        quote: "He that lives upon hope will die fasting.",
        author: "Benjamin Franklin",
    },
    {
        quote: "While there's life, there's hope.",
        author: "Cicero",
    },
    {
        quote: "If you would thoroughly know anything, teach it to others.",
        author: "Tryon Edwards",
    },
    {
        quote: "Respect yourself and others will respect you.",
        author: "Confucius",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;