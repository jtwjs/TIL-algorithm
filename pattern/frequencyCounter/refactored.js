function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const v of arr1) {
    frequencyCounter1[v] = (frequencyCounter1[v] || 0) + 1;
  }
  for (const v of arr2) {
    frequencyCounter2[v] = (frequencyCounter2[v] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log('same([1,2,3], [4,1,9])', same([1,2,3], [4,1,9]));
console.log('same([1,2,3], [1, 9]) ', same([1,2,3], [1, 9]) );
console.log('same([1,2,1], [4,4,1])', same([1,2,1], [4,4,1]));