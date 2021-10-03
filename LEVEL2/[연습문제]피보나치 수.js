/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/12945#
 ********************************************************************************/

function solution(n) {
    const answer = [0, 1];
    if (n < 2) {
        return answer[n];
    }
    for (let i=2; i<=n; i++) {
        answer.push((answer[i - 2] + answer[i - 1]) % 1234567);
    }

    return answer[n];
}
