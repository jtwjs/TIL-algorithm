/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 ********************************************************************************/

function solution(record) {
    const table = {
        "Enter": "들어왔습니다.",
        "Leave": "나갔습니다.",
    };
    const newRecord = [];

    record.forEach(x => {
        const [behavior, uid, nickname] = x.split(' ');
        if (nickname) {
          table[uid] = nickname;
        }
        if (table[behavior]) {
           newRecord.push(`${behavior} ${uid}`)
        }
    });

    return newRecord.map(x => {
     const [behavior, uid] = x.split(' ');
        if(table[behavior]) {
          return `${table[uid]}님이 ${table[behavior]}`;
        }
    });

}