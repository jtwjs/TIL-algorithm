/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/60057
 ********************************************************************************/

function solution(s) {
    const obj = {};

    for(let i=1; i<=s.length / 2 + 1; i++) {
        let otherS = s;
        let eq = 1;
        obj[i] = '';

        for (let j=0; j<s.length; j+=i) {
            otherS = s.substring(j);
            const a = otherS.substring(0, i);
            const b = otherS.substring(i, i * 2);

            if (a === b) {
                eq++;
            } else {
                if(eq !== 1) {
                    obj[i] += eq + '';
                }
                obj[i] += a;
                eq = 1;
            }
        }
        obj[i] = obj[i].length;
    }

    return Math.min(...Object.values(obj));
}