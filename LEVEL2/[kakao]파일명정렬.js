/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17686
 ********************************************************************************/

function solution(files) {
  const answer = files.sort((a, b) => {
    const [aHead, aNum] = fileNameSeparator(a);
    const [bHead, bNum] = fileNameSeparator(b);

    if (aHead > bHead) {
      return 1;
    } else if (aHead < bHead) {
      return -1;
    } else {
      return aNum - bNum;
    }
  })

  return answer;
}

const fileNameSeparator = (file) => {
  const regex = /([a-zA-Z-\s]+)([0-9]*)(.\S+)?/;
  const [_, head, number] = file.match(regex);

  return [head.toLowerCase(), +number];
}

