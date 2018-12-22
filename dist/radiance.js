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
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Adds two values. op (+)\r\n * @signature\r\n *  (Number, Number) -> Number *      \r\n * @example\r\n *  let result = add(2, 5);  //=> 7\r\n */\r\n\r\nconst add = (x, y) => x + y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack://R/./source/add.js?");

/***/ }),

/***/ "./source/binaryOp.js":
/*!****************************!*\
  !*** ./source/binaryOp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Performs a binary Operation between to arguments. Set{\"+\", \"-\", \"/\", \"*\", \"=\", \">\", \"<\"}\r\n * @signature\r\n *  (String, Number, Number) -> Number || Boolean\r\n * @example\r\n * \r\n * \r\n * \r\n */\r\n\r\n// Default. Implementation utilizing switch block statement\r\nconst switchImplementation = (operator, x, y) => {\r\n    switch(operator) {\r\n        case \"+\": return x + y;\r\n        case \"-\": return x - y;\r\n        case \"/\": return x / y;\r\n        case \"*\": return x * y;\r\n        case \"=\": return x === y;\r\n        case \">\": return x > y;\r\n        case \"<\": return x < y;\r\n    }\r\n};\r\n\r\n// Implementation utilizing if statement\r\nconst ifImplementation = (operator, x, y) => {\r\n    if (operator === \"+\") return x + y;\r\n    else if (operator === \"-\") return x - y;\r\n    else if (operator === \"/\") return x / y;\r\n    else if (operator === \"*\") return x * y;\r\n    else if (operator === \"=\") return x === y;\r\n    else if (operator === \">\") return x > y;\r\n    else if (operator === \"<\") return x < y;\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchImplementation);\r\n\r\n\n\n//# sourceURL=webpack://R/./source/binaryOp.js?");

/***/ }),

/***/ "./source/curry.js":
/*!*************************!*\
  !*** ./source/curry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of unary functions\r\n * @signature\r\n *  ((n1, n2, ...nm) -> n) -> n1 -> n2 -> ...nm -> n \r\n * @example\r\n *      \r\n */\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst curryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : x => curryWithBind(fn.bind(null, x), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst curryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args) => y => (argLength <= args.length + 1 ? fn : innerCurry)(...args, y);\r\n    return innerCurry();\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (curryRecursive);\n\n//# sourceURL=webpack://R/./source/curry.js?");

/***/ }),

/***/ "./source/divide.js":
/*!**************************!*\
  !*** ./source/divide.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Divides second parameter by first one. op (/)\r\n * @signature\r\n *  (Number, Number) -> Number\r\n * @example\r\n *  let result = divide(2, 5);  //=> 0.4\r\n */\r\n\r\nconst divide = (x, y) => x / y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (divide);\n\n//# sourceURL=webpack://R/./source/divide.js?");

/***/ }),

/***/ "./source/exporter.js":
/*!****************************!*\
  !*** ./source/exporter.js ***!
  \****************************/
/*! exports provided: add, subtract, multiply, divide, binaryOp, curry, pcurry, unmethod, flip, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./source/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./source/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ \"./source/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide */ \"./source/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _binaryOp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binaryOp */ \"./source/binaryOp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binaryOp\", function() { return _binaryOp__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry */ \"./source/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pcurry\", function() { return _partialCurry__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _unmethodify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unmethodify */ \"./source/unmethodify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmethod\", function() { return _unmethodify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flip */ \"./source/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map */ \"./source/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://R/./source/exporter.js?");

/***/ }),

/***/ "./source/flip.js":
/*!************************!*\
  !*** ./source/flip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Inverts parameter passing to a function.\r\n * \r\n * \r\n * \r\n */\r\n\r\n\r\nconst flip = fn => (x, y) => fn(y, x);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\n\n//# sourceURL=webpack://R/./source/flip.js?");

/***/ }),

/***/ "./source/map.js":
/*!***********************!*\
  !*** ./source/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Same behaviour as Array.prototype.map except array must be passed explicitly\r\n * @signature\r\n *  (a -> b) -> [a] -> [b]\r\n * @example\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.map))));\r\n\n\n//# sourceURL=webpack://R/./source/map.js?");

/***/ }),

/***/ "./source/multiply.js":
/*!****************************!*\
  !*** ./source/multiply.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Multiplies first parameter, second parameter times . op (*)\r\n * @signature\r\n *  (Number, Number) -> Number\r\n * @example\r\n *  let result = multiply(2, 5);  //=> 10\r\n */\r\n\r\nconst multiply = (x, y) => x * y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiply);\n\n//# sourceURL=webpack://R/./source/multiply.js?");

/***/ }),

/***/ "./source/partialCurry.js":
/*!********************************!*\
  !*** ./source/partialCurry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Converting a multivariable function into a stepwise sequence of partially applied functions\r\n * @signature\r\n *  ((n1, n2, ...nm) -> n) -> n1 -> n2 -> ...nm -> n || ((n1, n2, ...nm) -> n) -> (n1, n2) -> n3 -> ...nm -> n || ... || ((n1, n2, ...nm) -> n) -> (n1, n2, ... n[m-1]) -> nm -> n\r\n * @example\r\n *      \r\n */\r\n\r\n\r\n\r\n// Implementation utilizing Function.prototype.bind method\r\nconst partialCurryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : (...args) => partialCurryWithBind(fn.bind(null, ...args), argLength - 1);\r\n\r\n// Default implementation via recursion and closures\r\nconst partialCurryRecursive = (fn, argLength = fn.length) => {\r\n    const innerCurry = (...args1) => (...args2) => (argLength <= args1.length + args2.length ? fn : innerCurry)(...args1, ...args2);\r\n    return innerCurry();\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (partialCurryRecursive);\n\n//# sourceURL=webpack://R/./source/partialCurry.js?");

/***/ }),

/***/ "./source/subtract.js":
/*!****************************!*\
  !*** ./source/subtract.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Subtracts second parameter from first one. op (-)\r\n * @signature\r\n *  (Number, Number) -> Number\r\n * @example\r\n *  let result = subtract(2, 5);  //=> -3\r\n */\r\n\r\nconst subtract = (x, y) => x - y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (subtract);\n\n//# sourceURL=webpack://R/./source/subtract.js?");

/***/ }),

/***/ "./source/unmethodify.js":
/*!*******************************!*\
  !*** ./source/unmethodify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Transform object methods to standalone functions receiving objects as first argument.\r\n * @singature\r\n *  ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b\r\n * @example\r\n *      \r\n */\r\n\r\nconst unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);\r\n\r\nconst unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);\r\n\r\nconst unmethodify3 = fn => (...args) => fn.bind(...args)();\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (unmethodify3);\n\n//# sourceURL=webpack://R/./source/unmethodify.js?");

/***/ })

/******/ });
});