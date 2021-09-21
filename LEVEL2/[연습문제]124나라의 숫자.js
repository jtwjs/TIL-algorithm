/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12899
 ********************************************************************************/

function solution(n) {
    const notation = {
        0: 4,
        1: 1,
        2: 2,
    };
    let answer = '';
    while(n) {
      const rest = n % 3 ;
      n = Math.floor((n - 1) / 3);
      answer = notation[rest] + answer;
    }
    return answer;
}