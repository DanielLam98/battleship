import Player from './player';
import Ship from './ships';
console.log('workings');
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
};

const placePlayerShips = (ships) => {
  let playerShips = [];
  for (i = 0; i < 5; i++) {
    if (player.placeShip(ships[i].value) === true) {
      playerShips[i] = Ship(ships[i].value);
      player.ships.push(ships[i].value);
    }
  }
  console.log(player);
};

//main();
console.log('working!');
