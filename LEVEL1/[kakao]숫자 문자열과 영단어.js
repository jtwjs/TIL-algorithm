/********************************************************************************
๐ ๋ฌธ์  ๋งํฌ
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
// # ํ์ด ์ ๋ต ์ค ๊ด์ฐฎ์๋ ์ฝ๋
/*
  split์ผ๋ก ํด๋น ๋ฌธ์์ด๋ก ๋ถ๋ฆฌ ์ํค๊ณ  ๊ทธ ์ฌ์ด์ ํด๋นํ๋ ์ซ์๋ฅผ join...
 */
for (let i = 0; i < numbers.length; i++) {
  let arr = answer.split(numbers[i]);
  answer = arr.join(i);
}
