// Traditional method

let song = 'Fight the Youth';
let score = 9;
let highestScore = 10;

// let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';

// Template literal method
let output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;
console.log(output);

/* The first two placeholders here are pretty simple, only including a simple value in the string.
The third one calculates a percentage result and rounds it to the nearest integer.
The fourth one includes uses a ternary operator to check whether the score is above a certain mark and print a pass or fail message depending on the result.
 */

let examScore = 45;
let examHighestScore = 70;
let examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round(examScore/examHighestScore*100) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
console.log(examReport);