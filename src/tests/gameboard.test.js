const Gameboard = require('../Gameboard');

describe('testing the gameboard factory functionality', () => {
  let playerGameboard = Gameboard();

  const cruiser = { position: [1, 2, 3] };
  const batteship = { position: [4, 12, 22] };

  let occupiedShips = [...cruiser.position, ...batteship.position];
  //playerGameboard.setMarkedSpotsGameboard([1, 3, 7, 8, 12, 13, 15, 20]);
  test('can place ships in available spots', () => {
    expect(playerGameboard.placeShip([2, 5, 6])).toBe(true);
  });

  test('can not place ships in a spot that is already taken', () => {
    expect(playerGameboard.placeShip([5, 12, 70])).toBe(false);
  });

  test('can receive attacks if the space is occupied already', () => {
    expect(playerGameboard.receiveAttack(5)).toBe(true);
  });
  test('receives attack is the space is unoccupied, will not work with same position after', () => {
    expect(playerGameboard.receiveAttack(11)).toBe(true);
    expect(playerGameboard.receiveAttack(11)).toBe(false);
  });

  test('ship gets hit', () => {
    expect(playerGameboard.hitShip(occupiedShips, 2)).toBe('hit');
  });
  test('ship does not get hit, misses instead', () => {
    expect(playerGameboard.hitShip(occupiedShips, 50)).toBe('miss');
  });

  test('ships are not all sunk', () => {
    expect(playerGameboard.allShipsSunk(occupiedShips)).toBe(false);
  });
  test('all ships sink after spots are filled', () => {
    for (let i = 0; i < occupiedShips.length; i++) {
      playerGameboard.receiveAttack(occupiedShips[i]);
    }
    expect(playerGameboard.allShipsSunk(occupiedShips)).toBe(true);
  });
});
