const reverseString = function (string) {
  let arr = Array.from(string);
  let container = [];
  arr.map((e) => container.unshift(e));
  container = container.join('');
  console.log(container);

  return container;
};
reverseString('hello');
module.exports = reverseString;
