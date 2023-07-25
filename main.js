'use strict'
console.clear();

// need an array of words, that way we can pull a random word

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

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

function randomWord() {
    answer = programming_languages[Math.floor(Math.random(words) * programming_languages.length)];

}

let buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');
    
        for (var i = 0; i < alphabet.length; i++) {
          letters.id = 'alphabet';
          list = document.createElement('li');
          list.id = 'letter';
          list.innerHTML = alphabet[i];
          check();
          myButtons.appendChild(letters);
          letters.appendChild(list);
        }

        console.log()
      } 



// need vars for; answer, max amount of wrong letter, how many mistakes, how many guess

// ruben will help with these two
let answer = ""; 
let maxWrong = 6;

// enrique will help with these two
// 
let guessed = [];




let incorrectGuess = 0;






document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
