/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 ********************************************************************************/

function solution(priorities, location) {
    let answer = 0;
    let max = Math.max(...priorities);
    while(true) {
        if (max > priorities[0]) {
            const temp = priorities.shift();
            priorities.push(temp);
        } else {
            answer += 1;
            if (location === 0) {
                return answer;
            }
            priorities.shift();
            max = Math.max(...priorities);
        }

        location = setLocation(location, priorities.length)
    }
}

const setLocation = (location, length) => {
    let result = location;
    if(result > 0) {
        result -= 1;
    } else {
        result = length - 1;
    }

    return result;
}