const leapYears = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
leapYears(1922);
module.exports = leapYears;
