function solution(n, a = Array(1).fill(n)) {
    if (n == 1) return a;
    else if (n % 2) {
        a.push(3 * n + 1)
        return solution(3 * n + 1, a)
    }
    else {
        a.push(n / 2)
        return solution(n / 2, a);
    }
}
'dd'.replace()
console.log(solution(
    10
))
  // 0a