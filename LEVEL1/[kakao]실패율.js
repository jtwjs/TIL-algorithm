/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
 ********************************************************************************/

function solution(N, stages) {
    const hash = {};
    for (let i=1; i<=N; i++) {
        const stay = stages.filter(stage => stage === i).length;
        const clear = stages.filter(stage => stage >= i).length;
        hash[i] = stay ? stay / clear : 0;
    }

    return Object.keys(hash)
        .sort((a, b) =>  hash[b] - hash[a])
        .map(stage => parseInt(stage, 10));
}
