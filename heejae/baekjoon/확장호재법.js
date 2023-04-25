// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let ps=input.map(i=>i.split(' '));
// ps = [[10, 5],[10,7],[1337,23],[123454321, 42],[999999937, 142857133]]
ps = [[10, 7], [1337, 23], [123454321, 42],[999999937, 142857133]];
let max = 10 ** 9;
ps.forEach(i => {
    let k = 1;

    while (k <= max) {
        if ((i[0] * k +1 ) % (i[1]) === 0) {
            console.log((i[0] * k +1 ) / (i[1]));
            break;
        }
        else k++;
    }
    if (k == max) console.log('IMPOSSIBLE');

});

// 0:1만가능
// 1:전부가능
// 2:홀수만 가능
// 3:전부가능
// 4:홀수만 가능
// 5:6,1만 가능
// 6: 1,3,5,7,9만 가능
// 7: 전부가능
// 8: 홀수만 가능
// 9: 전부가능

