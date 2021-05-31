const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

let ages = [];
let findTheOldest = function (people) {
  people.map((e, index) => {
    let age = e.yearOfDeath - e.yearOfBirth;
    ages.push(age);
  });
  let oldest = ages.sort((a, b) => b - a)[0];

  let filtered = people.filter((e) => {
    return e.yearOfBirth + oldest === e.yearOfDeath;
  });
  return filtered[0];
};
console.log(findTheOldest(people));
module.exports = findTheOldest;
