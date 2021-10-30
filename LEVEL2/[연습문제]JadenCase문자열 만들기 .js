/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12951
 ********************************************************************************/

function solution(s) {
  return s.split(' ')
    .map(formatJadenCase)
    .join(' ');
}

function formatJadenCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}