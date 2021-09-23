/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript
 ********************************************************************************/

function solution(w, h) {
    const minNum = Math.min(w, h);
    const maxNum = Math.max(w, h);
    const gcdNum = gcd(minNum, maxNum);
    return w * h - (w + h - gcdNum)
}

function gcd(minNum, maxNum) {
    return maxNum ? gcd(maxNum, minNum % maxNum) : minNum;
}