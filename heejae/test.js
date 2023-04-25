let ans = [].slice()
let pr =[1, 1, 6, 5]
function add(ar){
    for (let i = ans.length; i<ar[3]; i++) ans.push([])
    for (let y = ar[1]; y<ar[3]; y++){
        for (let x = ar[0]; x<ar[2]; x++){
            ans[y][x]=1;
        }
    }
}
add(pr);
add([4, 3, 8, 6])

console.log(Math.max(2,3,3,3));
