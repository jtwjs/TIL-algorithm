/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42883
 ********************************************************************************/

function solution(number, k) {
  const n = number.length;
  let answer = '',
    startIdx = 0,
    maxChar,
    maxIdx = 0;

  for (let i = n - k; i > 0; i--) {
    maxChar = '0';

    for (let j = startIdx; j <= n - i; j++) {
      if (number[j] > maxChar) {
        maxIdx = j;
        maxChar = number[j];
        if (maxChar === '9') {
          break;
        }
      }
    }

    answer += maxChar;
    startIdx = maxIdx + 1;
  }

  return answer;
}