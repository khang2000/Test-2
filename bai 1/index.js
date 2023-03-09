function findLongestWord(arr) {
  //   let arr = ["khang", "khoe", "phuowng"];
  let New = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > New.length) {
      New = arr[i];
    }
  }
  console.log(New);
}
findLongestWord(["khang", "khoe", "phuowng"]);
