function solution(arr) {
    return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}

function solution(arr) {
    let ans = 1
    arr.forEach((a,i)=>a.forEach((b,j)=>{
        if (b-arr[j][i]) ans=0;
    }))
    return ans;
}
  
  console.log(solution(
    [[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]
  ))
  // 0