(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ "./src/ships.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ships__WEBPACK_IMPORTED_MODULE_1__);


console.log('workings');
const player = _player__WEBPACK_IMPORTED_MODULE_0___default()();
const computer = _player__WEBPACK_IMPORTED_MODULE_0___default()();
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

main();
console.log('working!');


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const Player = () => {
  let gameboard = Gameboard();
  let ships = [];
  const sendAttack = (position, opponentBoard) => {
    return opponentBoard.receiveAttack(position);
  };

  return { gameboard, ships, sendAttack };
};

module.exports = Player;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0g7QUFDM0I7QUFDQSxlQUFlLDhDQUFNO0FBQ3JCLGlCQUFpQiw4Q0FBTTtBQUN2QjtBQUNBO0FBQ0EsTUFBTSx5Q0FBeUM7QUFDL0MsTUFBTSw2Q0FBNkM7QUFDbkQsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxxQ0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBzJztcbmNvbnNvbGUubG9nKCd3b3JraW5ncycpO1xuY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgcGxhY2VQbGF5ZXJTaGlwcyhbXG4gICAgeyBuYW1lOiAnY2FycmllcicsIHZhbHVlOiBbMSwgMiwgMywgNCwgNV0gfSxcbiAgICB7IG5hbWU6ICdiYXR0bGVzaGlwJywgdmFsdWU6IFsxMSwgMjEsIDMxLCA0MV0gfSxcbiAgICB7IG5hbWU6ICdkZXN0cm95ZXInLCB2YWx1ZTogWzUyLCA1MywgNTRdIH0sXG4gICAgeyBuYW1lOiAnc3VibWFyaW5lJywgdmFsdWU6IFs2NSwgNjYsIDY3XSB9LFxuICAgIHsgbmFtZTogJ3BhdHJvbGJvYXQnLCB2YWx1ZTogWzk4LCA5OV0gfSxcbiAgXSk7XG59O1xuXG5jb25zdCBwbGFjZVBsYXllclNoaXBzID0gKHNoaXBzKSA9PiB7XG4gIGxldCBwbGF5ZXJTaGlwcyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgaWYgKHBsYXllci5wbGFjZVNoaXAoc2hpcHNbaV0udmFsdWUpID09PSB0cnVlKSB7XG4gICAgICBwbGF5ZXJTaGlwc1tpXSA9IFNoaXAoc2hpcHNbaV0udmFsdWUpO1xuICAgICAgcGxheWVyLnNoaXBzLnB1c2goc2hpcHNbaV0udmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xufTtcblxubWFpbigpO1xuY29uc29sZS5sb2coJ3dvcmtpbmchJyk7XG4iLCJjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IHNoaXBzID0gW107XG4gIGNvbnN0IHNlbmRBdHRhY2sgPSAocG9zaXRpb24sIG9wcG9uZW50Qm9hcmQpID0+IHtcbiAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcbiAgfTtcblxuICByZXR1cm4geyBnYW1lYm9hcmQsIHNoaXBzLCBzZW5kQXR0YWNrIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAocG9zaXRpb24pID0+IHtcbiAgbGV0IHNoaXBIaXQgPSAwO1xuICBjb25zdCBoaXQgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uLmluZGV4T2YobnVtYmVyKSA+IC0xKSB7XG4gICAgICBzaGlwSGl0Kys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBIaXQgPT0gcG9zaXRpb24ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4geyBwb3NpdGlvbiwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==