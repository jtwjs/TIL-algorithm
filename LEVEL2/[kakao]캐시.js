/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
- LRU 알고리즘 (Least Recentely Used)
- 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식
- 사용된지 가장 오래된 페이지는 앞으로도 사용될 확률이 낮다는 가설에 의해 만들어졌다
 ********************************************************************************/

function solution(cacheSize, cities) {
  const HIT = 1,
    MISS = 5;
  let cache = [];

  if (!cacheSize) return MISS * cities.length;

  const answer = cities.reduce((acc, city) => {
    const lowerCaseCity = city.toLowerCase();
    const cacheIdx = cache.indexOf(lowerCaseCity);
    if (cacheIdx !== -1) {
      cache = [
        lowerCaseCity,
        ...cache.slice(0, cacheIdx),
        ...cache.slice(cacheIdx + 1),
      ];
      return acc + HIT;
    } else {
      cache =
        cache.length < cacheSize
          ? [lowerCaseCity, ...cache]
          : [lowerCaseCity, ...cache.slice(0, cacheSize - 1)];

      return acc + MISS;
    }
  }, 0);

  return answer;
}
