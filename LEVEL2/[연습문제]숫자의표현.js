/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12924
 ********************************************************************************/

function solution(n) {
  let answer = 1;
  let i = 1;

  while (i < n / 2) {
    let hab = i;
    let num = i + 1;
    while (hab < n) {
      hab += num++;
      hab === n && answer++
    }
    i++;
  }

  return answer;
}
