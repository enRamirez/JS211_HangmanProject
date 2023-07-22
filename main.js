'use strict'
console.clear();

// need an array of words

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

let answer = ""; 
let maxWrong = 10;
let mistakes = 0;
let guessed = [];

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
