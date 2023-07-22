'use strict'
console.clear();

// need an array of words, that way we can pull a random word

let words = [
    "JOCKEY",
    "PROVISION",
    "TRADITION",
    "RAID",
    "HILL",
    "MEAN",
    "SALON",
    "STAFF",
    "ILLUSION",
    "SERVICE",
    "SWIM",
    "PANIC",
    "LANGUAGE",
    "RATE",
    "MARINE",
    "NEGATIVE",
    "STATEMENT",
    "STRIDE",
    "PRINCE",
    "ABOLISH",
    "FAX",
    "TICKET",
    "DEPARTURE",
    "JUST",
    "INSIGHT",
    "INCIDENT",
    "FREIGHT",
    "REQUEST",
    "BURST",
    "QUESTION",
];

// need vars for; answer, max amount of wrong letter, how many mistakes, how many guess

// ruben will help with these two
let answer = ""; 
let maxWrong = 6;

// enrique will help with these two
let incorrectGuess = 0;
let guessed = [];

function randomWord() {
    answer = programming_languages[Math.floor(Math.random(words) * programming_languages.length)];

}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
