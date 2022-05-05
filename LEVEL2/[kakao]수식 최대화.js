/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/67257?language=javascript
 ********************************************************************************/

function solution(expression) {
  const regex = /[^\*\-\+]/g;
  const regex2 = /[\*\-\+]/g;
  const operators = expression.split(regex).filter(Boolean);
  const distinctOperators = [...new Set(operators)];
  const nums = expression.split(regex2).map((v) => +v);
  const cases = permutations(distinctOperators, distinctOperators.length);
  const arr = operators.reduce(
    (acc, cur, idx) => {
      return [...acc, cur, nums[idx + 1]];
    },
    [nums[0]]
  );
  const calcedNums = cases.map((c) => {
    let exp = arr;
    for (const operator of c) {
      let idx = exp.findIndex((v) => v === operator);

      while (idx !== -1) {
        const n = calculator(exp[idx - 1], exp[idx + 1], operator);
        exp = [...exp.slice(0, Math.max(0, idx - 1)), n, ...exp.slice(idx + 2)];
        idx = exp.findIndex((v) => v === operator);
      }
    }
    const [num] = exp;
    return Math.abs(num);
  });

  return Math.max(...calcedNums);
}

const permutations = (arr, size) => {
  const result = [];
  if (size === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((fixedNum, index, origin) => {
    const restArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const attach = permutations(restArr, size - 1).map((permutation) => [
      fixedNum,
      ...permutation,
    ]);
    result.push(...attach);
  });

  return result;
};

const calculator = (a, b, operator) => {
  switch (operator) {
    case "-":
      return a - b;
    case "+":
      return a + b;
    case "*":
      return a * b;
    default:
      return 0;
  }
};
