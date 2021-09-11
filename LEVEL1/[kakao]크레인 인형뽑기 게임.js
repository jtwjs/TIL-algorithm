/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
 ********************************************************************************/

function solution(board, moves) {
  const basket = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    const catchIdx = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      const catchDoll = board[j][catchIdx];
      if (catchDoll) {
        board[j][catchIdx] = 0;
        if (basket.length > 0 && basket[basket.length - 1] === catchDoll) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(catchDoll);
        }
        break;
      }
    }
  }

  return answer;
}


/********************************************************************************
📌 Best Solution
 ********************************************************************************/
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
