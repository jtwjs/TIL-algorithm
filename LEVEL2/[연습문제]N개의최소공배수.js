/********************************************************************************
π λ¬Έμ  λ§ν¬
- https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
 ********************************************************************************/
// λ μμ μ΅μκ³΅λ°°μ === λ μμ κ³± / λ μμ μ΅λ κ³΅μ½μ

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


/* μ΅μμ μλ£¨μ
function solution(arr) {

 return arr.reduce((a,b) => a*b / gcd(a,b))
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

 */