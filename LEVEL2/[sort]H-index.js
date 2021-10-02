/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42747
 ********************************************************************************/

function solution(citations) {
    const sortedCitations = citations.sort((a, b) => b - a);
    let i = 0;
    while(i + 1 <= sortedCitations[i]) {
        i++;
    }

    return i;
}