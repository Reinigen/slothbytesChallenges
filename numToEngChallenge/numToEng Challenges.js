console.log("Input a positive integer between 0 and 999: ");

const lessThan20 = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const greaterThan20 = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numToEng(number) {
  let multidigit = number.toString();
  let stringLength = multidigit.length;
  if (number < 20) {
    return lessThan20[number];
  } else if (stringLength == 2 && number >= 20) {
    console.log(multidigit[0]);
    let tensPlace = greaterThan20[parseInt(multidigit[0]) - 2];
    let singlesPlace = lessThan20[multidigit[1]];
    if (parseInt(multidigit[1]) == 0) {
      singlesPlace = "";
    }
    return `${tensPlace} ${singlesPlace}`;
  } else if (stringLength == 3) {
    let hundredsPlace = lessThan20[parseInt(multidigit[0])];
    let tensPlace = greaterThan20[parseInt(multidigit[1]) - 2];
    let singlesPlace = lessThan20[multidigit[2]];
    if (parseInt(multidigit[1]) == 0) {
      tensPlace = "";
    }
    if (parseInt(multidigit[2]) == 0) {
      singlesPlace = "";
    }
    return `${hundredsPlace} hundred ${tensPlace} ${singlesPlace}`;
  }
}
