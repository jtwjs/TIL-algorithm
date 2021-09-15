/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
 ********************************************************************************/

function solution(clothes) {
    const hash = {};
    clothes.forEach(x => {
        hash[x[1]] = hash[x[1]] ? [...hash[x[1]], x[0]] : [x[0]];
    });

    return Object.values(hash).reduce(
        (acc, cur) => acc * (cur.length + 1), 1
    ) - 1;
}