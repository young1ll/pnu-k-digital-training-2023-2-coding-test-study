const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : __dirname + "/input.txt")
s = input.toString().trim().split('\n');
let ans = [];
for (let p = 1; p < s.length; p += 4) {
    let s2 = new Set(s[p + 1].split(' '));
    ans.push(s[p + 3].split(' ').map(i => s2.has(i) ? 1 : 0))
}
console.log(ans.flat().join('\n'));


// process.stdin.on('data', s => console.log((s + '').split('\n')[4].split(' ').forEach(i=>{
//   console.log((s + '').split('\n')[2].split(' ').includes(i)?1:0)})))
// console.log((s+'').split('\n')[4].split(' ').map(i=>(s + '').split('\n')[2].split(' ').includes(i)?1:0))

// const s = require("fs").readFileSync("./heejae/input.txt")
// const s = require("fs").readFileSync("/dev/stdin")

// process.stdin.on('data', s => console.log((s + '').split('\n')[4].split(' ').forEach(i=>{
//   console.log((s + '').split('\n')[2].split(' ').includes(i)?1:0)})))

// console.log((s+'').split('\n')[4].split(' ').map(i=>(s + '').split('\n')[2].split(' ').includes(i)?1:0))

// let ans = (s+'').split('\n')[4].split(' ').map(i=>(s + '').split('\n')[2].split(' ').includes(i)?1:0)
// ans.forEach(i=>console.log(i))


// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// const input = s.toString().trim().split("\n");

// const T = +input.shift();

// for (let i = 0; i < T; i++) {
//   input.shift();
//   const first = input.shift().split(' ').map(Number).sort((a, b) => a - b);
//   input.shift();
//   const second = input.shift().split(' ').map(Number)
//   let answer = [];
//   second.forEach(target => {
//     let min = 0;
//     let max = first.length - 1;
//     let mid;
//     let success = false;
//     while (min <= max) {
//       mid = Math.floor((min + max) / 2);
//       if (first[mid] == target) {
//         success = true;
//         break;
//       } else if (first[mid] < target) {
//         min = mid + 1;
//       } else {
//         max = mid - 1;
//       }
//     }
//     const res = success ? 1 : 0;
//     answer.push(res)
//   })

//   console.log(answer.join('\n'))
// }


// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let ans = [];
// for (let i = 1; i < input.length; i+=4) {
//     let n1 = input[i+1].split(' ');
//     let n2 = input[i+3].split(' ');

//     let s = new Set(n1);

//     n2.forEach(v=>ans.push(s.has(v) ? '1': '0'));
// }

// console.log(ans.join('\n'));