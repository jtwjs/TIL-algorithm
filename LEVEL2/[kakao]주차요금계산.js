/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/92341?language=javascript
 ********************************************************************************/

function solution(fees, records) {
  const go = (..._) => _.reduce((g, f) => f(g));
  const table = new Map();
  const flagTable = {
    IN: true,
    OUT: false,
  };

  for (const record of records) {
    const [t, regN, flag] = record.split(" ");
    if (flagTable[flag]) table.set(regN, (table.get(regN) || 0) + calcTime(t));
    else table.set(regN, table.get(regN) - calcTime(t));
  }

  return go(
    [...table].sort((a, b) => +a[0] - +b[0]),
    (list) => list.map(([_, t]) => getPaymentFee(t, fees))
  );
}

const getTimeStamp = (time) => {
  const [h, m] = time.split(":");

  return +h * 60 + +m;
};

const calcTime = (time) => {
  const MAX_TIME_STAMP = "1439";
  const t = getTimeStamp(time);

  return MAX_TIME_STAMP - t;
};

const getPaymentFee = (t, fees) => {
  const [dTime, dFee, uTime, uFee] = fees;
  if (dTime >= t) return dFee;
  const unitPaymentFee = ~~((t - dTime) / uTime) * uFee;
  const restFee = (t - dTime) % uTime ? uFee : 0;

  return dFee + unitPaymentFee + restFee;
};
