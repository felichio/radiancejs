(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["r"] = factory();
	else
		root["r"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/exporter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/add.js":
/*!***********************!*\
  !*** ./source/add.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Adds two values. op (+)\r\n * @signature\r\n *  add :: Number -> Number -> Number\r\n *  add :: (Number, Number) -> Number     \r\n * @example\r\n *  let result = add(2, 5);  //=> 7\r\n *  let result = add(2)(5);  //=> 7\r\n */\r\n\r\n\r\n\r\nconst add = (x, y) => x + y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(add));\n\n//# sourceURL=webpack://r/./source/add.js?");

/***/ }),

/***/ "./source/binaryOp.js":
/*!****************************!*\
  !*** ./source/binaryOp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Performs a binary Operation between to arguments. Set{\"+\", \"-\", \"/\", \"*\", \"=\", \">\", \"<\"}\r\n * @signature\r\n *  binaryOp :: String -> Number -> Number -> Number | Boolean\r\n *  binaryOp :: (String, Number, Number) -> Number | Boolean\r\n * @example\r\n *  let add = binaryOp(\"+\") //=> Function add\r\n *  let result = add(2)(19) //=> 21\r\n * \r\n *  let higherThanFive = binaryOp(\"<\")(5) //=> Function y => 5 < y\r\n *  let result = higherThanFive(6); //=> True\r\n * \r\n *  let result = binaryOp(\"*\")(2)(5) //=> 10\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n// Default. Implementation utilizing switch block statement\r\nconst switchImplementation = (operator, x, y) => {\r\n    switch(operator) {\r\n        case \"+\": return x + y;\r\n        case \"-\": return x - y;\r\n        case \"/\": return x / y;\r\n        case \"*\": return x * y;\r\n        case \"=\": return x === y;\r\n        case \">\": return x > y;\r\n        case \"<\": return x < y;\r\n    }\r\n};\r\n\r\n// Implementation utilizing if statement\r\nconst ifImplementation = (operator, x, y) => {\r\n    if (operator === \"+\") return x + y;\r\n    else if (operator === \"-\") return x - y;\r\n    else if (operator === \"/\") return x / y;\r\n    else if (operator === \"*\") return x * y;\r\n    else if (operator === \"=\") return x === y;\r\n    else if (operator === \">\") return x > y;\r\n    else if (operator === \"<\") return x < y;\r\n};\r\n\r\n\r\nconst binaryOp = switchImplementation;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(binaryOp));\r\n\r\n\n\n//# sourceURL=webpack://r/./source/binaryOp.js?");

/***/ }),

/***/ "./source/compose.js":
/*!***************************!*\
  !*** ./source/compose.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\r\n *  with a mapping A -> C and type g ◦ f = g(f(x)) \r\n * @signature\r\n *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z \r\n * @example\r\n *  add5 :: Number -> Number\r\n *  const add5 = x => x + 5;\r\n *\r\n *  mul50 :: Number -> Number\r\n *  const mul50 = x => x * 50;\r\n *\r\n *  mul50AndAdd5 :: Number -> Number\r\n *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)\r\n *\r\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst composeTwo = (g, f) => x => g(f(x));\r\n\r\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\r\n\n\n//# sourceURL=webpack://r/./source/compose.js?");

/***/ }),

/***/ "./source/composeK.js":
/*!****************************!*\
  !*** ./source/composeK.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Kleisli unction composition. For f: A -> M B, g: B -> M C kleisli function composition produces a new function\r\n *  with a mapping A -> M C and type g <=< f = x => f(x).chain(g)\r\n * @signature\r\n *  composeK :: (y -> m z, x -> m y, ..., b -> m c, a -> m b) -> a -> m z \r\n * @example\r\n *  \r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst composeKTwo = (g, f) => x => f(x).chain(g);\r\n\r\nconst composeKNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeKTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst composeKNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeKTwo)(x => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"list\"])(x))(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeKNright);\r\n\n\n//# sourceURL=webpack://r/./source/composeK.js?");

/***/ }),

/***/ "./source/composeM.js":
/*!****************************!*\
  !*** ./source/composeM.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\r\n *  with a mapping A -> C and type g ◦ f = g(f(x)) \r\n * @signature\r\n *  composeM :: (y -> z, x -> y, ..., b -> c, ...[a] -> b) -> ...[a] -> z \r\n * @example\r\n *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);\r\n *  \r\n *  const mul5 = x => x * 5;\r\n * \r\n *  const addArgsAndMul5 = composeM(mul5, add(0));\r\n *  \r\n *  addArgsAndMul5(1, 2, 3, 4, 5);\r\n *  //-> 75\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst composeTwo = (g, f) => (...args) => g(f(...args));\r\n\r\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\r\n\n\n//# sourceURL=webpack://r/./source/composeM.js?");

/***/ }),

/***/ "./source/concat.js":
/*!**************************!*\
  !*** ./source/concat.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_twoParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/twoParameter */ \"./source/private/twoParameter.js\");\n/**\r\n * @description\r\n *  Merges two arrays. Returns a new array.\r\n *  Same behaviour as Array.prototype.concat except array must be passed explicitly\r\n * @signature\r\n *  concat :: [a] -> [b] -> [a, b]\r\n *  concat :: ([a], [b]) -> [a, b] \r\n * @example\r\n *  concat([1, 2, 3], [4, 5, 6]) = [1, 2, 3, 4, 5, 6];\r\n *  concat([1, 2, 3])([4, 5, 6]) = [1, 2, 3, 4, 5, 6];\r\n * \r\n */\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_private_twoParameter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.concat))));\r\n\n\n//# sourceURL=webpack://r/./source/concat.js?");

/***/ }),

/***/ "./source/curry.js":
/*!*************************!*\
  !*** ./source/curry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of unary functions\r\n * @signature\r\n *  curry :: ((a1, a2, a3, ..., an) -> b, Number?) -> a1 -> a2 -> a3 -> ... -> an -> b\r\n * @example\r\n *  const add = (x, y, w, z) => x + y + w + z;\r\n *  \r\n *  const curriedAdd = curry(add);\r\n *  const a = curriedAdd(1);\r\n *  //-> (y, w, z) => 1 + y + w + z\r\n *  const b = a(2)(3);\r\n *  //-> z => 1 + 2 + 3 + z\r\n *  const c = b(4);\r\n *  //-> 1 + 2 + 3 + 4 = 10\r\n */\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst curryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : x => curryWithBind(fn.bind(null, x), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst curryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args) => y => (argLength <= args.length + 1 ? fn : innerCurry)(...args, y);\r\n    return innerCurry();\r\n};\r\n\r\nconst curry = curryRecursive;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (curry);\n\n//# sourceURL=webpack://r/./source/curry.js?");

/***/ }),

/***/ "./source/divide.js":
/*!**************************!*\
  !*** ./source/divide.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Divides second parameter by first one. op (/)\r\n * @signature\r\n *  divide :: Number -> Number -> Number\r\n *  divide :: (Number, Number) -> Number\r\n * @example\r\n *  let result = divide(2, 5);  //=> 0.4\r\n *  let result = divide(2)(5);  //=> 0.4\r\n */\r\n\r\n\r\n\r\nconst divide = (x, y) => x / y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(divide));\r\n\n\n//# sourceURL=webpack://r/./source/divide.js?");

/***/ }),

/***/ "./source/every.js":
/*!*************************!*\
  !*** ./source/every.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns true if for every element x, Predicate(x) -> True. Otherwise return false.\r\n *  Same behaviour as Array.prototype.every except array must be passed explicitly\r\n * @signature\r\n *  every :: (a -> Boolean) -> [a] -> Boolean\r\n *  every :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) && Predicate(e2) && ... && Predicate(en)\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  \r\n *  every(x => x > 0, a);\r\n *  //-> True\r\n *  every(x => x > 0)(a);\r\n *  //-> True\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.every))));\r\n\n\n//# sourceURL=webpack://r/./source/every.js?");

/***/ }),

/***/ "./source/exporter.js":
/*!****************************!*\
  !*** ./source/exporter.js ***!
  \****************************/
/*! exports provided: add, subtract, multiply, divide, binaryOp, curry, pcurry, unmethod, flip, map, filter, reduce, reduceRight, identity, uncurry, every, some, concat, foldl, foldr, compose, range, pipe, composeM, composeK, pipeM, pair, list, lpair, stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./source/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./source/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ \"./source/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide */ \"./source/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _binaryOp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binaryOp */ \"./source/binaryOp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binaryOp\", function() { return _binaryOp__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry */ \"./source/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pcurry\", function() { return _partialCurry__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _unmethodify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unmethodify */ \"./source/unmethodify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmethod\", function() { return _unmethodify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flip */ \"./source/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map */ \"./source/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter */ \"./source/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reduce */ \"./source/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduceRight */ \"./source/reduceRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceRight\", function() { return _reduceRight__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identity */ \"./source/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _uncurry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uncurry */ \"./source/uncurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uncurry\", function() { return _uncurry__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _every__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./every */ \"./source/every.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _every__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./some */ \"./source/some.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _some__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./concat */ \"./source/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _foldLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./foldLeft */ \"./source/foldLeft.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return _foldLeft__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _foldRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./foldRight */ \"./source/foldRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return _foldRight__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./compose */ \"./source/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./range */ \"./source/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipeline */ \"./source/pipeline.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipe\", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _composeM__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./composeM */ \"./source/composeM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeM\", function() { return _composeM__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./composeK */ \"./source/composeK.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeK\", function() { return _composeK__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _pipelineM__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipelineM */ \"./source/pipelineM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipeM\", function() { return _pipelineM__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _pair__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pair */ \"./source/pair.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pair\", function() { return _pair__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./list */ \"./source/list.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return _list__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _lazypair__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lazypair */ \"./source/lazypair.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lpair\", function() { return _lazypair__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stream */ \"./source/stream.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stream\", function() { return _stream__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://r/./source/exporter.js?");

/***/ }),

/***/ "./source/filter.js":
/*!**************************!*\
  !*** ./source/filter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns a new array with all elements x for which Predicate(x) -> True.\r\n *  Same behaviour as Array.prototype.filter except array must be passed explicitly\r\n * @signature\r\n *  filter :: (a -> Boolean) -> [a] -> [a]\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  filter(x => x > 1, a);\r\n *  //-> [2, 3, 4]\r\n *  filter(x => x < 2)(a);\r\n *  //-> [1]\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.filter))));\r\n\n\n//# sourceURL=webpack://r/./source/filter.js?");

/***/ }),

/***/ "./source/flip.js":
/*!************************!*\
  !*** ./source/flip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Inverts parameter passing to a function.\r\n * @signature\r\n *  ((a, b) -> c) -> ((b, a) -> c)\r\n * @example\r\n *  const greet = (fname, lname) => `Hello mr ${fname}. Hello again mr ${lname}`;\r\n *  greet(\"chicken\", \"turtle\");\r\n *  //-> \"Hello mr chicken. Hello again mr turtle\"\r\n *  flip(greet)(\"chicken\", \"turtle\");\r\n *  //-> \"Hello mr turtle. Hello again mr chicken\"\r\n */\r\n\r\n\r\nconst flip = fn => (x, y) => fn(y, x);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\r\n\n\n//# sourceURL=webpack://r/./source/flip.js?");

/***/ }),

/***/ "./source/foldLeft.js":
/*!****************************!*\
  !*** ./source/foldLeft.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Gathering values of an Array through a reducer function. Left-Folding\r\n * @signature\r\n *  foldLeft :: ((b, a) -> b) -> b -> [a] -> b || (b -> a -> b) -> b -> [a] -> b\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  const add = (x, y) => x + y;\r\n *  foldLeft(add, 0, a);\r\n *  //-> 10\r\n *\r\n */\r\n\r\n\r\n\r\nconst foldLeft = (f, z, [first, ...rest]) => first === undefined ?\r\n    z :\r\n    foldLeft(f, Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(z)(first), rest);\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldLeft));\r\n\n\n//# sourceURL=webpack://r/./source/foldLeft.js?");

/***/ }),

/***/ "./source/foldRight.js":
/*!*****************************!*\
  !*** ./source/foldRight.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Gathering values of an Array through a reducer function. Right-Folding\r\n * @signature\r\n *  foldRight :: ((b, a) -> a) -> a -> [b] -> a || (b -> a -> a) -> a -> [b] -> a\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  const add = (x, y) => x + y;\r\n *  foldRight(add, 0, a);\r\n *  //-> 10\r\n *\r\n */\r\n\r\n\r\n\r\nconst foldRight = (f, z, [first, ...rest]) => first === undefined ?\r\n    z :\r\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(first)(foldRight(f, z, rest));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldRight));\r\n\n\n//# sourceURL=webpack://r/./source/foldRight.js?");

/***/ }),

/***/ "./source/identity.js":
/*!****************************!*\
  !*** ./source/identity.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Identity function. Returns the first passed argument\r\n * @signature\r\n *  a -> a\r\n * @example\r\n *  let result = identity(3);\r\n *  //-> 3\r\n */\r\n\r\n\r\nconst identity = x => x;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (identity);\n\n//# sourceURL=webpack://r/./source/identity.js?");

/***/ }),

/***/ "./source/lazypair.js":
/*!****************************!*\
  !*** ./source/lazypair.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_lazypair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/lazypair */ \"./source/private/lazypair.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_private_lazypair__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://r/./source/lazypair.js?");

/***/ }),

/***/ "./source/list.js":
/*!************************!*\
  !*** ./source/list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_pair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/pair */ \"./source/private/pair.js\");\n/**\r\n * @description\r\n *  Implements a list interface through a listWrapper object. Utilizes a pair data type (cons cell) for the creation\r\n *  of a recursively defined linked list.\r\n * \r\n *  For big number of elements, you may end with stack overflow error because all the implementations are using recursion.\r\n *  Use streams (with the tramboline helper) if u want to play with more elements\r\n * @signature\r\n *  list :: ([a] | (a, a, a, a, ...a)) -> List a\r\n * @example\r\n *  const a = list([1, 2, 3, 4]) // === list(1, 2, 3, 4) | cons(1, cons(2, cons(3, cons(4, empty))))\r\n *  \r\n *  Mapping\r\n * \r\n *  You can map the list with a method call:\r\n * \r\n *  a.map(x => x + 5);\r\n *  //-> cons(6, cons(7, cons(8, cons(9, empty))))\r\n * \r\n *  or point-wise call:\r\n *  \r\n *  list.map(x => x + 5, a);\r\n *  // -> cons(6, cons(7, cons(8, cons(9, empty))))\r\n *  \r\n *  or curried alternative:\r\n *  \r\n *  list.map(x => x + y)(a)\r\n *  // -> cons(6, cons(7, cons(8, cons(9, empty))))\r\n * \r\n *  Zipping\r\n * \r\n *  const b = list([1, 2, 3, 4]);  // === list(1, 2, 3, 4) | cons(1, cons(2, cons(3, cons(4, empty))))\r\n *  const c = list([5, 6, 7, 8]);  // === list(5, 6, 7, 8) | cons(5, cons(6, cons(7, cons(8, empty))))\r\n * \r\n *  b.zip(c);\r\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\r\n * \r\n *  or point-wise call:\r\n *  \r\n *  list.zip(b, c);\r\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\r\n *  \r\n *  or curried alternative:\r\n *  \r\n *  list.zip(b)(c);\r\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst listWrapper = p => {\r\n    const wrapped = fn => (...args) => listWrapper(fn(...args));\r\n    \r\n    return ({\r\n        // map :: List a ⤳ (a -> b) -> List a\r\n        map: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(f, p),\r\n\r\n        // filter :: List a ⤳ (a -> Boolean) -> List a\r\n        filter: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(f, p),\r\n\r\n        // forEach :: List a ⤳ (a -> ()) -> List a\r\n        forEach: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"forEach\"])(f, p),\r\n\r\n        // print :: List a ⤳ ((), Stream a)\r\n        print: () => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"forEach\"])(x => console.log(x), p),\r\n\r\n        // foldl :: List a ⤳ ((b, a) -> b, b) -> b\r\n        foldl: (f, z) => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldl\"])(f, z, p),\r\n\r\n        // foldr :: List a ⤳ ((a, b) -> b, b) -> b\r\n        foldr: (f, z) => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])(f, z, p),\r\n\r\n        // toArray :: List a ⤳ [a]\r\n        toArray: () => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"toArray\"])(p),\r\n\r\n        toStream: () => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"stream\"].fromList(listWrapper(p)),\r\n\r\n        // concat :: List a ⤳ List a -> List a\r\n        concat: r => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, r.getPairContext()),\r\n\r\n        // mconcat :: List a ⤳ [List a] -> List a\r\n        mconcat: l => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"]((x, y) => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getPairContext(), y.getPairContext()), listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]))(l).getPairContext()),\r\n\r\n        // takeWhile :: List a ⤳ (a -> Boolean) -> List a\r\n        takeWhile: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"takeWhile\"])(f, p),\r\n\r\n        // zip :: List a ⤳ List b -> List [a, b]\r\n        zip: r => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"zip\"])(p, r.getPairContext()),\r\n\r\n        // reverse :: List a ⤳ List a\r\n        reverse: () => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"reverse\"])(p),\r\n\r\n        // join :: List (List a) ⤳ List a\r\n        join: () => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])((x, y) => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getPairContext(), y.getPairContext()), listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]), p),\r\n\r\n        // chain :: List a ⤳ (a -> List b) -> List b\r\n        chain: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"chain\"])(p, x => f(x).getPairContext()),\r\n\r\n        // getPairContext :: List a ⤳ Pair a\r\n        getPairContext: () => p,\r\n    });\r\n};\r\n\r\n\r\nconst guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? (Array.isArray(args[0]) ? f(args[0]) : f([args[0]])) : f([])\r\n\r\nconst list = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](listWrapper, guardFromArray(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"fromArray\"]));\r\n\r\n// ListWrapper :: Pair a -> List a\r\nlist.listWrapper = p => listWrapper(p);\r\n\r\n// fromArray :: [a] -> List a\r\nlist.fromArray = a => list(a);\r\n\r\n// toStream :: List a -> Stream a\r\nlist.toStream = p => p.toStream();\r\n\r\n// map :: ((a -> b), List a) -> List b\r\nlist.map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.map(f)\r\n);\r\n\r\n// filter :: ((a -> Boolean), List a) -> List a\r\nlist.filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.filter(f)\r\n);\r\n\r\n// forEach :: (a -> (), List a) -> List a\r\nlist.forEach = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.forEach(f)\r\n);\r\n\r\n// logger :: (List a) -> ((), List a)\r\nlist.print = p => p.print();\r\n\r\n// foldl :: ((b, a) -> b, b, List a) -> b\r\nlist.foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p.foldl(f, z)\r\n);\r\n\r\n// foldr :: ((a, b) -> b, b, List a) -> b\r\nlist.foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p.foldr(f, z)\r\n);\r\n\r\n// toArray :: List a -> [a]\r\nlist.toArray = p => p.toArray();\r\n\r\n// concat :: (List a, List a) -> List a\r\nlist.concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p1, p2) => p1.concat(p2)\r\n);\r\n\r\n// mconcat :: [List a] -> List a\r\nlist.mconcat = l => listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]).mconcat(l);\r\n\r\n// takeWhile :: ((a -> Boolean), List a) -> List a\r\nlist.takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.takeWhile(f)\r\n);\r\n\r\n// zip :: (List a, List b) -> List [a, b]\r\nlist.zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p, r) => p.zip(r)\r\n);\r\n\r\n// reverse :: List a -> List a\r\nlist.reverse = p => p.reverse();\r\n\r\n// join :: List (List a) -> List a\r\nlist.join = p => p.join();\r\n\r\n// chain :: (List a, (a -> List b)) -> List b\r\nlist.chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p, f) => p.chain(f)\r\n);\r\n\r\n// getPairContext :: List a -> Pair a\r\nlist.getPairContext = p => p.getPairContext();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n//# sourceURL=webpack://r/./source/list.js?");

/***/ }),

/***/ "./source/map.js":
/*!***********************!*\
  !*** ./source/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies to every element of the array the function a -> b. Returns a new array.\r\n *  Same behaviour as Array.prototype.map except array must be passed explicitly\r\n * @signature\r\n *  map :: (a -> b) -> [a] -> [b]\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  map(x => x + 1, a);\r\n *  //-> [2, 3, 4, 5]\r\n *  map(x => x === 1)(a);\r\n *  //-> [true, false, false, false]\r\n * \r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.map))));\r\n\n\n//# sourceURL=webpack://r/./source/map.js?");

/***/ }),

/***/ "./source/multiply.js":
/*!****************************!*\
  !*** ./source/multiply.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Multiplies first parameter, second parameter times . op (*)\r\n * @signature\r\n *  multiply :: Number -> Number -> Number\r\n *  multiply :: (Number, Number) -> Number\r\n * @example\r\n *  let result = multiply(2, 5);  //=> 10\r\n *  let result = multiply(2)(5);  //=> 10 \r\n */\r\n\r\n\r\n\r\nconst multiply = (x, y) => x * y;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(multiply));\n\n//# sourceURL=webpack://r/./source/multiply.js?");

/***/ }),

/***/ "./source/pair.js":
/*!************************!*\
  !*** ./source/pair.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/pair */ \"./source/private/pair.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_private_pair__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://r/./source/pair.js?");

/***/ }),

/***/ "./source/partialCurry.js":
/*!********************************!*\
  !*** ./source/partialCurry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of partially applied functions\r\n * @signature\r\n *  pcurry :: ((a1, a2, a3, ..., an) -> b, Number?) -> (a1 -> a2 -> a3 -> ... -> an -> b) | ((a1, a2) -> a3 -> ... -> an -> b) | ((a1, a2, a3) -> ... -> an -> b) | ... | (a1, a2, ..., an) -> b\r\n * @example\r\n *  const add = (x, y, w, z) => x + y + w + z;\r\n *  \r\n *  const curriedAdd = pcurry(add);\r\n *  const a = curriedAdd(1);\r\n *  //-> (y, w, z) => 1 + y + w + z\r\n *  const b = a(2, 3);\r\n *  //-> z => 1 + 2 + 3 + z\r\n *  const c = b(4);\r\n *  //-> 1 + 2 + 3 + 4 = 10\r\n *  or\r\n *  curriedAdd(1, 2, 3, 4);\r\n *  //-> 10\r\n * \r\n *  For functions that have unspecified number of arguments you can provide them explictly\r\n * \r\n *  const add = (...args) => args.reduce((x, y) => x + y, 0, args);\r\n *  curriedAdd = pcurry(add, 3);\r\n *  curriedAdd(1, 2);\r\n *  //-> Function\r\n *  curriedAdd(1, 2, 3);\r\n *  //-> 6 \r\n */\r\n\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst partialCurryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : (...args) => partialCurryWithBind(fn.bind(null, ...args), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst partialCurryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args1) => (...args2) => (argLength <= args1.length + args2.length ? fn : innerCurry)(...args1, ...args2);\r\n    return innerCurry();\r\n};\r\n\r\nconst pcurry = partialCurryRecursive;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pcurry);\n\n//# sourceURL=webpack://r/./source/partialCurry.js?");

/***/ }),

/***/ "./source/pipeline.js":
/*!****************************!*\
  !*** ./source/pipeline.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\r\n *  with a mapping A -> C and type f | g  = g(f(x)) \r\n * @signature\r\n *  pipeline :: (a -> b, b -> c, ... , x -> y, y -> z) -> a -> z\r\n * @example\r\n *  add5 :: Number -> Number\r\n *  const add5 = x => x + 5;\r\n *\r\n *  mul50 :: Number -> Number\r\n *  const mul50 = x => x * 50;\r\n *\r\n *  mul50AndAdd5 :: Number -> Number\r\n *  const mul50AndAdd5 = pipeline(mul50, add5) == add5(mul50)\r\n *\r\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst pipelineTwo = (f, g) => x => g(f(x));\r\n\r\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\r\n\n\n//# sourceURL=webpack://r/./source/pipeline.js?");

/***/ }),

/***/ "./source/pipelineM.js":
/*!*****************************!*\
  !*** ./source/pipelineM.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\r\n *  with a mapping A -> C and type f | g  = g(f(x)) \r\n * @signature\r\n *  pipelineM :: (...[a] -> b, b -> c, ... , x -> y, y -> z) -> ...[a] -> z\r\n * @example\r\n *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);\r\n *  \r\n *  const mul5 = x => x * 5;\r\n * \r\n *  const addArgsAndMul5 = pipelineM(add(0), mul5);\r\n *  \r\n *  addArgsAndMul5(1, 2, 3, 4, 5);\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst pipelineTwo = (f, g) => (...args) => g(f(...args));\r\n\r\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\r\n\n\n//# sourceURL=webpack://r/./source/pipelineM.js?");

/***/ }),

/***/ "./source/private/lazypair.js":
/*!************************************!*\
  !*** ./source/private/lazypair.js ***!
  \************************************/
/*! exports provided: empty, delay, delayv, prepend, fromArray, fromPair, toPair, concat, mconcat, foldl, foldr, toArray, map, filter, lfilter, takeWhile, zip, join, chain, tramboline, print, take, repeat, range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return empty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delay\", function() { return delay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delayv\", function() { return delayv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return prepend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromArray\", function() { return fromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromPair\", function() { return fromPair; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toPair\", function() { return toPair; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mconcat\", function() { return mconcat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return foldl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return foldr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toArray\", function() { return toArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lfilter\", function() { return lfilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"takeWhile\", function() { return takeWhile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return zip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return chain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tramboline\", function() { return tramboline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"take\", function() { return take; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repeat\", function() { return repeat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return range; });\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Implements a lazily evaluated cons cell chain simulating a stream. Provides the core implementation for the streamWrapper object.\r\n *  You can use this implementation since it is exported, but better use the object alternative, stream\r\n * @signature\r\n *  lpair a = () => (empty | (a, lpair a))\r\n * @example\r\n *  Eg. You can map the lpair structure\r\n *  const a = fromArray([1, 2, 3, 4]); //-> () => pair(1)(() => pair(2)(() => pair(3)(() => pair(4)(() => empty))))\r\n *\r\n *  const b = map(x => x + 5)(a);\r\n *  //-> () => pair(6)(() => pair(7)(() => pair(8)(() => pair(9)(() => empty))))\r\n *  // This is the lazy presentation. The structure isn't evaluated until its needed by a consumer\r\n *\r\n *  \r\n *  You can produce infinite lpair\r\n * \r\n *  const c = range(1, infinite);\r\n *  \r\n *  Filter them lazily and take the first n results\r\n *  \r\n *  const d = lfilter(x => x % 2 === 0)(c);\r\n *  \r\n *  const e = take(100)(d);\r\n *  //-> Consumes the lazy chain of pairs. Creates a new lazy pair structure. Take is greedy, use with caution\r\n * \r\n *  toArray(e);\r\n *  //-> [2, 4, 6, ..., 200]\r\n *  \r\n *\r\n */\r\n\r\n\r\n\r\n\r\n\r\nconst pair = x => y => s => s(x)(y);\r\n\r\nconst K = x => y => x;\r\n\r\nconst I = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\r\n\r\nconst car = p => p(K);\r\n\r\nconst cdr = p => p(K(I));\r\n\r\nconst empty = null;\r\n\r\nconst prepend = (x, y) => pair(x)(y);\r\n\r\nconst delay = fn => (...args) => () => fn(...args);\r\n\r\nconst delayv = val => () => val;\r\n\r\n\r\n\r\n\r\n\r\n// foldr :: ((a, b) -> b, b, Lazy Pair a) -> b\r\nconst foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => {\r\n        const evaluated = p();\r\n        return evaluated === empty ? z : f(car(evaluated), foldr(f, z, cdr(evaluated)));\r\n    }\r\n);\r\n\r\n// foldl :: ((b, a) -> b, b, Lazy Pair a) -> b\r\nconst foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => {\r\n        const evaluated = p();\r\n        return evaluated === empty ? z : foldl(f, f(z, car(evaluated)), cdr(evaluated));\r\n    }\r\n);\r\n\r\n// fromArray :: [a] -> Lazy Pair a\r\nconst fromArray = delay(\r\n    ([first, ...rest]) => first === undefined ? empty : prepend(first, fromArray(rest))\r\n);\r\n\r\n// fromPair :: Pair a -> Lazy Pair a\r\nconst fromPair = delay(\r\n    p => p === empty ? empty : prepend(car(p), fromPair(cdr(p)))\r\n);\r\n\r\n// toArray :: Lazy Pair a -> [a]   *toArray function is greedy, careful stack overflow*\r\nconst toArray = p => foldr((x, y) => [x, ...y], [], p);\r\n\r\n// toPair :: Lazy Pair a -> Pair a   *toPair function is greedy, careful stack overflow*\r\nconst toPair = p => foldr(prepend, empty, p);\r\n\r\n// map :: ((a -> b), Lazy Pair a) -> Lazy Pair b\r\nconst map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    delay(\r\n        (f, p) => {\r\n            const evaluated = p();\r\n            return evaluated === empty ? empty : prepend(f(car(evaluated)), map(f, cdr(evaluated)));\r\n        }\r\n    ), 2\r\n);\r\n\r\n// filter :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a  *filter function is greedy, careful stack overflow*\r\nconst filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => {\r\n        const innerFilter = (f, p) => {\r\n            const evaluated = p();\r\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), innerFilter(f, cdr(evaluated))) : innerFilter(f, cdr(evaluated))\r\n        };\r\n\r\n        // return fromArray(r.pair.toArray(innerFilter(f, p)));\r\n        return fromPair(innerFilter(f, p));\r\n    }\r\n);\r\n\r\nconst lfilter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    delay(\r\n        (f, p) => {\r\n            const evaluated = p();\r\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), lfilter(f, cdr(evaluated))) : lfilter(f, cdr(evaluated))()\r\n        }\r\n    ), 2\r\n);\r\n\r\nconst range = delay(\r\n    (start, stop, step = (stop - start) < 0 ? -1 : 1) => {\r\n        return step >= 0 ? (start >= stop ? empty : prepend(start, range(start + step, stop, step)))\r\n                        : (start <= stop) ? empty : prepend(start, range(start + step, stop, step))\r\n    }\r\n);\r\n\r\n// takeWhile :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a\r\nconst takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    delay(\r\n        (f, p) => {\r\n            const evaluated = p();\r\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), takeWhile(f, cdr(evaluated))) : empty\r\n        }\r\n    ), 2\r\n);\r\n\r\n// repeat :: a -> Lazy Pair a\r\nconst repeat = delay(\r\n    x => prepend(x, repeat(x))\r\n);\r\n\r\n// take :: (Number, Lazy Pair a) -> Lazy Pair a  *take function is greedy, careful stack overflow*\r\nconst take = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (n, p) => {\r\n        const innerTake = (n, p) => {\r\n            const evaluated = p();\r\n            return n < 1 || evaluated === empty ? empty : prepend(car(evaluated), innerTake(n - 1, cdr(evaluated)));\r\n        };\r\n\r\n        return fromPair(innerTake(n, p));\r\n    }\r\n);\r\n\r\n// concat :: (Lazy Pair a, Lazy Pair a) -> Lazy Pair a\r\nconst concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    delay(\r\n        (p1, p2) => {\r\n            const evaluated = p1();\r\n            return evaluated === empty ? p2() : prepend(car(evaluated), concat(cdr(evaluated), p2))\r\n        }\r\n    ), 2\r\n);\r\n\r\n// mconcat :: [Lazy Pair a] -> Lazy Pair a\r\nconst mconcat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](concat)(delayv(empty));\r\n\r\n// zip :: (Lazy Pair a, Lazy Pair b) -> Lazy Pair [a, b]\r\nconst zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    delay(\r\n        (p1, p2) => {\r\n            const evaluated1 = p1();\r\n            const evaluated2 = p2();\r\n            return evaluated1 === empty || evaluated2 === empty ? empty : prepend([car(evaluated1), car(evaluated2)], zip(cdr(evaluated1), cdr(evaluated2)));\r\n        }\r\n    ), 2\r\n);\r\n\r\n// join :: Lazy Pair (Lazy Pair a) -> Lazy Pair a\r\nconst join = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](foldr)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](concat, 2), delayv(empty));\r\n\r\n// chain :: (Lazy Pair a, (a -> Lazy Pair b)) -> Lazy Pair b\r\nconst chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"]((p, f) => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](join, map(f))(p));\r\n\r\n\r\n// tramboline :: (a -> (), Lazy Pair a) -> Lazy Pair a *tramboline greedy implementation, Utilizes while loop because of TCO absence*\r\nconst tramboline = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => {\r\n        const init = p;\r\n        let evaluated;\r\n        while ((evaluated = p()) !== empty) {\r\n            f(car(evaluated));\r\n            p = cdr(evaluated);\r\n        }\r\n        return init;\r\n    }\r\n);\r\n\r\nconst print = tramboline(console.log.bind(console));\r\n\r\n\n\n//# sourceURL=webpack://r/./source/private/lazypair.js?");

/***/ }),

/***/ "./source/private/pair.js":
/*!********************************!*\
  !*** ./source/private/pair.js ***!
  \********************************/
/*! exports provided: empty, prepend, fromArray, concat, mconcat, foldl, foldr, toArray, reverse, map, filter, takeWhile, zip, join, chain, forEach, print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return empty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return prepend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromArray\", function() { return fromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mconcat\", function() { return mconcat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return foldl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return foldr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toArray\", function() { return toArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return reverse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"takeWhile\", function() { return takeWhile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return zip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return chain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return forEach; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Implements a cons cell chain simulating a linked list. Provides the core implementation for the listWrapper object\r\n *  You can use this implementation since it is exported, but better use the object alternative, list\r\n * @signature\r\n *  pair a = empty | (a, pair a)\r\n *  pair ::  a -> pair a -> pair a \r\n * @example\r\n *  Eg. You can map a pair structure\r\n *  const a = fromArray([1, 2, 3, 4]); //-> pair(1)(pair(2)(pair(3)(pair(4)(empty))))\r\n *  \r\n *  const b = map(x => x + 5)(a);\r\n *  //-> pair(6)(pair(7)(pair(8)(pair(9)(empty))))\r\n *  \r\n *  You can fold it\r\n *  foldr((x, y) => x + y, 0, b);\r\n *  //-> 30\r\n *  \r\n *  Reverse it\r\n *  reverse(b);\r\n *  //-> pair(9)(pair(8)(pair(7)(pair(6)(empty))))\r\n * \r\n */ \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pair = x => y => s => s(x)(y);\r\n\r\nconst K = x => y => x;\r\n\r\nconst I = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\r\n\r\nconst car = p => p(K);\r\n\r\nconst cdr = p => p(K(I));\r\n\r\nconst empty = null;\r\n\r\nconst prepend = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (x, y) => pair(x)(y)\r\n);\r\n\r\n// fromArray :: [a] -> Pair a\r\nconst fromArray = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](prepend)(empty);\r\n\r\n// concat :: (Pair a, Pair a) -> Pair a\r\nconst concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2))\r\n);\r\n\r\n// mconcat :: [Pair a] -> Pair a\r\nconst mconcat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](concat)(empty);\r\n\r\n// foldl :: ((b, a) -> b, b, Pair a) -> b\r\nconst foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p))\r\n);\r\n\r\n// foldr :: ((a, b) -> b, b, Pair a) -> b\r\nconst foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)))\r\n);\r\n\r\n// toArray :: Pair a -> [a]\r\nconst toArray = p => foldr((x, y) => [x, ...y], [], p);\r\n\r\n// reverse :: Pair a -> Pair a\r\nconst reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));\r\n\r\n// map :: ((a -> b), Pair a) -> Pair b\r\nconst map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    // (f, p) => foldr((x, y) => prepend(f(x), y), empty, p)\r\n    (f, p) => p === empty ? empty : prepend(f(car(p)), map(f, cdr(p))) // this implementation forces the evaluation of f(car(p))\r\n);\r\n\r\n// filter :: ((a -> Boolean), Pair a) -> Pair a\r\nconst filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    // (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p)\r\n    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), filter(f, cdr(p))) : filter(f, cdr(p))  // this implementation forces the evaluation of f(car(p))\r\n);\r\n\r\n// takeWhile :: ((a -> Boolean), Pair a) -> Pair a\r\nconst takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty\r\n);\r\n\r\n// zip :: (Pair a, Pair b) -> Pair [a, b]\r\nconst zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)))\r\n);\r\n\r\n// join :: Pair (Pair a) -> Pair a\r\nconst join = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](foldr)(concat, empty);\r\n\r\n// chain :: (Pair a, (a -> Pair b)) -> Pair b\r\nconst chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p, f) => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](join, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](map)(f))(p)\r\n);\r\n\r\n// forEach :: (a -> (), Pair a) -> Pair a\r\nconst forEach = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => (foldl((z, x) => f(x), empty, p), p)\r\n);\r\n\r\n// print :: (Pair a) -> ((), Pair a)\r\nconst print = p => forEach(x => console.log(x), p);\r\n\r\n\r\n\n\n//# sourceURL=webpack://r/./source/private/pair.js?");

/***/ }),

/***/ "./source/private/twoParameter.js":
/*!****************************************!*\
  !*** ./source/private/twoParameter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst twoParameter = fn => (x, y) => fn(x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (twoParameter);\n\n//# sourceURL=webpack://r/./source/private/twoParameter.js?");

/***/ }),

/***/ "./source/range.js":
/*!*************************!*\
  !*** ./source/range.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Creates an array with integers in range of [x, y). Can utilize a step quantity\r\n * @signature\r\n *  range :: (Number, Number, Number?) -> [Number]\r\n * @example\r\n *  range(1, 5);\r\n *  //-> [1, 2, 3, 4]\r\n *  range(5, 1, -2)\r\n *  //-> [5, 3]\r\n */\r\n\r\n\r\n\r\n\r\nconst range = (start, stop, step = (stop - start) < 0 ? -1 : 1) =>\r\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"map\"])((x, i) => start + i * step)(Array(Math.ceil((stop - start) / step)).fill(0));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(range));\r\n\r\n\n\n//# sourceURL=webpack://r/./source/range.js?");

/***/ }),

/***/ "./source/reduce.js":
/*!**************************!*\
  !*** ./source/reduce.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Same behaviour as Array.prototype.reduce except array must be passed explicitly\r\n * @signature\r\n *  reduce :: ((b, a) -> b) -> b -> [a] -> b\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  const add = (x, y) => x + y;\r\n *  reduce(add, 0, a);\r\n *  //-> 10\r\n *\r\n */\r\n\r\n\r\n\r\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduce))));\r\n\n\n//# sourceURL=webpack://r/./source/reduce.js?");

/***/ }),

/***/ "./source/reduceRight.js":
/*!*******************************!*\
  !*** ./source/reduceRight.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Same behaviour as Array.prototype.reduceRight except array must be passed explicitly\r\n * @signature\r\n *  reduceRight :: ((b, a) -> b) -> b -> [a] -> b\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  const add = (x, y) => x + y;\r\n *  reduceRight(add, 0, a);\r\n *  //-> 10\r\n *\r\n */\r\n\r\n\r\n\r\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduceRight))));\r\n\n\n//# sourceURL=webpack://r/./source/reduceRight.js?");

/***/ }),

/***/ "./source/some.js":
/*!************************!*\
  !*** ./source/some.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns true if for at least one element x, Predicate(x) -> True. Otherwise returns false.\r\n *  Same behaviour as Array.prototype.some except array must be passed explicitly\r\n * @signature\r\n *  some :: (a -> Boolean) -> [a] -> Boolean\r\n *  some :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) || Predicate(e2) || ... || Predicate(en)\r\n * @example\r\n *  const a = [1, 2, 3, 4];\r\n *  \r\n *  some(x => x > 3, a);\r\n *  //-> True\r\n *  every(x => x > 4)(a);\r\n *  //-> False\r\n *\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.some))));\r\n\n\n//# sourceURL=webpack://r/./source/some.js?");

/***/ }),

/***/ "./source/stream.js":
/*!**************************!*\
  !*** ./source/stream.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_lazypair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/lazypair */ \"./source/private/lazypair.js\");\n/**\r\n * @description\r\n *  Implements a steam interface through a streamWrapper object. Utilizes a lpair data type (cons cell) for the creation\r\n *  of a recursively defined, lazy, linked list. Simulates lazy evaluation with the help of functions (thunks)\r\n *  \r\n * ***\r\n *  You have to procceed with caution when you are consuming a lazy structure or you will end with stack overflow. \r\n *  This happens because all the implementations are utilizing a recursive approach. If you want to consume a stream without errors,\r\n *  you can use the unpure tramboline function helper.\r\n * ***\r\n * @signature\r\n *  stream :: ([a] | (a, a, a, a, ...a)) -> Strea a\r\n * @example\r\n *  const a = stream([1, 2, 3, 4]) // === stream(1, 2, 3, 4)\r\n *\r\n *  Mapping\r\n *\r\n *  You can map the stream with a method call:\r\n *\r\n *  a.map(x => x + 5);\r\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\r\n *\r\n *  or point-wise call:\r\n *\r\n *  stream.map(x => x + 5, a);\r\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\r\n *\r\n *  or curried alternative:\r\n *\r\n *  stream.map(x => x + y)(a)\r\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\r\n *\r\n *  Zipping\r\n *\r\n *  const b = stream([1, 2, 3, 4]);  // === stream(1, 2, 3, 4)\r\n *  const c = stream([5, 6, 7, 8]);  // === stream(5, 6, 7, 8) \r\n *\r\n *  b.zip(c);\r\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\r\n *\r\n *  or point-wise call:\r\n *\r\n *  stream.zip(b, c);\r\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\r\n *\r\n *  or curried alternative:\r\n *\r\n *  stream.zip(b)(c);\r\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\r\n * \r\n *  You can operate on infinite streams like this\r\n * \r\n *  const n1 = stream.range(1, Infinity);\r\n *  const n2 = stream.map(x => -x)(n1);\r\n *  const n3 = stream.lfilter(x => x % 2 === 0)(n2);\r\n *  const n4 = stream.take(100)(n3);\r\n *  stream.print(n4);\r\n *  //-> -2 -4 -6 ... -200\r\n * \r\n *  Or you can use chaining\r\n *  stream.range(1, Infinity).map(x => -x).lfilter(x => x % 2 === 0).take(100).print();\r\n *  //-> -2 -4 -6 ... -200\r\n * \r\n *  Convert it to Arrays\r\n *  stream.range(100, 200000).take(100).toArray();\r\n *  //-> [100, 101, ..., 199]\r\n */\r\n\r\n\r\n\r\n\r\n\r\nconst streamWrapper = p => {\r\n    const wrapped = fn => (...args) => streamWrapper(fn(...args));\r\n\r\n    return ({\r\n        // map :: Stream a ⤳ (a -> b) -> Stream a\r\n        map: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(f, p),\r\n\r\n        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a *greedy*\r\n        filter: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(f, p),\r\n\r\n        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a  *lazy, use with caution cause filtering is not inherently lazy*\r\n        lfilter: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"lfilter\"])(f, p),\r\n\r\n        // foldl :: Stream a ⤳ ((b, a) -> b, b) -> b\r\n        foldl: (f, z) => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldl\"])(f, z, p),\r\n\r\n        // foldr :: Stream a ⤳ ((a, b) -> b, b) -> b\r\n        foldr: (f, z) => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])(f, z, p),\r\n\r\n        // takeWhile :: Stream a ⤳ (a -> Boolean) -> Stream a\r\n        takeWhile: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"takeWhile\"])(f, p),\r\n\r\n        // toArray :: Stream a ⤳ [a]\r\n        toArray: () => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"toArray\"])(p),\r\n\r\n        toList: () => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](_exporter__WEBPACK_IMPORTED_MODULE_0__[\"list\"].listWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"toPair\"])(p),\r\n\r\n        // concat :: Stream a ⤳ Stream a -> Stream a\r\n        concat: r => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, r.getLazyPairContext()),\r\n\r\n        // mconcat :: Stream a ⤳ [Stream a] -> Stream a\r\n        mconcat: l => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"]((x, y) => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])), l).getLazyPairContext()),\r\n\r\n        // zip :: Stream a ⤳ Stream b -> Stream [a, b]\r\n        zip: r => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"zip\"])(p, r.getLazyPairContext()),\r\n\r\n        // take :: Stream a ⤳ Number -> Stream a\r\n        take: n => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"take\"])(n, p),\r\n\r\n        // join :: Stream (Stream a) ⤳ Stream a\r\n        join: () => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])((x, y) => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])), p),\r\n\r\n        // chain :: Stream a ⤳ (a -> Stream b) -> Stream b\r\n        chain: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"chain\"])(p, x => f(x).getLazyPairContext()),\r\n\r\n        // tramboline :: Stream a ⤳ (a -> ()) -> Stream a\r\n        tramboline: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"tramboline\"])(f, p),\r\n\r\n        // print :: Stream a ⤳ ((), Stream a)\r\n        print: () => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"tramboline\"])(console.log.bind(console), p),\r\n\r\n        // getLazyPairContext :: Stream a ⤳ Lazy Pair a\r\n        getLazyPairContext: () => p,\r\n    });\r\n};\r\n\r\nconst guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? (Array.isArray(args[0]) ? f(args[0]) : f([args[0]])) : f([]);\r\n\r\n\r\nconst stream = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](streamWrapper, guardFromArray(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"fromArray\"]));\r\n\r\n// streamWrapper :: Lazy Pair a -> Stream a\r\nstream.streamWrapper = p => streamWrapper(p);\r\n\r\n// fromArray :: [a] -> Stream a\r\nstream.fromArray = a => stream(a);\r\n\r\n// fromList :: List a -> Stream a\r\nstream.fromList = p => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](streamWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"fromPair\"])(p.getPairContext())\r\n\r\n// toList :: Stream a -> List a\r\nstream.toList = p => p.toList();\r\n\r\n// toArray :: Stream a -> [a]\r\nstream.toArray = p => p.toArray();\r\n\r\nstream.range = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](streamWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"range\"]);\r\n\r\n// map :: ((a -> b), Stream a) -> Stream b\r\nstream.map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.map(f)\r\n);\r\n\r\n// filter :: ((a -> Boolean), Stream a) -> Stream a\r\nstream.filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.filter(f)\r\n);\r\n\r\n// filter :: ((a -> Boolean), Stream a) -> Stream a\r\nstream.lfilter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.lfilter(f)\r\n);\r\n\r\n// foldl :: ((b, a) -> b, b, Stream a) -> b\r\nstream.foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p.foldl(f, z)\r\n);\r\n\r\n// foldr :: ((a, b) -> b, b, Stream a) -> b\r\nstream.foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, z, p) => p.foldr(f, z)\r\n);\r\n\r\n// concat :: (Stream a, Stream a) -> Stream a\r\nstream.concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p1, p2) => p1.concat(p2)\r\n);\r\n\r\n// mconcat :: [Stream a] -> Stream a\r\nstream.mconcat = l => streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])).mconcat(l);\r\n\r\n// takeWhile :: ((a -> Boolean), Stream a) -> Stream a\r\nstream.takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.takeWhile(f)\r\n);\r\n\r\nstream.take = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (n, p) => p.take(n)\r\n);\r\n\r\n// zip :: (Stream a, Stream b) -> Stream [a, b]\r\nstream.zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p, r) => p.zip(r)\r\n);\r\n\r\n// join :: Stream (Stream a) -> Stream a\r\nstream.join = p => p.join();\r\n\r\n// chain :: (Stream a, (a -> Stream b)) -> Stream b\r\nstream.chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (p, f) => p.chain(f)\r\n);\r\n\r\n// tramboline :: (a -> (), Stream a) -> Stream a\r\nstream.tramboline = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\r\n    (f, p) => p.tramboline(f)\r\n);\r\n\r\n// logger :: (Stream a) -> ((), Stream a)\r\nstream.print = p => p.print();\r\n\r\n// getLazyPairContext :: Stream a -> Lazy Pair a\r\nstream.getLazyPairContext = p => p.getLazyPairContext();\r\n\r\nstream.repeat = x => stream.streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"repeat\"])(x));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (stream);\r\n\r\n\r\n\n\n//# sourceURL=webpack://r/./source/stream.js?");

/***/ }),

/***/ "./source/subtract.js":
/*!****************************!*\
  !*** ./source/subtract.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Subtracts second parameter from first one. op (-)\r\n * @signature\r\n *  (Number, Number) -> Number\r\n * @example\r\n *  let result = subtract(2, 5);  //=> -3\r\n *  let result = subtract(2)(5);  //=> -3\r\n */\r\n\r\n\r\n\r\nconst subtract = (x, y) => x - y;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subtract));\n\n//# sourceURL=webpack://r/./source/subtract.js?");

/***/ }),

/***/ "./source/uncurry.js":
/*!***************************!*\
  !*** ./source/uncurry.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a stepwise sequence of unary functions into a multivariable function\r\n * @signature\r\n *  n1 -> n2 -> ... -> nm -> n -> (n1, n2, ..., nm) -> n\r\n * @example\r\n *  const add = x => y => z => x + y + z;\r\n *  const uncurriedAdd = uncurry(add);\r\n *  add(1)(2)(3) === uncurriedAdd(1, 2, 3);\r\n *  //-> 6\r\n */\r\n\r\n\r\n\r\nconst uncurry = fn => (...args) => args.reduce((F, arg) => F(arg), fn);\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (uncurry);\n\n//# sourceURL=webpack://r/./source/uncurry.js?");

/***/ }),

/***/ "./source/unmethodify.js":
/*!*******************************!*\
  !*** ./source/unmethodify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Transform object methods to standalone functions receiving objects as first argument.\r\n * @singature\r\n *  ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b\r\n * @example\r\n *  let obj = {age: 15, getAge: function() {return this.age;}};\r\n *  obj.getAge() //=> 15\r\n * \r\n *  let getAge = unmethod(obj.getAge);\r\n *  getAge(obj) //=> 15\r\n */\r\n\r\nconst unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);\r\n\r\nconst unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);\r\n\r\nconst unmethodify3 = fn => (...args) => fn.bind(...args)();\r\n\r\nconst unmethod = unmethodify3;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (unmethod);\n\n//# sourceURL=webpack://r/./source/unmethodify.js?");

/***/ })

/******/ });
});