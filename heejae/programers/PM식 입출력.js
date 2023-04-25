const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`${input[0]} + ${input[1]} =`, Number(input[0]) + Number(input[1]));
});

process.stdin.on('data', n => console.log((n%2)?`${n} is odd`:`${n} is even`));
// 걍 한줄 이래침