/*
 # binary search (이분탐색)
 - 오름차순으로 정렬된 배열에서 X라는 숫자를 찾는 효율적인 방법
 - 처음과 마지막의 중간값을 선택하여, 찾고자 하는 값과 크고 작음을 비교하는 방식으로 반복하여 탐색
 - 시간복잡도 O(logN) -> 중간을 기준으로 탐색 범위를 절반씩 줄여나가기 때문
 */

const binary_search = (arr, target) => {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid;
  }

  return undefined;
};

/* 
 ## Lower Bound 
 - 배열에 X가 없을 수도 있을때 사용
 - 배열에서 X보다 크거나 같은 숫자가 처음 나타나는 위치
*/
const lower_bound = (arr, target) => {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) low = mid + 1;
    else high = mid;
  }

  return high;
  // return arr.length - high; 해당 배열에서 타겟보다 같거나 큰값의 갯수
};

/*
 ## Upper Bound
 - X보다 처음으로 큰 값이 나오는 위치
*/

const upper_bound = (arr, target) => {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) low = mid + 1;
    else high = mid;
  }

  return high;
};

// console.log(lower_bound([12, 34, 62, 77, 99], 62));
// console.log(upper_bound([12, 34, 62, 77, 99], 62));

// ### 참고용 멋진코드 (++함수형 프로그래밍)
const lowerBound = (arr, value) => {
  const helper = (l, r) => {
    if (l >= r) return l;
    const m = Math.floor((l + r) / 2);
    if (arr[m] < value) return helper(m + 1, r);
    return helper(l, m);
  };
  return helper(0, arr.length);
};
