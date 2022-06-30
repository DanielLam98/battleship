(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameboard"],{

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

const Gameboard = () => {
  let initializeGameboard = Array.from({ length: 100 }, (_, i) => i + 1);
  let markedSpotsGameboard = [];

  const setMarkedSpotsGameboard = (position) => {
    markedSpotsGameboard.push(position);
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

  const allShipsSunk = (shipsArr) => {
    if (shipsArr.every((v) => markedSpotsGameboard.includes(v))) {
      return true;
    }
    return false;
  };

  return {
    setMarkedSpotsGameboard,
    placeShip,
    receiveAttack,
    hitShip,
    allShipsSunk,
  };
};

module.exports = Gameboard;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgaW5pdGlhbGl6ZUdhbWVib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSArIDEpO1xuICBsZXQgbWFya2VkU3BvdHNHYW1lYm9hcmQgPSBbXTtcblxuICBjb25zdCBzZXRNYXJrZWRTcG90c0dhbWVib2FyZCA9IChwb3NpdGlvbikgPT4ge1xuICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLnB1c2gocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGFsbG93ZWRQbGFjZW1lbnQgPSAhcG9zaXRpb24uc29tZShcbiAgICAgIChyKSA9PiBtYXJrZWRTcG90c0dhbWVib2FyZC5pbmRleE9mKHIpID49IDBcbiAgICApO1xuICAgIGlmIChhbGxvd2VkUGxhY2VtZW50KSB7XG4gICAgICBtYXJrZWRTcG90c0dhbWVib2FyZC5wdXNoKC4uLnBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBhbGxvd2VkUGxhY2VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gYWxsb3dlZFBsYWNlbWVudDtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChtYXJrZWRTcG90c0dhbWVib2FyZC5pbmRleE9mKGNvb3JkaW5hdGVzKSA9PT0gLTEpIHtcbiAgICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXRTaGlwID0gKHNoaXBzQXJyLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChzaGlwc0Fyci5pbmRleE9mKGNvb3JkaW5hdGVzKSA+PSAwKSB7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICAgIHJldHVybiAnbWlzcyc7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKHNoaXBzQXJyKSA9PiB7XG4gICAgaWYgKHNoaXBzQXJyLmV2ZXJ5KCh2KSA9PiBtYXJrZWRTcG90c0dhbWVib2FyZC5pbmNsdWRlcyh2KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRNYXJrZWRTcG90c0dhbWVib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBoaXRTaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9