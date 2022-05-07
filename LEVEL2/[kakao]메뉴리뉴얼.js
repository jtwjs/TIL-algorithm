/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/72411
 ********************************************************************************/

function solution(orders, course) {
  const answer = [];
  for (const n of course) {
    const combi = orders.reduce(
      (acc, v) => [...acc, ...permutations(Array.from(v).sort(), n)],
      []
    );
    const combiTable = combi.reduce(
      (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
      {}
    );
    const maxOrder = Math.max(...Object.values(combiTable));
    Object.entries(combiTable).forEach(([key, value]) => {
      if (+value > 1 && +value === maxOrder) answer.push(key);
    });
  }
  return answer.sort();
}

const permutations = (arr, size) => {
  const result = [];
  if (size === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((fixedNum, index, origin) => {
    const restArr = [...origin.slice(index + 1)];
    const attach = permutations(restArr, size - 1).map((permutation) =>
      [fixedNum, ...permutation].join("")
    );
    result.push(...attach);
  });

  return result;
};
