/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 ********************************************************************************/

function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0);
    let timer = 0;
    let bridge_weight = 0;

    while(truck_weights.length > 0) {
        const isTruck = bridge.shift();
        if (isTruck) {
            bridge_weight -= isTruck;
        }
        timer++;
        if (weight >= bridge_weight + truck_weights[0]) {
            const target = truck_weights.shift();
            bridge.push(target);
            bridge_weight += target;
        } else {
            bridge.push(0);
        }
    }

    return timer + bridge_length;
}