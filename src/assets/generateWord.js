function generateWord(str) {
  const arrayOfWords = str.split("\n");
  const randomIndex = Math.floor(Math.random() * arrayOfWords.length);
  return arrayOfWords[randomIndex].split("");
}

export default generateWord;
