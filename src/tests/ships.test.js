const Ship = require('../ships');

describe('testing Ship Factory Function', () => {
  let cruiser = Ship([1, 3, 12]);
  test('ship does not sink when there is no hits', () => {
    expect(cruiser.isSunk(cruiser.length)).toBe(false);
  });

  test('ship does not get hit with wrong position', () => {
    expect(cruiser.hit(4)).toBe(false);
  });

  test('ship gets hit with correct position', () => {
    expect(cruiser.hit(3)).toBe(true);
  });
  test('ship gets hit multiple times and isSunk returns true', () => {
    expect(cruiser.hit(1)).toBe(true);
    expect(cruiser.hit(12)).toBe(true);
    expect(cruiser.isSunk()).toBe(true);
  });
});
