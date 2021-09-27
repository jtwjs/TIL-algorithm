/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
 ********************************************************************************/

function solution(s) {
    const reg = /\{([\d,]*)\}/g;
    const arr = s.match(reg)
    .map(x => x.match(/[\d]+/g).map(x => parseInt(x)))
    .sort((a,b) => a.length - b.length);

    return arr.reduce((acc, cur) => {
      const num = cur.find(x => !acc.includes(x));
        if (num > 0) {
            acc.push(num);
            return acc;
        }
    }, []);

}