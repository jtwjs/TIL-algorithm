/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/81302
 ********************************************************************************/

function solution(places) {
  const personTable = {};

  return places.map((_, i) => {
    for (let j = 0; j < places[i].length; j++) {
      for (let k = 0; k < places[i][j].length; k++) {
        if (places[i][j][k] === 'P') {
          personTable[i] = personTable[i] ? [...personTable[i], [j, k]] : [[j, k]]
        }
      }
    }

    if (personTable[i]) {
      const arr = personTable[i].map((pos, index) => {
        const targetArr = personTable[i].filter((x, idx) => {
          const distance = getManhattanDistance(pos, x);
          return distance <= 2 && index !== idx;
        });
        const arr2 = targetArr.map(target => {
          if (getManhattanDistance(pos, target) === 2) {
            const col = {
              min: Math.min(pos[0], target[0]),
              max: Math.max(pos[0], target[0])
            };
            const row = {
              min: Math.min(pos[1], target[1]),
              max: Math.max(pos[1], target[1])
            };

            if (col.min !== col.max) {
              if (row.min === row.max) {
                if (places[i][col.min + 1][row.min] === 'O') {
                  return 0;
                }
              } else {
                if (places[i][col.min + 1][row.min] === 'O' || places[i][col.min][row.min] === 'O') {
                  return 0;
                }
              }
            }
            if (row.min !== row.max) {
              if (col.min === col.max) {
                if (places[i][col.min][row.min + 1] === 'O') {
                  return 0;
                }
              } else {
                if (places[i][col.min][row.min + 1] === 'O' || places[i][col.min + 1][row.min + 1] === 'O') {
                  return 0;
                }
              }
            }
          } else {
            return 0;
          }
        })
        return arr2.includes(0) ? 0 : 1
      })
      return arr.includes(0) ? 0 : 1
    } else {
      return 1;
    }
  })
}

const getManhattanDistance = (T1, T2) => {
  return Math.abs(T1[0] - T2[0]) + Math.abs(T1[1] - T2[1]);
}