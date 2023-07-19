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

// need a class called scoreboard
class scoreboard {
    constructor(numGuesses, guessesRemaining, score, word, wordArr, guess, guessedLetters, isCorrect) {
      this.numGuesses = numGuesses;
      this.guessesRemaining = guessesRemaining;
      this.score = score;
      this.word = word;
      this.wordArr = wordArr;
      this.guess = guess;
      this.guessedLetters = guessedLetters;
      this.isCorrect = isCorrect;
    }
  }