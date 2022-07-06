import Player from './player';
import Ship from './ships';
import html from './index.html';
import './style.css';
import './normalize.css';

const player = Player();
const computer = Player();

const main = () => {
  placePlayerShips([
    { name: 'carrier', value: [1, 2, 3, 4, 5] },
    { name: 'battleship', value: [11, 21, 31, 41] },
    { name: 'destroyer', value: [52, 53, 54] },
    { name: 'submarine', value: [65, 66, 67] },
    { name: 'patrolboat', value: [98, 99] },
  ]);
  placeComputerShips([
    { name: 'carrier', value: [5, 6, 7, 8, 9] },
    { name: 'battleship', value: [21, 22, 23, 24] },
    { name: 'destroyer', value: [92, 93, 94] },
    { name: 'submarine', value: [1, 2, 3] },
    { name: 'patrolboat', value: [98, 99] },
  ]);
  displayGameboard('.playerGameboard');
  displayGameboard('.computerGameboard');
};

const placePlayerShips = (ships) => {
  for (let i = 0; i < 5; i++) {
    if (player.gameboard.placeShip(ships[i].value) === true) {
      //playerShips[i] = Ship(ships[i].value);
      player.ships.push(Ship(ships[i].value));
    }
  }
};

const placeComputerShips = (ships) => {
  for (let i = 0; i < 5; i++) {
    if (computer.gameboard.placeShip(ships[i].value) === true) {
      computer.ships.push(Ship(ships[i].value));
    }
  }
};

const displayGameboard = (gameboard) => {
  const tableGameboard = document.querySelector(`${gameboard}`);
  let counter = 1;
  const createGameboard = () => {
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        td.setAttribute('data-key', counter++);
        tr.appendChild(td);
      }
      tableGameboard.appendChild(tr);
    }
  };
  createGameboard();
};

main();
