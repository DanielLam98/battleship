(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["ships"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ships.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKHBvc2l0aW9uKSA9PiB7XG4gIGxldCBzaGlwSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKG51bWJlcikgPT4ge1xuICAgIGlmIChwb3NpdGlvbi5pbmRleE9mKG51bWJlcikgPiAtMSkge1xuICAgICAgc2hpcEhpdCsrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwSGl0ID09IHBvc2l0aW9uLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHsgcG9zaXRpb24sIGhpdCwgaXNTdW5rIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=