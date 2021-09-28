/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript
 ********************************************************************************/

function solution(n, t, m, p) {
    const result = [];
    let arr = [];
    let num = 0;
    while(result.length < t) {
        const parse = num.toString(n);
        arr = arr.concat(parse.split(''));
        if (arr[p - 1]) {
            result.push(arr[p - 1].toUpperCase());
            p += m;
        }
        num++;
    }

    return result.join('');
}
