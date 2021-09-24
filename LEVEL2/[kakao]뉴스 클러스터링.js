/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17677
 ********************************************************************************/

function solution(str1, str2) {
  const arr1 = getDivisionStr(str1);
  const arr2 = getDivisionStr(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })

  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

const getDivisionStr = (str) => {
 const reg = /^[a-z]*$/;

 return str.split('').reduce((acc,cur,idx, arr) => {
        if (idx !== arr.length - 1) {
            const mergeStr = (cur+arr[idx+1]).toLowerCase();
            reg.test(mergeStr) && (acc = [...acc, mergeStr]);
        }
        return acc;
    }, []);
}