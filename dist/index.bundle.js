(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ "./src/ships.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ships__WEBPACK_IMPORTED_MODULE_1__);


console.log('workings');
const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
const main = () => {
  placePlayerShips([
    { name: 'carrier', value: [1, 2, 3, 4, 5] },
    { name: 'battleship', value: [11, 21, 31, 41] },
    { name: 'destroyer', value: [52, 53, 54] },
    { name: 'submarine', value: [65, 66, 67] },
    { name: 'patrolboat', value: [98, 99] },
  ]);
};

const placePlayerShips = (ships) => {
  let playerShips = [];
  for (i = 0; i < 5; i++) {
    if (player.placeShip(ships[i].value) === true) {
      playerShips[i] = _ships__WEBPACK_IMPORTED_MODULE_1___default()(ships[i].value);
      player.ships.push(ships[i].value);
    }
  }
  console.log(player);
};

//main();
console.log('working!');


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


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSx5Q0FBeUMsYUFBYTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDhCO0FBQ0g7QUFDM0I7QUFDQSxlQUFlLG1EQUFNO0FBQ3JCLGlCQUFpQixtREFBTTtBQUN2QjtBQUNBO0FBQ0EsTUFBTSx5Q0FBeUM7QUFDL0MsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxxQ0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JvQzs7QUFFcEM7QUFDQSxrQkFBa0IsaURBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7QUNadEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IGluaXRpYWxpemVHYW1lYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAgfSwgKF8sIGkpID0+IGkgKyAxKTtcbiAgbGV0IG1hcmtlZFNwb3RzR2FtZWJvYXJkID0gW107XG5cbiAgY29uc3Qgc2V0TWFya2VkU3BvdHNHYW1lYm9hcmQgPSAocG9zaXRpb24pID0+IHtcbiAgICBtYXJrZWRTcG90c0dhbWVib2FyZC5wdXNoKHBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBhbGxvd2VkUGxhY2VtZW50ID0gIXBvc2l0aW9uLnNvbWUoXG4gICAgICAocikgPT4gbWFya2VkU3BvdHNHYW1lYm9hcmQuaW5kZXhPZihyKSA+PSAwXG4gICAgKTtcbiAgICBpZiAoYWxsb3dlZFBsYWNlbWVudCkge1xuICAgICAgbWFya2VkU3BvdHNHYW1lYm9hcmQucHVzaCguLi5wb3NpdGlvbik7XG4gICAgICByZXR1cm4gYWxsb3dlZFBsYWNlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGFsbG93ZWRQbGFjZW1lbnQ7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAobWFya2VkU3BvdHNHYW1lYm9hcmQuaW5kZXhPZihjb29yZGluYXRlcykgPT09IC0xKSB7XG4gICAgICBtYXJrZWRTcG90c0dhbWVib2FyZC5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGl0U2hpcCA9IChzaGlwc0FyciwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoc2hpcHNBcnIuaW5kZXhPZihjb29yZGluYXRlcykgPj0gMCkge1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cbiAgICByZXR1cm4gJ21pc3MnO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9IChzaGlwc0FycikgPT4ge1xuICAgIGlmIChzaGlwc0Fyci5ldmVyeSgodikgPT4gbWFya2VkU3BvdHNHYW1lYm9hcmQuaW5jbHVkZXModikpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0TWFya2VkU3BvdHNHYW1lYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaGl0U2hpcCxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwcyc7XG5jb25zb2xlLmxvZygnd29ya2luZ3MnKTtcbmNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIHBsYWNlUGxheWVyU2hpcHMoW1xuICAgIHsgbmFtZTogJ2NhcnJpZXInLCB2YWx1ZTogWzEsIDIsIDMsIDQsIDVdIH0sXG4gICAgeyBuYW1lOiAnYmF0dGxlc2hpcCcsIHZhbHVlOiBbMTEsIDIxLCAzMSwgNDFdIH0sXG4gICAgeyBuYW1lOiAnZGVzdHJveWVyJywgdmFsdWU6IFs1MiwgNTMsIDU0XSB9LFxuICAgIHsgbmFtZTogJ3N1Ym1hcmluZScsIHZhbHVlOiBbNjUsIDY2LCA2N10gfSxcbiAgICB7IG5hbWU6ICdwYXRyb2xib2F0JywgdmFsdWU6IFs5OCwgOTldIH0sXG4gIF0pO1xufTtcblxuY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9IChzaGlwcykgPT4ge1xuICBsZXQgcGxheWVyU2hpcHMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGlmIChwbGF5ZXIucGxhY2VTaGlwKHNoaXBzW2ldLnZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgcGxheWVyU2hpcHNbaV0gPSBTaGlwKHNoaXBzW2ldLnZhbHVlKTtcbiAgICAgIHBsYXllci5zaGlwcy5wdXNoKHNoaXBzW2ldLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2cocGxheWVyKTtcbn07XG5cbi8vbWFpbigpO1xuY29uc29sZS5sb2coJ3dvcmtpbmchJyk7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBzaGlwcyA9IFtdO1xuICBjb25zdCBzZW5kQXR0YWNrID0gKHBvc2l0aW9uLCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2FtZWJvYXJkLCBzaGlwcywgc2VuZEF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChwb3NpdGlvbikgPT4ge1xuICBsZXQgc2hpcEhpdCA9IDA7XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBpZiAocG9zaXRpb24uaW5kZXhPZihudW1iZXIpID4gLTEpIHtcbiAgICAgIHNoaXBIaXQrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoc2hpcEhpdCA9PSBwb3NpdGlvbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHJldHVybiB7IHBvc2l0aW9uLCBoaXQsIGlzU3VuayB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9