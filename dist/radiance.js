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

/***/ "./source/compose.js":
/*!***************************!*\
  !*** ./source/compose.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\n *  with a mapping A -> C and type gྪ ◦ f = g(f(x)) \n * @signature\n *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z \n * @example\n *  add5 :: Number -> Number\n *  const add5 = x => x + 5;\n *\n *  mul50 :: Number -> Number\n *  const mul50 = x => x * 50;\n *\n *  mul50AndAdd5 :: Number -> Number\n *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)\n *\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\n *  \n */\n\n\n\n\nconst composeTwo = (g, f) => x => g(f(x));\n\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\n\n\n//# sourceURL=webpack://R/./source/compose.js?");

/***/ }),

/***/ "./source/composeM.js":
/*!****************************!*\
  !*** ./source/composeM.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\r\n *  with a mapping A -> C and type gྪ ◦ f = g(f(x)) \r\n * @signature\r\n *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z \r\n * @example\r\n *  add5 :: Number -> Number\r\n *  const add5 = x => x + 5;\r\n *\r\n *  mul50 :: Number -> Number\r\n *  const mul50 = x => x * 50;\r\n *\r\n *  mul50AndAdd5 :: Number -> Number\r\n *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)\r\n *\r\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst composeTwo = (g, f) => (...args) => g(f(...args));\r\n\r\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\r\n\n\n//# sourceURL=webpack://R/./source/composeM.js?");

/***/ }),

/***/ "./source/concat.js":
/*!**************************!*\
  !*** ./source/concat.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_twoParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/twoParameter */ \"./source/private/twoParameter.js\");\n/**\r\n * @description\r\n *  Merges two arrays. Returns a new array.\r\n *  Same behaviour as Array.prototype.concat except array must be passed explicitly\r\n * @signature\r\n *  concat :: [a] -> [b] -> [a, b]\r\n *  concat :: ([a], [b]) -> [a, b] \r\n * @example\r\n * \r\n * \r\n */\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_private_twoParameter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.concat))));\r\n\n\n//# sourceURL=webpack://R/./source/concat.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\r\n * @description\r\n *  Divides second parameter by first one. op (/)\r\n * @signature\r\n *  divide :: Number -> Number -> Number\r\n *  divide :: (Number, Number) -> Number\r\n * @example\r\n *  let result = divide(2, 5);  //=> 0.4\r\n *  let result = divide(2)(5);  //=> 0.4\r\n */\r\n\r\n\r\n\r\nconst divide = (x, y) => x / y;\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(divide));\r\n\n\n//# sourceURL=webpack://R/./source/divide.js?");

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
/*! exports provided: add, subtract, multiply, divide, binaryOp, curry, pcurry, unmethod, flip, map, filter, reduce, reduceRight, identity, uncurry, every, some, concat, foldl, foldr, compose, range, pipe, composeM, pipeM, list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./source/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./source/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ \"./source/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide */ \"./source/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _binaryOp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binaryOp */ \"./source/binaryOp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binaryOp\", function() { return _binaryOp__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry */ \"./source/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pcurry\", function() { return _partialCurry__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _unmethodify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unmethodify */ \"./source/unmethodify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmethod\", function() { return _unmethodify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flip */ \"./source/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map */ \"./source/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter */ \"./source/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reduce */ \"./source/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduceRight */ \"./source/reduceRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceRight\", function() { return _reduceRight__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identity */ \"./source/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _uncurry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uncurry */ \"./source/uncurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uncurry\", function() { return _uncurry__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _every__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./every */ \"./source/every.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _every__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./some */ \"./source/some.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _some__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./concat */ \"./source/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _foldLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./foldLeft */ \"./source/foldLeft.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return _foldLeft__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _foldRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./foldRight */ \"./source/foldRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return _foldRight__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./compose */ \"./source/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./range */ \"./source/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipeline */ \"./source/pipeline.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipe\", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _composeM__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./composeM */ \"./source/composeM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeM\", function() { return _composeM__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _pipelineM__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipelineM */ \"./source/pipelineM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipeM\", function() { return _pipelineM__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list */ \"./source/list.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return _list__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://R/./source/exporter.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @description\r\n *  Inverts parameter passing to a function.\r\n * @signature\r\n *  ((a, b) -> c) -> ((b, a) -> c)\r\n * \r\n * \r\n */\r\n\r\n\r\nconst flip = fn => (x, y) => fn(y, x);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\r\n\n\n//# sourceURL=webpack://R/./source/flip.js?");

/***/ }),

/***/ "./source/foldLeft.js":
/*!****************************!*\
  !*** ./source/foldLeft.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Gathering values of an Array through a reducer function. Left-Folding\r\n * @signature\r\n *  foldLeft :: ((b, a) -> b) -> b -> [a] -> b || (b -> a -> b) -> b -> [a] -> b\r\n\r\n * @example\r\n *  \r\n *\r\n */\r\n\r\n\r\n\r\nconst foldLeft = (f, z, [first, ...rest]) => first === undefined ?\r\n    z :\r\n    foldLeft(f, Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(z)(first), rest);\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldLeft));\r\n\n\n//# sourceURL=webpack://R/./source/foldLeft.js?");

/***/ }),

/***/ "./source/foldRight.js":
/*!*****************************!*\
  !*** ./source/foldRight.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Gathering values of an Array through a reducer function. Right-Folding\r\n * @signature\r\n *  foldRight :: ((b, a) -> a) -> a -> [b] -> a || (b -> a -> a) -> a -> [b] -> a\r\n\r\n * @example\r\n *  \r\n *\r\n */\r\n\r\n\r\n\r\nconst foldRight = (f, z, [first, ...rest]) => first === undefined ?\r\n    z :\r\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(first)(foldRight(f, z, rest));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldRight));\r\n\n\n//# sourceURL=webpack://R/./source/foldRight.js?");

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

/***/ "./source/list.js":
/*!************************!*\
  !*** ./source/list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\n *  with a mapping A -> C and type gྪ ◦ f = g(f(x)) \n * @signature\n *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z \n * @example\n *  add5 :: Number -> Number\n *  const add5 = x => x + 5;\n *\n *  mul50 :: Number -> Number\n *  const mul50 = x => x * 50;\n *\n *  mul50AndAdd5 :: Number -> Number\n *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)\n *\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\n *  \n */\n\n\n\nconst pair = x => y => s => s(x)(y);\n\nconst K = x => y => x;\n\nconst I = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n\nconst car = p => p(K);\n\nconst cdr = p => p(K(I));\n\nconst empty = null;\n \nconst prepend = (x, y) => pair(x)(y);\n\n// fromArray :: [a] -> List a\nconst fromArray = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](prepend)(empty); \n\n\n\n// concat :: (List a, List a) -> List a\nconst concat = (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2));\n\n// mconcat :: [List a] -> List a\nconst mconcat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](concat)(empty);\n\n// foldl :: ((b, a) -> b, b, List a) -> b\nconst foldl = (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p));\n\n// foldr :: ((a, b) -> b, b, List a) -> b\nconst foldr = (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)));\n\n// toArray :: List a -> [a]\nconst toArray = p => foldr((x, y) => [x, ...y], [], p);\n\n// reverse :: List a -> List a\nconst reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));\n\n// map :: ((a -> b), List a) -> List b\nconst map = (f, p) => foldr((x, y) => prepend(f(x), y), empty, p);\n\n// filter :: ((a -> Boolean), List a) -> List a\nconst filter = (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p);\n\n// takeWhile :: ((a -> Boolean), List a) -> List a\nconst takeWhile = (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty;\n\n// zip :: (List a, List b) -> List [a, b]\nconst zip = (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)));\n\n\nconst listWrapper = p => {\n    const wrapped = fn => (...args) => listWrapper(fn(...args));\n\n    return ({\n        map: f => wrapped(map)(f, p),\n\n        filter: f => wrapped(filter)(f, p),\n\n        print: () => (foldl((z, x) => console.log(x), empty, p), listWrapper(p)),\n\n        foldl: (f, z) => foldl(f, z, p),\n\n        foldr: (f, z) => foldr(f, z, p),\n\n        toArray: () => toArray(p),\n\n        concat: r => wrapped(concat)(p, r.getPairContext()),\n\n        mconcat: l => wrapped(concat)(p, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"]((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty))(l).getPairContext()),\n\n        takeWhile: f => wrapped(takeWhile)(f, p),\n\n        zip: r => wrapped(zip)(p, r.getPairContext()),\n\n        reverse: () => wrapped(reverse)(p),\n\n        getPairContext: () => p,\n    });\n};\n\n\nconst guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? f(args[0]) : f([]);\n\nconst list = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](listWrapper, guardFromArray(fromArray));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n//# sourceURL=webpack://R/./source/list.js?");

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

/***/ "./source/pipeline.js":
/*!****************************!*\
  !*** ./source/pipeline.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\n *  with a mapping A -> C and type f | g  = g(f(x)) \n * @signature\n *  pipeline :: (a -> b, b -> c, ... , x -> y, y -> z) -> a -> z\n * @example\n *  add5 :: Number -> Number\n *  const add5 = x => x + 5;\n *\n *  mul50 :: Number -> Number\n *  const mul50 = x => x * 50;\n *\n *  mul50AndAdd5 :: Number -> Number\n *  const mul50AndAdd5 = pipeline(mul50, add5) == add5(mul50)\n *\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\n *  \n */\n\n\n\n\nconst pipelineTwo = (f, g) => x => g(f(x));\n\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\n\n\n//# sourceURL=webpack://R/./source/pipeline.js?");

/***/ }),

/***/ "./source/pipelineM.js":
/*!*****************************!*\
  !*** ./source/pipelineM.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\r\n * @description\r\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\r\n *  with a mapping A -> C and type f | g  = g(f(x)) \r\n * @signature\r\n *  pipeline :: (a -> b, b -> c, ... , x -> y, y -> z) -> a -> z\r\n * @example\r\n *  add5 :: Number -> Number\r\n *  const add5 = x => x + 5;\r\n *\r\n *  mul50 :: Number -> Number\r\n *  const mul50 = x => x * 50;\r\n *\r\n *  mul50AndAdd5 :: Number -> Number\r\n *  const mul50AndAdd5 = pipeline(mul50, add5) == add5(mul50)\r\n *\r\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\r\n *  \r\n */\r\n\r\n\r\n\r\n\r\nconst pipelineTwo = (f, g) => (...args) => g(f(...args));\r\n\r\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\r\n\n\n//# sourceURL=webpack://R/./source/pipelineM.js?");

/***/ }),

/***/ "./source/private/twoParameter.js":
/*!****************************************!*\
  !*** ./source/private/twoParameter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst twoParameter = fn => (x, y) => fn(x, y);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (twoParameter);\n\n//# sourceURL=webpack://R/./source/private/twoParameter.js?");

/***/ }),

/***/ "./source/range.js":
/*!*************************!*\
  !*** ./source/range.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Merges two arrays. Returns a new array.\n *  Same behaviour as Array.prototype.concat except array must be passed explicitly\n * @signature\n *  concat :: [a] -> [b] -> [a, b]\n *  concat :: ([a], [b]) -> [a, b] \n * @example\n * \n * \n */\n\n\n\n\nconst range = (start, stop, step = (stop - start) < 0 ? -1 : 1) =>\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"map\"])((x, i) => start + i * step)(Array(Math.ceil((stop - start) / step)).fill(0));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(range));\n\n\n\n//# sourceURL=webpack://R/./source/range.js?");

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