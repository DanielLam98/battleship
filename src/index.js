import Player from './player';
import Ship from './ships';
import './style.css';
import './normalize.css';

const player = Player();
const computer = Player();
let playerShipArr = [];
let computerShipArr = [];

const main = async () => {
  let playerSelectedSpotsArr = [];
  let computerSelectedSpotsArr = [];
  //initialize the board first
  displayGameboard('.playerGameboard');
  displayGameboard('.computerGameboard');
  changeXYBtn();
  //select spots
  await playerSelectShips(playerSelectedSpotsArr).catch(alert);
  //display to DOM
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
  addPlayerAndComputerShips();
  displayShips('.playerGameboard', player.ships);
  //displayShips('.computerGameboard', player.ships);
  playGame();
};

const playerSelectShips = async (ships) => {
  let shipSizes = [5, 4, 3, 3, 2];
  let shipSizesPosition = 0;
  const playerGameboard = document
    .querySelector('.playerGameboard')
    .querySelectorAll('td');

  playerGameboard.forEach((spot) => {
    spot.addEventListener('mouseover', () => {
      let XY = getXY();
      let dataKey = Number(spot.getAttribute('data-key'));
      for (let i = 0; i < shipSizes[shipSizesPosition]; i++) {
        if (dataKey % 10 > 10) {
          console.log(shipSizes[i]);
          dataKey -= shipSizes[i];
        }
        let hoveredSpot = document.querySelector(
          `.playerGameboard [data-key='${dataKey++}']`
        );
        hoveredSpot.classList.add('shipOnHover');
      }
      spot.onclick = (e) => {
        const placement = placeShipOnClick(e);
      };
    });
    spot.addEventListener('mouseout', () => {
      let XY = getXY();
      let dataKey = Number(spot.getAttribute('data-key'));
      for (let i = 0; i < shipSizes[shipSizesPosition]; i++) {
        if (dataKey % 10 > 10) {
          dataKey -= shipSizes[i];
        }
        let hoveredSpot = document.querySelector(
          `.playerGameboard [data-key='${dataKey++}']`
        );
        hoveredSpot.classList.remove('shipOnHover');
        console.log(hoveredSpot);
      }
    });
  });

  function placeShipOnClick(spot) {
    console.log(spot.srcElement);
  }

  function getXY() {
    let xyBtn = document.querySelector('.changeXYBtn').querySelector('button');

    return xyBtn.textContent;
  }
};

const changeXYBtn = () => {
  const XYbtn = document.querySelector('.changeXYBtn button');
  XYbtn.addEventListener('click', () => {
    if (XYbtn.textContent == 'X') {
      XYbtn.textContent = 'Y';
    } else if (XYbtn.textContent == 'Y') {
      XYbtn.textContent = 'X';
    }
  });
};

const placePlayerShips = (ships) => {
  for (let i = 0; i < 5; i++) {
    if (player.gameboard.placeShip(ships[i].value) === true) {
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

const addPlayerAndComputerShips = () => {
  for (let i = 0; i < 5; i++) {
    playerShipArr.push(...player.ships[i].position);
    computerShipArr.push(...computer.ships[i].position);
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

const displayShips = (gameboard, ships) => {
  const tableGameboard = document
    .querySelector(`${gameboard}`)
    .querySelectorAll('td');
  for (const number of ships) {
    number.position.forEach((element) => {
      tableGameboard[element - 1].classList.add('ships');
    });
  }
};

const playGame = async () => {
  //Place player ship function here
  const allSpots = document.querySelectorAll('td');
  while (
    !player.gameboard.allShipsSunk(playerShipArr) &&
    !computer.gameboard.allShipsSunk(computerShipArr)
  ) {
    await selectSpot('.computerGameboardContainer', computer.gameboard);
  }
  console.log('winner!');
  allSpots.forEach((spot) => spot.classList.add('markedSpot'));
};

const selectSpot = (gameboard, opponentBoard) => {
  const gameboardTable = document
    .querySelector(`${gameboard}`)
    .querySelectorAll('td');
  return new Promise((resolve, reject) => {
    gameboardTable.forEach((spot) => {
      spot.addEventListener('click', (e) => handleClick(e));
    });

    const handleClick = (e) => {
      let target = Number(e.target.getAttribute('data-key'));
      allowedAttack(gameboard, opponentBoard, computerShipArr, target);
      gameboardTable.forEach((spot) =>
        spot.removeEventListener('click', handleClick)
      );
    };

    const allowedAttack = (
      opponentBoardclass,
      opponentBoard,
      shipArr,
      target
    ) => {
      opponentBoard.receiveAttack(target);
      const markedSpot = document.querySelector(
        `${opponentBoardclass} [data-key='${target}']`
      );
      markedSpot.classList.add('markedSpot');
      if (opponentBoard.hitShip(shipArr, target) == 'hit') {
        markedSpot.classList.add('hitShip');
        resolve(1);
      } else if (opponentBoard.hitShip(shipArr, target) == 'miss') {
        markedSpot.classList.add('missShip');
        resolve(1);
      }
    };
  });
};

main();
