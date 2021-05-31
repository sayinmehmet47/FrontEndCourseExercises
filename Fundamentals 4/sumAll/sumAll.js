const sumAll = function (a, b) {
  var sum = 0;
  if (typeof a === 'number' && typeof b === 'number') {
    const arr = [a, b].sort((a, b) => a - b);
    let c, d;
    [c, d] = [...arr];
    console.log(arr)
    if (c > 0 && d > 0) {
      for (i = c; i < d + 1; i++) {
        sum += i;
      }

      return sum;
    } else {
      return 'ERROR';
    }
  } else {
    return 'ERROR';
  }
};
console.log(sumAll(12, 123));
module.exports = sumAll;
