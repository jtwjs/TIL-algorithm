/********************************************************************************
π λ¬Έμ  λ§ν¬
- https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 ********************************************************************************/

function solution(record) {
    const table = {
        "Enter": "λ€μ΄μμ΅λλ€.",
        "Leave": "λκ°μ΅λλ€.",
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
          return `${table[uid]}λμ΄ ${table[behavior]}`;
        }
    });

}