const Ship = (position) => {
  let shipHit = 0;
  const hit = (number) => {
    if (position.indexOf(number) > -1) {
      shipHit++;
      return true;
    }
    return false;
  };
  const isSunk = () => {
    if (shipHit == position.length) {
      return true;
    }
    return false;
  };
  return { position, hit, isSunk };
};

module.exports = Ship;
