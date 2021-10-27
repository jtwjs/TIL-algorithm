/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/87946
 ********************************************************************************/

function solution(k, dungeons) {
  const answer = permutations(dungeons, k);
  return Math.max(...answer);
}

const permutations = (arr, fatigue) => {
  const result = [];
  if (arr.length === 1) {
    const minRequire = arr[0][0];
    return [dungeonsEntryCount(fatigue, minRequire)];
  }

  arr.forEach((fixedEl, index, origin) => {
    const [minRequire, consume] = fixedEl;
    const count = dungeonsEntryCount(fatigue, minRequire);
    const restArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const total = permutations(restArr, fatigue - consume).map(v => v + count)
    result.push(...total);
  });

  return result;
}

function dungeonsEntryCount(fatigue, minRequire) {
  return fatigue >= minRequire ? 1 : 0;
}