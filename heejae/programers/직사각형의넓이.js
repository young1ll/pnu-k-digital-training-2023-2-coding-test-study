function solution(rect) {
  let ans = []
  function add(ar) {
    for (let i = ans.length; i < ar[3]; i++) ans.push([0])
    for (let y = ar[1]; y < ar[3]; y++) {
      for (let x = ar[0]; x < ar[2]; x++) {
        ans[y][x] = 1;
      }
    }
  }
  rect.forEach(i => add(i));
  return ans.map(i => i.reduce((a, b) => a + b)).reduce((a, b) => a + b)
}
console.log(solution(
  // [[0, 1, 4, 4], [3, 1, 5, 3]]
  [[1, 1, 6, 5], [2, 0, 4, 2], [2, 4, 5, 7], [4, 3, 8, 6], [7, 5, 9, 7]]
))
// 38
// https://school.programmers.co.kr/learn/courses/30/lessons/12974 레벨5 정답률 0% 56명
// 테케 18/23 통과 효율성 메모리초과, 시관초과1 런타임에러1
// 칼럼별로 넓이를 구간과 길이로 저장해야 할듯 => 좌표축소??
// n번째 열 [ 총합길이 , 왼족끝,오른쪽끝, 왼쪽끝2, 오른쪽끝3] 구조로 add 함수 짜면서
// 새로운 사각형 add호출했을때 왼쪽 오른쪽 끝채크해서 넘어가는 범위 새로 추가하거나 업데이트 
// 최종 리턴은 첫 칼럼값만 합


