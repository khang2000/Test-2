function findLongestWord(str) {
  //   let str = "khang khoe";
  let words = str.split("");
  let maxLength = 0;
  let LongestWord = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      //   maxLength = words[i].length;
      LongestWord.push(words[i]);
      //   console.log(words[2]);
    }
  }
  return LongestWord;
}

console.log(findLongestWord("khang khoe"));
