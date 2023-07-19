'use strict'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getPrompt = () => {
    rl.question('enter a string: ', (inputString) => {
        // MediaStreamAudioSourceNode(guess);
        printBoard();
        getpromp();
    });
}