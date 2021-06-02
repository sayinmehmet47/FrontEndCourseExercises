let arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const caesar = function (string, num) {
  let index = string.match(/[A-Z]/g).map(function (cap) {
    return string.indexOf(cap);
  });

  if (num < 0) {
    num = 26 + num;
  }
  if (num > 25) {
    num = num % 26;
  }
  string = string.toLowerCase().split('');
  let modified = string.map((e) => {
    if (arr.indexOf(e) !== -1) {
      if (typeof arr[arr.indexOf(e) + num] === 'string') {
        return arr[arr.indexOf(e) + num];
      } else {
        return arr[arr.indexOf(e) - 26 + num];
      }
    } else {
      return e;
    }
  });

  for (i = 0; i < index.length; i++) {
    modified[index[i]] = modified[index[i]].toUpperCase();
  }
  modified = modified.join('');
  return modified
};
console.log(caesar('Mjqqt, Btwqi!', -5));
module.exports = caesar;
