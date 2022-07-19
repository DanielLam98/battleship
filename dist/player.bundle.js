(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["player"],{

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

const Gameboard = () => {
  let initializeGameboard = Array.from({ length: 100 }, (_, i) => i + 1);
  let markedSpotsGameboard = [];
  let markedShipSpots = [];

  const setMarkedSpotsGameboard = (position) => {
    markedSpotsGameboard.push(position);
  };

  const placeShip = (position) => {
    const allowedPlacement = !position.some(
      (r) =>
        markedSpotsGameboard.indexOf(r) >= 0 || markedShipSpots.indexOf(r) >= 0
    );
    if (allowedPlacement) {
      markedShipSpots.push(...position);
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


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_0__);


const Player = () => {
  let gameboard = _gameboard__WEBPACK_IMPORTED_MODULE_0___default()();
  let ships = [];
  const sendAttack = (position, opponentBoard) => {
    return opponentBoard.receiveAttack(position);
  };

  return { gameboard, ships, sendAttack };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/player.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRG9DOztBQUVwQztBQUNBLGtCQUFrQixpREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgaW5pdGlhbGl6ZUdhbWVib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSArIDEpO1xuICBsZXQgbWFya2VkU3BvdHNHYW1lYm9hcmQgPSBbXTtcbiAgbGV0IG1hcmtlZFNoaXBTcG90cyA9IFtdO1xuXG4gIGNvbnN0IHNldE1hcmtlZFNwb3RzR2FtZWJvYXJkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgbWFya2VkU3BvdHNHYW1lYm9hcmQucHVzaChwb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZFBsYWNlbWVudCA9ICFwb3NpdGlvbi5zb21lKFxuICAgICAgKHIpID0+XG4gICAgICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluZGV4T2YocikgPj0gMCB8fCBtYXJrZWRTaGlwU3BvdHMuaW5kZXhPZihyKSA+PSAwXG4gICAgKTtcbiAgICBpZiAoYWxsb3dlZFBsYWNlbWVudCkge1xuICAgICAgbWFya2VkU2hpcFNwb3RzLnB1c2goLi4ucG9zaXRpb24pO1xuICAgICAgcmV0dXJuIGFsbG93ZWRQbGFjZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBhbGxvd2VkUGxhY2VtZW50O1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluZGV4T2YoY29vcmRpbmF0ZXMpID09PSAtMSkge1xuICAgICAgbWFya2VkU3BvdHNHYW1lYm9hcmQucHVzaChjb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhpdFNoaXAgPSAoc2hpcHNBcnIsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKHNoaXBzQXJyLmluZGV4T2YoY29vcmRpbmF0ZXMpID49IDApIHtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoc2hpcHNBcnIpID0+IHtcbiAgICBpZiAoc2hpcHNBcnIuZXZlcnkoKHYpID0+IG1hcmtlZFNwb3RzR2FtZWJvYXJkLmluY2x1ZGVzKHYpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLFxuICAgIHNldE1hcmtlZFNwb3RzR2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGhpdFNoaXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBzaGlwcyA9IFtdO1xuICBjb25zdCBzZW5kQXR0YWNrID0gKHBvc2l0aW9uLCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBzaGlwcywgc2VuZEF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9