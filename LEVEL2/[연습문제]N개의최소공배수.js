/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
 ********************************************************************************/
// 두 수의 최소공배수 === 두 수의 곱 / 두 수의 최대 공약수

function solution(arr) {
  if (arr.length === 1) {
     return arr[0];
  }
    const lastNum = arr[arr.length-1];

    return solution(arr.slice(0, -1)) * lastNum / getGCD(solution(arr.slice(0, -1)), lastNum)
}

const getGCD = (num1, num2) => {
   return num1 % num2 ? getGCD(num2, num1 % num2) : num2;
}


/* 최상의 솔루션
function solution(arr) {

 return arr.reduce((a,b) => a*b / gcd(a,b))
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

 */