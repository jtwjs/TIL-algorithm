/********************************************************************************
ð ë¬¸ì  ë§í¬
https://programmers.co.kr/learn/courses/30/lessons/92334
 ********************************************************************************/

function solution(id_list, report, k) {
  const distinctReport = [...new Set(report)];
  const reportedCountTable = {};
  const reportedIdTable = {};

  id_list.forEach((id) => {
    reportedCountTable[id] = 0;
    reportedIdTable[id] = [];
  });

  distinctReport.forEach((report) => {
    const [reporter, respondent] = report.split(" ");
    reportedIdTable[reporter].push(respondent);
    reportedCountTable[respondent] = reportedCountTable[respondent] + 1;
  });

  return Object.values(reportedIdTable).map(
    (ids) => ids.filter((id) => reportedCountTable[id] >= k).length
  );
}

// # íì´ ì ëµ ì¤ ê´ì°®ìë ì½ë
// Mapì íì©íë ì½ëê° ê¹ëí´ì§ê² ê°ë¤..

function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((a) => a.split(" "));
  const counts = new Map();
  for (const [_, respondent] of reports) {
    counts.set(respondent, counts.get(respondent) + 1 || 1);
  }
  const mailCount = new Map();
  for (const [reporter, respondent] of reports) {
    if (counts.get(respondent) >= k) {
      mailCount.set(reporter, mailCount.get(reporter) + 1 || 1);
    }
  }
  const answer = id_list.map((id) => mailCount.get(id) || 0);

  return answer;
}
