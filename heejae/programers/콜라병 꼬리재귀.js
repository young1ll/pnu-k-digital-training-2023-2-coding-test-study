// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 내가 푼 꼬리재귀
function solution(a, b, c, n = 0) {
  if (a > c) return n;
  return solution(a, b, c % a + ~~(c / a) * b, n + ~~(c / a) * b)
}

// ??
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
// 처음 교환에는 마실 콜라가 없으므로 n-b로 시작
// 콜라가 a-b병씩만 소모된다고 보고 전체 교환회수를 구한뒤
// 교환시 콜라주는 수 곱해서 소수점 버림


console.log(solution(
  2, 1, 20
))
// 19


