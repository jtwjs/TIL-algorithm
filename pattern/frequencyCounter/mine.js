/**
 * 2개의 배열을 허용하는 `same`이라는 함수를 작성하라
 * 배열의 모든값이 두 번째 배열에 해당하는 값을 가지면 참을 반환해야 한다.
 * 첫 번째 배열에는 여러 값이 있는데 두 번째 배열의 값이 정확히 동일하거나 제곱되어 있
 * 는지 알고자 한다.
 * 하지만 순서는 상관 없으니 동일할 필요는 없고 그저 제곱만 체크 하면된다.
 * 섞일 수 있지만 값의 빈도는 동일해야 한다.
 * 
 * An Example
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1, 9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 * same([6, 9, 10], [10000, 81, 6])
 */

function same(arr1, arr2) {
  // 두 배열의 길이가 다르면 false 반환
  if (arr1.length !== arr2.length) return false;
  // arr1 요소의 제곱한 값의 대한 frequencies table 생성
  const frequencies1 = frequenciesBy(arr1, elem => elem ** 2);
  // arr2의 대한 frequencies table 생성
  const frequencies2 = frequenciesBy(arr2, elem => elem);
  // 두 객체 비교값 반환

  return deepEqual(frequencies1, frequencies2);
}

function frequenciesBy(array, f) {
  return array.reduce((acc, elem) => 
  ({...acc, [f(elem)]: acc[f(elem)] ? ++acc[f(elem)] : 1 }), {});
}

// 추후에 JSON.stringify 말고 다른 방법으로 구현해보자...
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log('same([1,2,3], [4,1,9])', same([1,2,3], [4,1,9]));
console.log('same([1,2,3], [1, 9]) ', same([1,2,3], [1, 9]) );
console.log('same([1,2,1], [4,4,1])', same([1,2,1], [4,4,1]));
console.log('same([1,2,4,5,6], [1,4,16,25,36])', same([1,2,4,5,6], [1,4,16,25,36]));