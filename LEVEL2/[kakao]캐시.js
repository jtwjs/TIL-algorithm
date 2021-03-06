/********************************************************************************
๐ ๋ฌธ์  ๋งํฌ
- https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
- LRU ์๊ณ ๋ฆฌ์ฆ (Least Recentely Used)
- ๊ฐ์ฅ ์ค๋ซ๋์ ์ฐธ์กฐ๋์ง ์์ ํ์ด์ง๋ฅผ ๊ต์ฒดํ๋ ๋ฐฉ์
- ์ฌ์ฉ๋์ง ๊ฐ์ฅ ์ค๋๋ ํ์ด์ง๋ ์์ผ๋ก๋ ์ฌ์ฉ๋  ํ๋ฅ ์ด ๋ฎ๋ค๋ ๊ฐ์ค์ ์ํด ๋ง๋ค์ด์ก๋ค
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
