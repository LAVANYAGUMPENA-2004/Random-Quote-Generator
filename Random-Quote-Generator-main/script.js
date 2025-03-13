
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "If you can change your mind, you can change your life.",
        author: "William James"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "Your patience is your power.",
        author: "Tolnoe"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Never give up because great things take time.",
        author: "suchitra kamala"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
        author: "Maxime Lagace"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Try not to become a man of success rather become a man of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The beauty of life is in small details,not in big events.",
        author: "Jim Jarmusch"
    },
    {
        quote: "Learn as if you will live forever ,live like you will die tomorrow.",
        author: "Mahatma Gandhi"
    }
];

document.getElementById('new-quote-btn').addEventListener('click', generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${selectedQuote.quote}"`;
    document.getElementById('author').textContent = `- ${selectedQuote.author}`;
}
