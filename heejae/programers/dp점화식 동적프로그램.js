function solution(n) {
  let ans = 1;
  function fac(i, j = 1) {
    if (i == 1 || i == 0) return j
    return fac(i - 1, j * i)
  }
  function com(a, b) {
    return fac(a) / fac(b) / fac(Math.abs(a - b));
  }
  for (let i = 1; i <= n / 2; i++) {
    ans += com(n - i, i)
  }
  return ans % 1234567
}

function solution(n) {
  const dp = [0, 1, 2];
  if (n < 3)
    return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

console.log(solution(
  4
))
// 5


