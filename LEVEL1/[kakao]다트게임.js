/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
 ********************************************************************************/

function solution(dartResult) {
  const pows = {
        S: 1,
        D: 2,
        T: 3,
     };
  const result = dartResult
      .split(/([\d]+[^\d]+)/)
      .filter(x => x);

  result.forEach((str, idx) => {
    const num = parseInt(str.match(/\d+/)[0], 10);
    const bonus = str.match(/[SDT]/)[0];
    const option = str.match(/[\*\#]/);
    let resultNum = Math.pow(num, pows[bonus]);
      if (option) {
          switch(option[0]) {
              case '*':
                  resultNum *= 2;
                  (idx - 1 >= 0) && (result[idx - 1] *= 2);
                  break;

              case '#':
                  resultNum *= -1;
                  break;
          }
      }
    result[idx] = resultNum;
});

    return result.reduce((acc, cur) => acc + cur, 0);
}