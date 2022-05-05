/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/81301#
 ********************************************************************************/

function solution(s) {
  const numberSpellingTable = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let answer = "";
  let spelling = "";
  for (const v of s) {
    !isNaN(+v) ? (answer += v) : (spelling += v);
    const spellingNum = numberSpellingTable[spelling];
    if (spellingNum !== undefined) {
      answer += spellingNum;
      spelling = "";
    }
  }

  return +answer;
}
// # 풀이 정답 중 괜찮았던 코드
/*
  split으로 해당 문자열로 분리 시키고 그 사이에 해당하는 숫자를 join...
 */
for (let i = 0; i < numbers.length; i++) {
  let arr = answer.split(numbers[i]);
  answer = arr.join(i);
}
