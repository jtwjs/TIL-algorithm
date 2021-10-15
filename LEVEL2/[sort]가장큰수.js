/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42746#
 ********************************************************************************/

function solution(numbers) {
  const result = numbers.sort((a, b) => {
    const aStr = a + "";
    const bStr = b + "";

    if (+(aStr + bStr) > +(bStr + aStr)) {
      return -1
    } else {
      return 1;
    }
  })

  return +result.join("") ? result.join("") : "0";
}