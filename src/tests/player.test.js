import Player from '../player';
import Gameboard from '../Gameboard';

describe('testing Player factory functions', () => {
  let player = Player();
  let opponent = Player();
  player.ships = [
    [1, 2, 3, 4],
    [11, 21, 31],
    [67, 68],
    [55, 65],
  ];
  test('can send attack to opponent board', () => {
    expect(player.sendAttack(2, opponent.gameboard)).toBe(true);
  });

  test('cant send attack to same spot on opponent board', () => {
    expect(player.sendAttack(2, opponent.gameboard)).toBe(false);
  });
});
