/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42842#
 ********************************************************************************/

function solution(brown, yellow) {
  const answer = [];
  const hab = brown + yellow;

  for (let i = 3; i < hab / 2; i++) {
    if (hab % i === 0) {
      const row = Math.max(hab / i, i);
      const col = Math.min(hab / i, i);

      if ((row - 2) * (col - 2) === yellow) {
        answer[0] = row;
        answer[1] = col;
      }
    }
  }

  return answer;
}