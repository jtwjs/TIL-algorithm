/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 ********************************************************************************/

function solution(n, arr1, arr2) {
    return arr1.map((_, i) =>
        (arr1[i]|arr2[i])
                    .toString(2)
                    .padStart(n, 0)
                    .replace(/1/g, '#')
                    .replace(/0/g, ' ')
    );
}