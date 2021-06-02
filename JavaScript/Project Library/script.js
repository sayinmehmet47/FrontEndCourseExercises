
//It is created by classes
let submit = document.querySelector('.submit');
let addNewBook = document.querySelector('.add');
var inputs = document.querySelector('form').elements;
let body = document.querySelector('body');
let cardContainer = document.querySelector('.card-container');
let form = document.querySelector('form');
var author, title, pages, read, cards;

addNewBook.addEventListener('click', () => {
  cardContainer.classList.add('d-none');
  addNewBook.classList.add('d-none');
  form.classList.remove('d-none');
});

//initial library
let myLibrary = [
  {
    author: 'Ihsan oktay anar',
    title: 'puslu kitalar atlasi',
    pages: 252,
    read: 'Yes',
  },
  { author: 'cemil meric', title: 'bu ulke', pages: 222, read: 'No' },
  { author: 'Tarik Bugra', title: 'kucuk aga', pages: 452, read: 'Yes' },
  { author: 'George Orwell', title: '1984', pages: 266, read: 'Yes' },
];

//create card elements
General = () => {
  const example = (initial) => {
    console.log(initial);

    if (initial === 0) {
      myLibrary.map((e) => {
        cards = document.createElement('div');
        cards.classList.add('d-flex');
        cards.innerHTML = `
          
          <div class="card" style="width:9rem;">
          <div class="card-body">
            <h5 class="card-title">${e.author}</h5>
            <p class="card-text">${e.title}</p>
            <p  class="card-text">${e.pages}</p>
            <p  class="card-text">${e.read}</p>
            <button class="btn btn-secondary  remove"style="position:absolute;bottom:1rem;">Remove</button>
        
        
          </div>
          
        </div>
        
          `;
        cardContainer.appendChild(cards);
      });
    } else {
      cardContainer.innerHTML = '';
      myLibrary.map((e) => {
        cards = document.createElement('div');
        cards.classList.add('d-flex');
        cards.innerHTML = `
            
            <div class="card" style="width:9rem;">
            <div class="card-body">
              <h5 class="card-title">${e.author}</h5>
              <p class="card-text">${e.title}</p>
              <p  class="card-text">${e.pages}</p>
              <p  class="card-text">${e.read}</p>
              <button class="btn btn-secondary  remove"style="position:absolute;bottom:1rem;">Remove</button>
              </div>
          </div>
    
            `;
        cardContainer.appendChild(cards);
      });
    }
  };
  example(0);

  //constructor
  class Book {
    constructor(author, title, pages, read) {
      this.author = author;
      this.title = title;
      this.pages = pages;
      this.read = read;
    }
  }

  Book.prototype.addBook = function () {
    myLibrary = [
      ...myLibrary,
      {
        author: this.author,
        title: this.title,
        pages: this.pages,
        read: this.read,
      },
    ];
  };
  let remove = document.querySelectorAll('.remove');

  cardContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.remove')) {
      console.log(myLibrary);
      const target =
        e.target.parentElement.querySelector('.card-title').innerText;
      console.log(target);

      myLibrary = myLibrary.filter((entry) => {
        return entry.author !== target;
      });

      e.target.parentElement.parentElement.remove();
    }
  });

  //form to take new info
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    author = inputs[0].value;
    title = inputs[1].value;
    pages = inputs[2].value;
    read = inputs[3].value;

    let newBook = new Book(author, title, Number(pages), read);
    newBook.addBook();
    cardContainer.classList.remove('d-none');
    addNewBook.classList.remove('d-none');
    form.classList.add('d-none');
    example(1);
  });
};

General();
