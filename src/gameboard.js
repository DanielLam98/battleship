const Gameboard = () => {
  let initializeGameboard = Array.from({ length: 100 }, (_, i) => i + 1);
  let markedSpotsGameboard = [];

  const setMarkedSpotsGameboard = (position) => {
    markedSpotsGameboard = [...position];
  };

  const placeShip = (position) => {
    const allowedPlacement = !position.some(
      (r) => markedSpotsGameboard.indexOf(r) >= 0
    );
    if (allowedPlacement) {
      markedSpotsGameboard.push(...position);
      return allowedPlacement;
    }
    return allowedPlacement;
  };
  const receiveAttack = (coordinates) => {
    if (markedSpotsGameboard.indexOf(coordinates) === -1) {
      markedSpotsGameboard.push(coordinates);
      return true;
    }
    return false;
  };

  const hitShip = (shipsArr, coordinates) => {
    if (shipsArr.indexOf(coordinates) >= 0) {
      return 'hit';
    }
    return 'miss';
  };

  return { setMarkedSpotsGameboard, placeShip, receiveAttack, hitShip };
};

module.exports = Gameboard;
