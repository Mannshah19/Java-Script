"use strict";


const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big. Work hard. Stay focused.",
    "Don't watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you."
];

let currentQuote = 0;
let quoteInterval;

function showQuote() {
    document.getElementById("quoteText").textContent = `"${quotes[currentQuote]}"`;
}

function nextQuote() {
    currentQuote++;
    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }
    showQuote();
}

function prevQuote() {
    currentQuote--;
    if (currentQuote < 0) {
        currentQuote = quotes.length - 1;
    }
    showQuote();
}

showQuote();
quoteInterval = setInterval(nextQuote, 4000);

document.getElementById("nextBtn").addEventListener("click", function() {
    clearInterval(quoteInterval);
    nextQuote();
    quoteInterval = setInterval(nextQuote, 4000);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    clearInterval(quoteInterval);
    prevQuote();
    quoteInterval = setInterval(nextQuote, 4000);
});


const eventDate = new Date("January 1, 2027 00:00:00");
let countdownInterval;
let isRunning = false;

function updateCountdown() {

    const diff = eventDate - new Date();

    if (diff <= 0) {
        clearInterval(countdownInterval);
        isRunning = false;
        document.getElementById("timeup").textContent = "Time's up! The event has started 🎉";
        return;
    }

    let days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent    = days    < 10 ? "0" + days    : days;
    document.getElementById("hours").textContent   = hours   < 10 ? "0" + hours   : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

}

updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);
isRunning = true;

document.getElementById("startBtn").addEventListener("click", function() {
    if (!isRunning) {
        countdownInterval = setInterval(updateCountdown, 1000);
        isRunning = true;
    }
});

document.getElementById("pauseBtn").addEventListener("click", function() {
    clearInterval(countdownInterval);
    isRunning = false;
});


setTimeout(function() {
    document.getElementById("modal").classList.add("show");
}, 5000);

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("show");
});
