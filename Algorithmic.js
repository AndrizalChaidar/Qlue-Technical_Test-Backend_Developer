function getSubsequenceFromNumber(target) {
  const arrNumber = [];
  for (let i = target - 1; i > 0; i--) {
    arrNumber.push(i);
  }
  const result = findSubsequence(arrNumber, 0, [], target);
  return result;
}

function findSubsequence(arr, index, subsequence, target) {
  let result = [];
  for (index; index < arr.length; index++) {
    const temp = subsequence.concat(arr[index]);
    const sumArray = temp.reduce((acc, curr) => acc + curr);
    if (sumArray > target) {
      continue;
    }
    if (sumArray === target) {
      result.push(temp);
      continue;
    }
    const reccursion = findSubsequence(arr, index, temp, target);
    result = result.concat(reccursion);
  }
  return result;
}
