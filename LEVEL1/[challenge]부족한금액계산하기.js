/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/82612
 ********************************************************************************/

function solution(price, money, count) {
   let answer = ((price + price * count) * count / 2) - money

    return answer > 0 ? answer : 0;
}