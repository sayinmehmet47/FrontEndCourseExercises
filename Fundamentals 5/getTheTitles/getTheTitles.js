
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


const getTheTitles = function(books) {

    let arr=books.map(e=>[
        e.title
    ])
return arr.flat()


}
console.log(getTheTitles(books))
module.exports = getTheTitles;
