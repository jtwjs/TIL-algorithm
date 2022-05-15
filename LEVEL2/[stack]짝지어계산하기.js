/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
 ********************************************************************************/

function solution(s) {
  let notPairStack = [];
  for (let i = 0; i < s.length; i++) {
    notPairStack[notPairStack.length - 1] === s[i]
      ? notPairStack.pop()
      : notPairStack.push(s[i]);
  }

  return notPairStack.length === 0 ? 1 : 0;
}
