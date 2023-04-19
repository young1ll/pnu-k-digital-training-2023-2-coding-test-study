function solution(n, words) {
  var temp = words[0];
  for (let i = 1; i < words.length; i++) {
    if (temp.includes(words[i]) || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [i % n + 1, Math.ceil((i + 1) / n)];
    }
    temp += " " + words[i];
  }
  return [0, 0];
}

console.log(solution(
  2, ['ac', 'ca', 'ac', 'aa', "ac"]

))
    // [2,2]
