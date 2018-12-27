(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["R"] = factory();
	else
		root["R"] = factory();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Adds two values. op (+)\r\n * @signature\r\n *  add :: Number -> Number -> Number\r\n *  add :: (Number, Number) -> Number     \r\n * @example\r\n *  let result = add(2, 5);  //=> 7\r\n *  let result = add(2)(5);  //=> 7\r\n */\r\n\r\n\r\n\r\nconst add = (x, y) => x + y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(add));\n\n//# sourceURL=webpack://R/./source/add.js?");

/***/ }),

/***/ "./source/binaryOp.js":
/*!****************************!*\
  !*** ./source/binaryOp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Performs a binary Operation between to arguments. Set{\"+\", \"-\", \"/\", \"*\", \"=\", \">\", \"<\"}\r\n * @signature\r\n *  binaryOp :: String -> Number -> Number -> Number | Boolean\r\n *  binaryOp :: (String, Number, Number) -> Number | Boolean\r\n * @example\r\n *  let add = binaryOp(\"+\") //=> Function add\r\n *  let result = add(2)(19) //=> 21\r\n * \r\n *  let higherThanFive = binaryOp(\"<\")(5) //=> Function y => 5 < y\r\n *  let result = higherThanFive(6); //=> True\r\n * \r\n *  let result = binaryOp(\"*\")(2)(5) //=> 10\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n// Default. Implementation utilizing switch block statement\r\nconst switchImplementation = (operator, x, y) => {\r\n    switch(operator) {\r\n        case \"+\": return x + y;\r\n        case \"-\": return x - y;\r\n        case \"/\": return x / y;\r\n        case \"*\": return x * y;\r\n        case \"=\": return x === y;\r\n        case \">\": return x > y;\r\n        case \"<\": return x < y;\r\n    }\r\n};\r\n\r\n// Implementation utilizing if statement\r\nconst ifImplementation = (operator, x, y) => {\r\n    if (operator === \"+\") return x + y;\r\n    else if (operator === \"-\") return x - y;\r\n    else if (operator === \"/\") return x / y;\r\n    else if (operator === \"*\") return x * y;\r\n    else if (operator === \"=\") return x === y;\r\n    else if (operator === \">\") return x > y;\r\n    else if (operator === \"<\") return x < y;\r\n};\r\n\r\n\r\nconst binaryOp = switchImplementation;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(binaryOp));\r\n\r\n\n\n//# sourceURL=webpack://R/./source/binaryOp.js?");

/***/ }),

/***/ "./source/concat.js":
/*!**************************!*\
  !*** ./source/concat.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_twoParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/twoParameter */ \"./source/private/twoParameter.js\");\n/**\r\n * @description\r\n *  Merges two arrays. Returns a new array.\r\n *  Same behaviour as Array.prototype.concat except array must be passed explicitly\r\n * @signature\r\n *  concat :: [a] -> [b] -> [a, b]\r\n *  concat :: [] \r\n * @example\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_private_twoParameter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.concat))));\r\n\n\n//# sourceURL=webpack://R/./source/concat.js?");

/***/ }),

/***/ "./source/curry.js":
/*!*************************!*\
  !*** ./source/curry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of unary functions\r\n * @signature\r\n *  curry :: ((a1, a2, a3, ..., an) -> b, Number?) -> a1 -> a2 -> a3 -> ... -> an -> b\r\n * @example\r\n *      \r\n */\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst curryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : x => curryWithBind(fn.bind(null, x), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst curryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args) => y => (argLength <= args.length + 1 ? fn : innerCurry)(...args, y);\r\n    return innerCurry();\r\n};\r\n\r\nconst curry = curryRecursive;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (curry);\n\n//# sourceURL=webpack://R/./source/curry.js?");

/***/ }),

/***/ "./source/divide.js":
/*!**************************!*\
  !*** ./source/divide.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Divides second parameter by first one. op (/)\r\n * @signature\r\n *  divide :: Number -> Number -> Number\r\n *  divide :: (Number, Number) -> Number\r\n * @example\r\n *  let result = divide(2, 5);  //=> 0.4\r\n *  let result = divide(2)(5);  //=> 0.4\r\n */\r\n\r\n\r\n\r\nconst divide = (x, y) => x / y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(divide));\n\n//# sourceURL=webpack://R/./source/divide.js?");

/***/ }),

/***/ "./source/every.js":
/*!*************************!*\
  !*** ./source/every.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns true if for every element x, Predicate(x) -> True. Otherwise return false.\r\n *  Same behaviour as Array.prototype.every except array must be passed explicitly\r\n * @signature\r\n *  every :: (a -> Boolean) -> [a] -> Boolean\r\n *  every :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) && Predicate(e2) && ... && Predicate(en)\r\n * @example\r\n *\r\n *\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.every))));\r\n\n\n//# sourceURL=webpack://R/./source/every.js?");

/***/ }),

/***/ "./source/exporter.js":
/*!****************************!*\
  !*** ./source/exporter.js ***!
  \****************************/
/*! exports provided: add, subtract, multiply, divide, binaryOp, curry, pcurry, unmethod, flip, map, filter, reduce, reduceRight, identity, uncurry, every, some, concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./source/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./source/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ \"./source/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide */ \"./source/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _binaryOp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binaryOp */ \"./source/binaryOp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binaryOp\", function() { return _binaryOp__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry */ \"./source/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pcurry\", function() { return _partialCurry__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _unmethodify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unmethodify */ \"./source/unmethodify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmethod\", function() { return _unmethodify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flip */ \"./source/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map */ \"./source/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter */ \"./source/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reduce */ \"./source/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduceRight */ \"./source/reduceRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceRight\", function() { return _reduceRight__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identity */ \"./source/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _uncurry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uncurry */ \"./source/uncurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uncurry\", function() { return _uncurry__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _every__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./every */ \"./source/every.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _every__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./some */ \"./source/some.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _some__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./concat */ \"./source/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://R/./source/exporter.js?");

/***/ }),

/***/ "./source/filter.js":
/*!**************************!*\
  !*** ./source/filter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns a new array with all elements x for which Predicate(x) -> True.\r\n *  Same behaviour as Array.prototype.filter except array must be passed explicitly\r\n * @signature\r\n *  filter :: (a -> Boolean) -> [a] -> [a]\r\n * @example\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.filter))));\r\n\n\n//# sourceURL=webpack://R/./source/filter.js?");

/***/ }),

/***/ "./source/flip.js":
/*!************************!*\
  !*** ./source/flip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Inverts parameter passing to a function.\r\n * @signature\r\n *  ((a, b) -> c) -> ((b, a) -> c)\r\n * \r\n * \r\n */\r\n\r\n\r\nconst flip = fn => (x, y) => fn(y, x);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\n\n//# sourceURL=webpack://R/./source/flip.js?");

/***/ }),

/***/ "./source/identity.js":
/*!****************************!*\
  !*** ./source/identity.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Identity function. Returns the first passed argument\r\n * @signature\r\n *  a -> a\r\n * @example\r\n *  let result = identity(3) //=> 3\r\n */\r\n\r\n\r\nconst identity = x => x;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (identity);\n\n//# sourceURL=webpack://R/./source/identity.js?");

/***/ }),

/***/ "./source/map.js":
/*!***********************!*\
  !*** ./source/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies to every element of the array the function a -> b. Returns a new array.\r\n *  Same behaviour as Array.prototype.map except array must be passed explicitly\r\n * @signature\r\n *  map :: (a -> b) -> [a] -> [b]\r\n * @example\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.map))));\r\n\n\n//# sourceURL=webpack://R/./source/map.js?");

/***/ }),

/***/ "./source/multiply.js":
/*!****************************!*\
  !*** ./source/multiply.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Multiplies first parameter, second parameter times . op (*)\r\n * @signature\r\n *  multiply :: Number -> Number -> Number\r\n *  multiply :: (Number, Number) -> Number\r\n * @example\r\n *  let result = multiply(2, 5);  //=> 10\r\n *  let result = multiply(2)(5);  //=> 10 \r\n */\r\n\r\n\r\n\r\nconst multiply = (x, y) => x * y;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(multiply));\n\n//# sourceURL=webpack://R/./source/multiply.js?");

/***/ }),

/***/ "./source/partialCurry.js":
/*!********************************!*\
  !*** ./source/partialCurry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of partially applied functions\r\n * @signature\r\n *  pcurry :: ((a1, a2, a3, ..., an) -> b, Number?) -> (a1 -> a2 -> a3 -> ... -> an -> b) | ((a1, a2) -> a3 -> ... -> an -> b) | ((a1, a2, a3) -> ... -> an -> b) | ... | (a1, a2, ..., an) -> b\r\n * @example\r\n *      \r\n */\r\n\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst partialCurryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : (...args) => partialCurryWithBind(fn.bind(null, ...args), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst partialCurryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args1) => (...args2) => (argLength <= args1.length + args2.length ? fn : innerCurry)(...args1, ...args2);\r\n    return innerCurry();\r\n};\r\n\r\nconst pcurry = partialCurryRecursive;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pcurry);\n\n//# sourceURL=webpack://R/./source/partialCurry.js?");

/***/ }),

/***/ "./source/private/twoParameter.js":
/*!****************************************!*\
  !*** ./source/private/twoParameter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst twoParameter = fn => (x, y) => fn(x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (twoParameter);\n\n//# sourceURL=webpack://R/./source/private/twoParameter.js?");

/***/ }),

/***/ "./source/reduce.js":
/*!**************************!*\
  !*** ./source/reduce.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Same behaviour as Array.prototype.reduce except array must be passed explicitly\r\n * @signature\r\n *  reduce :: ((b, a) -> b) -> b -> [a] -> b\r\n * @example\r\n *\r\n *\r\n */\r\n\r\n\r\n\r\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduce))));\r\n\n\n//# sourceURL=webpack://R/./source/reduce.js?");

/***/ }),

/***/ "./source/reduceRight.js":
/*!*******************************!*\
  !*** ./source/reduceRight.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Same behaviour as Array.prototype.reduceRight except array must be passed explicitly\r\n * @signature\r\n *  reduceRight :: ((b, a) -> b) -> b -> [a] -> b\r\n * @example\r\n *\r\n *\r\n */\r\n\r\n\r\n\r\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduceRight))));\r\n\n\n//# sourceURL=webpack://R/./source/reduceRight.js?");

/***/ }),

/***/ "./source/some.js":
/*!************************!*\
  !*** ./source/some.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Applies a predicate function to all the elements of the array. Returns true if for at least one element x, Predicate(x) -> True. Otherwise returns false.\r\n *  Same behaviour as Array.prototype.some except array must be passed explicitly\r\n * @signature\r\n *  some :: (a -> Boolean) -> [a] -> Boolean\r\n *  some :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) || Predicate(e2) || ... || Predicate(en)\r\n * @example\r\n *\r\n *\r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.some))));\r\n\n\n//# sourceURL=webpack://R/./source/some.js?");

/***/ }),

/***/ "./source/subtract.js":
/*!****************************!*\
  !*** ./source/subtract.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Subtracts second parameter from first one. op (-)\r\n * @signature\r\n *  (Number, Number) -> Number\r\n * @example\r\n *  let result = subtract(2, 5);  //=> -3\r\n *  let result = subtract(2)(5);  //=> -3\r\n */\r\n\r\n\r\n\r\nconst subtract = (x, y) => x - y;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subtract));\n\n//# sourceURL=webpack://R/./source/subtract.js?");

/***/ }),

/***/ "./source/uncurry.js":
/*!***************************!*\
  !*** ./source/uncurry.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a stepwise sequence of unary functions into a multivariable function\r\n * @signature\r\n *  n1 -> n2 -> ... -> nm -> n -> (n1, n2, ..., nm) -> n\r\n * @example\r\n *  \r\n */\r\n\r\n\r\n\r\nconst uncurry = fn => (...args) => args.reduce((F, arg) => F(arg), fn);\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (uncurry);\n\n//# sourceURL=webpack://R/./source/uncurry.js?");

/***/ }),

/***/ "./source/unmethodify.js":
/*!*******************************!*\
  !*** ./source/unmethodify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Transform object methods to standalone functions receiving objects as first argument.\r\n * @singature\r\n *  ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b\r\n * @example\r\n *  let obj = {age: 15, getAge: function() {return this.age;}};\r\n *  obj.getAge() //=> 15\r\n * \r\n *  let getAge = unmethod(obj.getAge);\r\n *  getAge(obj) //=> 15\r\n */\r\n\r\nconst unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);\r\n\r\nconst unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);\r\n\r\nconst unmethodify3 = fn => (...args) => fn.bind(...args)();\r\n\r\nconst unmethod = unmethodify3;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (unmethod);\n\n//# sourceURL=webpack://R/./source/unmethodify.js?");

/***/ })

/******/ });
});