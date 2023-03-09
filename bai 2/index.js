function alternatingSums(arr) {
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result[1] += arr[i];
    } else {
      result[0] += arr[i];
    }
  }
  return result;
}
console.log(alternatingSums([1, 2, 3, 4, 5]));
