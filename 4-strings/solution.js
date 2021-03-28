function isEmptyString(string) {
  return string.length === 0;
}

function isIncluded(a, b) {
  return a.includes(b);
}

function firstCharacter(string) {
  return string[0];
}

function lastCharacter(string) {
  return string[string.length - 1];
}

function capitalize(string) {
  const firstLetter = firstCharacter(string);
  const rest = string.slice(1);
  const firstLetterCapital = firstLetter.toUpperCase();

  return `${firstLetterCapital}${rest}`;
}

console.log(isEmptyString("")); // true
console.log(isEmptyString("some string")); // false;
console.log(isIncluded("bus", "us")); // true
console.log(isIncluded("house", "cat")); // false
console.log(firstCharacter("house")); // h
console.log(lastCharacter("house")); // e
console.log(capitalize("house")); // House
