var items = document.querySelectorAll('.item');
var itemArray = Array.from(items);
console.log(itemArray);

const calculator = (() => {
  const playerStore = [];
  const computerStore = [];

  const store = [];
  const player = (target, index) => {
    store.push(index);
    playerStore.push(index);
    target.innerText = '⭕';
  };
  const computer = () => {
    random = () => {
      let randomNum = Math.floor(Math.random() * 8);
      if (store.includes(randomNum) && store.length < 9) {
        return random();
      } else if (store.length === 8) {
        return 12;
      } else {
        store.push(randomNum);
        computerStore.push(randomNum);
        return randomNum;
      }
    };
    var random = random();
  
   
    setTimeout(() => {
      itemArray[random].innerText = '❌';
    }, 1000);
  };

  const winner = () => {
  

    if (
      [0, 1, 2].every((e) => playerStore.includes(e)) ||
      [0, 3, 6].every((e) => playerStore.includes(e)) ||
      [0, 4, 8].every((e) => playerStore.includes(e)) ||
      [1, 4, 7].every((e) => playerStore.includes(e)) ||
      [2, 5, 8].every((e) => playerStore.includes(e)) ||
      [2, 4, 6].every((e) => playerStore.includes(e)) ||
      [3, 4, 5].every((e) => playerStore.includes(e)) ||
      [6, 7, 8].every((e) => playerStore.includes(e))
    ) {
      const result = document.querySelector('.result');
      const h2 = document.createElement('h2');
      h2.style.background="red"

      h2.innerHTML = `
          <h2>YOU WIN!</h2>
      
      `;
      result.appendChild(h2);
      document.querySelector('.grid').style.pointerEvents = 'none';

    } else if (
      [0, 1, 2].every((e) => computerStore.includes(e)) ||
      [0, 3, 6].every((e) => computerStore.includes(e)) ||
      [0, 4, 8].every((e) => computerStore.includes(e)) ||
      [1, 4, 7].every((e) => computerStore.includes(e)) ||
      [2, 5, 8].every((e) => computerStore.includes(e)) ||
      [2, 4, 6].every((e) => computerStore.includes(e)) ||
      [3, 4, 5].every((e) => computerStore.includes(e)) ||
      [6, 7, 8].every((e) => computerStore.includes(e))
    ) {
      const result = document.querySelector('.result');
      const h2 = document.createElement('h2');
      console.log("you lost")
      h2.style.background="red"
      h2.innerHTML = `
          <h2>YOU LOST!</h2>
      
      `;
      result.appendChild(h2);
      document.querySelector('.grid').style.pointerEvents = 'none';    }
  };

  return {
    player,
    computer,
    winner,
  };
})();

itemArray.map((e, index, array) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if (array[index].innerText === '') {
      calculator.player(target, index);
      calculator.computer();
      console.log(calculator.winner());
    }
  });
});
