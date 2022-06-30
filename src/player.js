import Gameboard from './Gameboard';

const Player = () => {
  let gameboard = Gameboard();
  let ships = [];
  const sendAttack = (position, opponentBoard) => {
    return opponentBoard.receiveAttack(position);
  };

  return { gameboard, ships, sendAttack };
};

module.exports = Player;
