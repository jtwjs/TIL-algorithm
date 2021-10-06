/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42839
 ********************************************************************************/

const solution = (numbers) => {
  const combinationTable = {};
  const otherNumbers = [...numbers].map(str => +str);
  for (let i=1; i<=numbers.length; i++) {
    const combinationArr = [...new Set(permutations(otherNumbers, i))];
    combinationArr.forEach(combi => {
        const num = +combi;
        combinationTable[num] = isPrimeNum(num);
    });
  }

  return Object.values(combinationTable).filter(x =>x).length;
}

const permutations = (arr, size) => {
  const result = [];
  if (size === 1) {
    return arr.map(v => [v]);
  }

  arr.forEach((fixedNum, index, origin) => {
      const restArr = [...origin.slice(0, index), ...origin.slice(index+1)];
      const attach = permutations(restArr, size-1)
        .map(permutation => [fixedNum, ...permutation].join(''));
      result.push(...attach);
  });

  return result;
}

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i=2; i<=sqrtNum; i++) {
    if (num%i === 0) {
        return false;
    }
  }

  return true;
}