import Gameboard from './gameboard';

const Player = () => {
  let gameboard = Gameboard();
  let ships = [];
  const sendAttack = (position, opponentBoard) => {
    return opponentBoard.receiveAttack(position);
  };

  return { gameboard, ships, sendAttack };
};

export default Player;
