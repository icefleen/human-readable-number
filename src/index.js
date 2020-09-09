module.exports = function toReadable (number) {
  let smallNumWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  if (number < 20) return smallNumWords[number];

  let mediumNumWords = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number < 100) return mediumNumWords[Math.floor(number / 10) - 2] + (number % 10 !== 0 ? " " + toReadable(number % 10) : "");

  if (number < 1000) return smallNumWords[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
}
