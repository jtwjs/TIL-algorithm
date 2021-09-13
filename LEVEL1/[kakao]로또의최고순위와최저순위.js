/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
 ********************************************************************************/

function solution(lottos, win_nums) {
  const result = {
    max: 0,
    min: 0
  };
  for (let i = 0; i < lottos.length; i++) {
    if (!lottos[i]) {
      result.max += 1;
    }

    if (win_nums.includes(lottos[i])) {
      result.max += 1;
      result.min += 1;
    }
  }
  return [getRank(result.max), getRank(result.min)];
}

const getRank = (num) => {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  }

  return rank[num] ? rank[num] : 6;
}