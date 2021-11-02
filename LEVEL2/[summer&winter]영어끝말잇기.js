/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript
 ********************************************************************************/

function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const beforeWordLastChar = words[i - 1][words[i - 1].length - 1];
    const wordsFirstChar = words[i][0];
    if (beforeWordLastChar !== wordsFirstChar || words.indexOf(words[i]) !== i) {
      return [i % n + 1, Math.floor(i / n + 1)];
    }
  }

  return [0, 0];
}