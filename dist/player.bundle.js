(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["player"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRG9DOztBQUVwQztBQUNBLGtCQUFrQixpREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgaW5pdGlhbGl6ZUdhbWVib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSArIDEpO1xuICBsZXQgbWFya2VkU3BvdHNHYW1lYm9hcmQgPSBbXTtcblxuICBjb25zdCBzZXRNYXJrZWRTcG90c0dhbWVib2FyZCA9IChwb3NpdGlvbikgPT4ge1xuICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLnB1c2gocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGFsbG93ZWRQbGFjZW1lbnQgPSAhcG9zaXRpb24uc29tZShcbiAgICAgIChyKSA9PiBtYXJrZWRTcG90c0dhbWVib2FyZC5pbmRleE9mKHIpID49IDBcbiAgICApO1xuICAgIGlmIChhbGxvd2VkUGxhY2VtZW50KSB7XG4gICAgICBtYXJrZWRTcG90c0dhbWVib2FyZC5wdXNoKC4uLnBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBhbGxvd2VkUGxhY2VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gYWxsb3dlZFBsYWNlbWVudDtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChtYXJrZWRTcG90c0dhbWVib2FyZC5pbmRleE9mKGNvb3JkaW5hdGVzKSA9PT0gLTEpIHtcbiAgICAgIG1hcmtlZFNwb3RzR2FtZWJvYXJkLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoaXRTaGlwID0gKHNoaXBzQXJyLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChzaGlwc0Fyci5pbmRleE9mKGNvb3JkaW5hdGVzKSA+PSAwKSB7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICAgIHJldHVybiAnbWlzcyc7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKHNoaXBzQXJyKSA9PiB7XG4gICAgaWYgKHNoaXBzQXJyLmV2ZXJ5KCh2KSA9PiBtYXJrZWRTcG90c0dhbWVib2FyZC5pbmNsdWRlcyh2KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRNYXJrZWRTcG90c0dhbWVib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBoaXRTaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgc2hpcHMgPSBbXTtcbiAgY29uc3Qgc2VuZEF0dGFjayA9IChwb3NpdGlvbiwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgIHJldHVybiBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuICB9O1xuXG4gIHJldHVybiB7IGdhbWVib2FyZCwgc2hpcHMsIHNlbmRBdHRhY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==