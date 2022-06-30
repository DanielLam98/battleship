(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["player"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/player.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IHNoaXBzID0gW107XG4gIGNvbnN0IHNlbmRBdHRhY2sgPSAocG9zaXRpb24sIG9wcG9uZW50Qm9hcmQpID0+IHtcbiAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcbiAgfTtcblxuICByZXR1cm4geyBnYW1lYm9hcmQsIHNoaXBzLCBzZW5kQXR0YWNrIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==