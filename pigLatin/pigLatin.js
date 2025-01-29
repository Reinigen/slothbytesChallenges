let vowelsRegex = /[aeuio]/i;

console.log(vowelsRegex);

function pigLatinSentence(sentence) {
  let wordArray = sentence.split(" ");
  let finalSentence = "";
  for (let index = 0; index < wordArray.length; index++) {
    const sentence = wordArray[index].toLowerCase();
    let wordIndex = sentence.search(vowelsRegex);
    let initWord = sentence.slice(0, wordIndex);
    let endWord = sentence.slice(wordIndex);
    let pigWord = endWord + initWord;
    if (wordArray[0] in vowelsRegex) {
      finalSentence += pigWord + "way ";
    } else {
      finalSentence += pigWord + "ay ";
    }
  }
  console.log(finalSentence);
}
