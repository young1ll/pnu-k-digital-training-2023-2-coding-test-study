const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : __dirname + "/input.txt")
s = input.toString().trim().split('\n');
const req = s[1].split(' ').map(Number)
const max = Number(s[2]);
let left = 0;
let right = Math.max(...req)
while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    let sum = req.reduce((a, c) => a + (c > mid ? mid : c),0);
    sum > max ? right = mid - 1 : left = mid;
}
console.log(left)


// let [[N], I, [M]] = `${require('fs').readFileSync(0)}`.trim().split`\n`.map(e => e.split` `.map(Number))
// let [l, r] = [0, Math.max(...I)]
// while (l < r) {
//   const mid = Math.ceil((l + r) / 2)
//   I.reduce((a, b) => a + (b > mid ? mid : b), 0) > M ? (r = mid - 1) : (l = mid)
// }
// console.log(l)