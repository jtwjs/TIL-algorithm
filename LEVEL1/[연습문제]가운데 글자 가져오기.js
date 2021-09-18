/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12903
 ********************************************************************************/

function solution(s) {
   const mid = Math.trunc(s.length / 2);

   return s.length % 2 === 0
        ? s[mid - 1] + s[mid]
        : s[mid]
}