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
    markedSpotsGameboard,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBpbml0aWFsaXplR2FtZWJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIGxldCBtYXJrZWRTcG90c0dhbWVib2FyZCA9IFtdO1xuXG4gIGNvbnN0IHNldE1hcmtlZFNwb3RzR2FtZWJvYXJkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgbWFya2VkU3BvdHNHYW1lYm9hcmQucHVzaChwb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZFBsYWNlbWVudCA9ICFwb3NpdGlvbi5zb21lKFxuICAgICAgKHIpID0+IG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluZGV4T2YocikgPj0gMFxuICAgICk7XG4gICAgaWYgKGFsbG93ZWRQbGFjZW1lbnQpIHtcbiAgICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLnB1c2goLi4ucG9zaXRpb24pO1xuICAgICAgcmV0dXJuIGFsbG93ZWRQbGFjZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBhbGxvd2VkUGxhY2VtZW50O1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluZGV4T2YoY29vcmRpbmF0ZXMpID09PSAtMSkge1xuICAgICAgbWFya2VkU3BvdHNHYW1lYm9hcmQucHVzaChjb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdFNoaXAgPSAoc2hpcHNBcnIsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKHNoaXBzQXJyLmluZGV4T2YoY29vcmRpbmF0ZXMpID49IDApIHtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoc2hpcHNBcnIpID0+IHtcbiAgICBpZiAoc2hpcHNBcnIuZXZlcnkoKHYpID0+IG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluY2x1ZGVzKHYpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLFxuICAgIHNldE1hcmtlZFNwb3RzR2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGhpdFNoaXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=