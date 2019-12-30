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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\n * @description\n *  Adds two values. op (+)\n * @signature\n *  add :: Number -> Number -> Number\n *  add :: (Number, Number) -> Number     \n * @example\n *  let result = add(2, 5);  //=> 7\n *  let result = add(2)(5);  //=> 7\n */\n\n\n\nconst add = (x, y) => x + y;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(add));\n\n//# sourceURL=webpack://r/./source/add.js?");

/***/ }),

/***/ "./source/binaryOp.js":
/*!****************************!*\
  !*** ./source/binaryOp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\n * @description\n *  Performs a binary Operation between to arguments. Set{\"+\", \"-\", \"/\", \"*\", \"=\", \">\", \"<\"}\n * @signature\n *  binaryOp :: String -> Number -> Number -> Number | Boolean\n *  binaryOp :: (String, Number, Number) -> Number | Boolean\n * @example\n *  let add = binaryOp(\"+\") //=> Function add\n *  let result = add(2)(19) //=> 21\n * \n *  let higherThanFive = binaryOp(\"<\")(5) //=> Function y => 5 < y\n *  let result = higherThanFive(6); //=> True\n * \n *  let result = binaryOp(\"*\")(2)(5) //=> 10\n * \n * \n */\n\n\n\n// Default. Implementation utilizing switch block statement\nconst switchImplementation = (operator, y, x) => {\n    switch(operator) {\n        case \"+\": return x + y;\n        case \"-\": return x - y;\n        case \"/\": return x / y;\n        case \"*\": return x * y;\n        case \"=\": return x === y;\n        case \">\": return x > y;\n        case \"<\": return x < y;\n    }\n};\n\n// Implementation utilizing if statement\nconst ifImplementation = (operator, y, x) => {\n    if (operator === \"+\") return x + y;\n    else if (operator === \"-\") return x - y;\n    else if (operator === \"/\") return x / y;\n    else if (operator === \"*\") return x * y;\n    else if (operator === \"=\") return x === y;\n    else if (operator === \">\") return x > y;\n    else if (operator === \"<\") return x < y;\n};\n\n\nconst binaryOp = switchImplementation;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(binaryOp));\n\n\n\n//# sourceURL=webpack://r/./source/binaryOp.js?");

/***/ }),

/***/ "./source/chain.js":
/*!*************************!*\
  !*** ./source/chain.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Chain operation (aka flatMap). Feeds a function of signature a -> M b to the array monad\n * @signature\n *  chain :: ([a], a -> [b]) -> [b]\n *  chain :: [a] -> (a -> [b]) -> [b]\n * @example\n *  const a = chain([1, 2])(x => [x, 1, x, 2]);\n *  //-> [ 1, 1, 1, 2, 2, 1, 2, 2 ]\n * \n *  [1, 2].chain(x => [x, 0]);\n *  //-> [1, 0, 2, 0]\n */\n\n\n\nconst chain1 = f => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"join\"], Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(f));\n\nconst chain2 = (m, f) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(f, m));\n\n\n// Polutes the array prototype object with the chain (flatMap) function * composeK can utilize the object context to run on arrays too *\nArray.prototype.chain = function (f) {\n    return chain2(this, f);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(chain2));\n\n\n//# sourceURL=webpack://r/./source/chain.js?");

/***/ }),

/***/ "./source/compose.js":
/*!***************************!*\
  !*** ./source/compose.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\n *  with a mapping A -> C and type g ◦ f = g(f(x)) \n * @signature\n *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z \n * @example\n *  add5 :: Number -> Number\n *  const add5 = x => x + 5;\n *\n *  mul50 :: Number -> Number\n *  const mul50 = x => x * 50;\n *\n *  mul50AndAdd5 :: Number -> Number\n *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)\n *\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\n *  \n */\n\n\n\n\nconst composeTwo = (g, f) => x => g(f(x));\n\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\n\n\n//# sourceURL=webpack://r/./source/compose.js?");

/***/ }),

/***/ "./source/composeK.js":
/*!****************************!*\
  !*** ./source/composeK.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Kleisli function composition. For f: A -> M B, g: B -> M C kleisli function composition produces a new function\n *  with a mapping A -> M C and type g <=< f = x => f(x).chain(g)\n * @signature\n *  composeK :: (y -> m z, x -> m y, ..., b -> m c, a -> m b) -> a -> m z \n * @example\n *  const m = [1, 2, 3, 4];\n *  \n *  const f = composeK(x => [1, 2, 3], x => [0, 0]);\n * \n *  chain(m)(f);\n *  //-> [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3 ]\n *  \n */\n\n\n\n\nconst composeKTwo = (g, f) => x => f(x).chain(g);\n\nconst composeKNleft = (...args) => args.reduce(composeKTwo);\n\n// must provide a pure (aka return) function implementation\n// const composeKNleft2 = (...args) => foldl(composeKTwo)(pure)(args);\n\n// must provide a pure (aka return) function implementation\n// const composeKNright = (...args) => foldr(composeKTwo)(pure)(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeKNleft);\n\n\n//# sourceURL=webpack://r/./source/composeK.js?");

/***/ }),

/***/ "./source/composeM.js":
/*!****************************!*\
  !*** ./source/composeM.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function composition. For f: A -> B, g: B -> C function composition produces a new function\n *  with a mapping A -> C and type g ◦ f = g(f(x)) \n * @signature\n *  composeM :: (y -> z, x -> y, ..., b -> c, ...[a] -> b) -> ...[a] -> z \n * @example\n *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);\n *  \n *  const mul5 = x => x * 5;\n * \n *  const addArgsAndMul5 = composeM(mul5, add(0));\n *  \n *  addArgsAndMul5(1, 2, 3, 4, 5);\n *  //-> 75\n *  \n */\n\n\n\n\nconst composeTwo = (g, f) => (...args) => g(f(...args));\n\nconst composeNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst composeNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(composeTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (composeNleft);\n\n\n//# sourceURL=webpack://r/./source/composeM.js?");

/***/ }),

/***/ "./source/concat.js":
/*!**************************!*\
  !*** ./source/concat.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_twoParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/twoParameter */ \"./source/private/twoParameter.js\");\n/**\n * @description\n *  Merges two arrays. Returns a new array.\n *  Same behaviour as Array.prototype.concat except array must be passed explicitly\n * @signature\n *  concat :: [a] -> [b] -> [a, b]\n *  concat :: ([a], [b]) -> [a, b] \n * @example\n *  concat([1, 2, 3], [4, 5, 6]) = [1, 2, 3, 4, 5, 6];\n *  concat([1, 2, 3])([4, 5, 6]) = [1, 2, 3, 4, 5, 6];\n * \n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_private_twoParameter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.concat))));\n\n\n//# sourceURL=webpack://r/./source/concat.js?");

/***/ }),

/***/ "./source/curry.js":
/*!*************************!*\
  !*** ./source/curry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Converting a multivariable function into a stepwise sequence of unary functions\n * @signature\n *  curry :: ((a1, a2, a3, ..., an) -> b, Number?) -> a1 -> a2 -> a3 -> ... -> an -> b\n * @example\n *  const add = (x, y, w, z) => x + y + w + z;\n *  \n *  const curriedAdd = curry(add);\n *  const a = curriedAdd(1);\n *  //-> (y, w, z) => 1 + y + w + z\n *  const b = a(2)(3);\n *  //-> z => 1 + 2 + 3 + z\n *  const c = b(4);\n *  //-> 1 + 2 + 3 + 4 = 10\n */\n\n\n// Implementation utilizing Function.prototype.bind method\nconst curryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : x => curryWithBind(fn.bind(null, x), argLength - 1);\n\n// Default implementation via recursion and closures\nconst curryRecursive = (fn, argLength = fn.length) => {\n    const innerCurry = (...args) => y => (argLength <= args.length + 1 ? fn : innerCurry)(...args, y);\n    return innerCurry();\n};\n\nconst curry = curryRecursive;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (curry);\n\n//# sourceURL=webpack://r/./source/curry.js?");

/***/ }),

/***/ "./source/divide.js":
/*!**************************!*\
  !*** ./source/divide.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\n * @description\n *  Divides second parameter by first one. op (/)\n * @signature\n *  divide :: Number -> Number -> Number\n *  divide :: (Number, Number) -> Number\n * @example\n *  let result = divide(2, 5);  //=> 0.4\n *  let result = divide(2)(5);  //=> 0.4\n */\n\n\n\nconst divide = (x, y) => x / y;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(divide));\n\n\n//# sourceURL=webpack://r/./source/divide.js?");

/***/ }),

/***/ "./source/every.js":
/*!*************************!*\
  !*** ./source/every.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Applies a predicate function to all the elements of the array. Returns true if for every element x, Predicate(x) -> True. Otherwise return false.\n *  Same behaviour as Array.prototype.every except array must be passed explicitly\n * @signature\n *  every :: (a -> Boolean) -> [a] -> Boolean\n *  every :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) && Predicate(e2) && ... && Predicate(en)\n * @example\n *  const a = [1, 2, 3, 4];\n *  \n *  every(x => x > 0, a);\n *  //-> True\n *  every(x => x > 0)(a);\n *  //-> True\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.every))));\n\n\n//# sourceURL=webpack://r/./source/every.js?");

/***/ }),

/***/ "./source/exporter.js":
/*!****************************!*\
  !*** ./source/exporter.js ***!
  \****************************/
/*! exports provided: add, subtract, multiply, divide, binaryOp, curry, pcurry, unmethod, flip, map, filter, reduce, reduceRight, identity, uncurry, every, some, concat, foldl, foldr, join, chain, compose, range, pipe, composeM, composeK, pipeM, pair, list, lpair, stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./source/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./source/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply */ \"./source/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divide */ \"./source/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _binaryOp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binaryOp */ \"./source/binaryOp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binaryOp\", function() { return _binaryOp__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry */ \"./source/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pcurry\", function() { return _partialCurry__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _unmethodify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unmethodify */ \"./source/unmethodify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unmethod\", function() { return _unmethodify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flip */ \"./source/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map */ \"./source/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter */ \"./source/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reduce */ \"./source/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reduceRight */ \"./source/reduceRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceRight\", function() { return _reduceRight__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./identity */ \"./source/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _uncurry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uncurry */ \"./source/uncurry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uncurry\", function() { return _uncurry__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _every__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./every */ \"./source/every.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _every__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./some */ \"./source/some.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _some__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./concat */ \"./source/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _foldLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./foldLeft */ \"./source/foldLeft.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return _foldLeft__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _foldRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./foldRight */ \"./source/foldRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return _foldRight__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./join */ \"./source/join.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return _join__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chain */ \"./source/chain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return _chain__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./compose */ \"./source/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./range */ \"./source/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipeline */ \"./source/pipeline.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipe\", function() { return _pipeline__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _composeM__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./composeM */ \"./source/composeM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeM\", function() { return _composeM__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./composeK */ \"./source/composeK.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeK\", function() { return _composeK__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _pipelineM__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipelineM */ \"./source/pipelineM.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipeM\", function() { return _pipelineM__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _pair__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pair */ \"./source/pair.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pair\", function() { return _pair__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./list */ \"./source/list.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return _list__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _lazypair__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lazypair */ \"./source/lazypair.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lpair\", function() { return _lazypair__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stream */ \"./source/stream.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stream\", function() { return _stream__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://r/./source/exporter.js?");

/***/ }),

/***/ "./source/filter.js":
/*!**************************!*\
  !*** ./source/filter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Applies a predicate function to all the elements of the array. Returns a new array with all elements x for which Predicate(x) -> True.\n *  Same behaviour as Array.prototype.filter except array must be passed explicitly\n * @signature\n *  filter :: (a -> Boolean) -> [a] -> [a]\n * @example\n *  const a = [1, 2, 3, 4];\n *  filter(x => x > 1, a);\n *  //-> [2, 3, 4]\n *  filter(x => x < 2)(a);\n *  //-> [1]\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.filter))));\n\n\n//# sourceURL=webpack://r/./source/filter.js?");

/***/ }),

/***/ "./source/flip.js":
/*!************************!*\
  !*** ./source/flip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Inverts parameter passing to a function.\n * @signature\n *  ((a, b) -> c) -> ((b, a) -> c)\n * @example\n *  const greet = (fname, lname) => `Hello mr ${fname}. Hello again mr ${lname}`;\n *  greet(\"chicken\", \"turtle\");\n *  //-> \"Hello mr chicken. Hello again mr turtle\"\n *  flip(greet)(\"chicken\", \"turtle\");\n *  //-> \"Hello mr turtle. Hello again mr chicken\"\n */\n\n\nconst flip = fn => (x, y) => fn(y, x);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\n\n\n//# sourceURL=webpack://r/./source/flip.js?");

/***/ }),

/***/ "./source/foldLeft.js":
/*!****************************!*\
  !*** ./source/foldLeft.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Gathering values of an Array through a reducer function. Left-Folding\n * @signature\n *  foldLeft :: ((b, a) -> b) -> b -> [a] -> b || (b -> a -> b) -> b -> [a] -> b\n * @example\n *  const a = [1, 2, 3, 4];\n *  const add = (x, y) => x + y;\n *  foldLeft(add, 0, a);\n *  //-> 10\n *\n */\n\n\n\nconst foldLeft = (f, z, [first, ...rest]) => first === undefined ?\n    z :\n    foldLeft(f, Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(z)(first), rest);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldLeft));\n\n\n//# sourceURL=webpack://r/./source/foldLeft.js?");

/***/ }),

/***/ "./source/foldRight.js":
/*!*****************************!*\
  !*** ./source/foldRight.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Gathering values of an Array through a reducer function. Right-Folding\n * @signature\n *  foldRight :: ((b, a) -> a) -> a -> [b] -> a || (b -> a -> a) -> a -> [b] -> a\n * @example\n *  const a = [1, 2, 3, 4];\n *  const add = (x, y) => x + y;\n *  foldRight(add, 0, a);\n *  //-> 10\n *\n */\n\n\n\nconst foldRight = (f, z, [first, ...rest]) => first === undefined ?\n    z :\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(f)(first)(foldRight(f, z, rest));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(foldRight));\n\n\n//# sourceURL=webpack://r/./source/foldRight.js?");

/***/ }),

/***/ "./source/identity.js":
/*!****************************!*\
  !*** ./source/identity.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Identity function. Returns the first passed argument\n * @signature\n *  a -> a\n * @example\n *  let result = identity(3);\n *  //-> 3\n */\n\n\nconst identity = x => x;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (identity);\n\n//# sourceURL=webpack://r/./source/identity.js?");

/***/ }),

/***/ "./source/join.js":
/*!************************!*\
  !*** ./source/join.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Flattens one level an array data structure.\n * @signature\n *  join :: [[a]] -> [a]\n * @example\n *  join([[1, 2, 3], [], [4, 5], [6]]);\n *  //-> [ 1, 2, 3, 4, 5, 6 ]\n * \n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([]));\n\n\n//# sourceURL=webpack://r/./source/join.js?");

/***/ }),

/***/ "./source/lazypair.js":
/*!****************************!*\
  !*** ./source/lazypair.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_lazypair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/lazypair */ \"./source/private/lazypair.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_private_lazypair__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://r/./source/lazypair.js?");

/***/ }),

/***/ "./source/list.js":
/*!************************!*\
  !*** ./source/list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_pair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/pair */ \"./source/private/pair.js\");\n/**\n * @description\n *  Implements a list interface through a listWrapper object. Utilizes a pair data type (cons cell) for the creation\n *  of a recursively defined linked list.\n * \n *  For big number of elements, you may end with stack overflow error because all the implementations are using recursion.\n *  Use streams (with the tramboline helper) if u want to play with more elements\n * @signature\n *  list :: ([a] | (a, a, a, a, ...a)) -> List a\n * @example\n *  const a = list([1, 2, 3, 4]) // === list(1, 2, 3, 4) | cons(1, cons(2, cons(3, cons(4, empty))))\n *  \n *  Mapping\n * \n *  You can map the list with a method call:\n * \n *  a.map(x => x + 5);\n *  //-> cons(6, cons(7, cons(8, cons(9, empty))))\n * \n *  or point-wise call:\n *  \n *  list.map(x => x + 5, a);\n *  // -> cons(6, cons(7, cons(8, cons(9, empty))))\n *  \n *  or curried alternative:\n *  \n *  list.map(x => x + y)(a)\n *  // -> cons(6, cons(7, cons(8, cons(9, empty))))\n * \n *  Zipping\n * \n *  const b = list([1, 2, 3, 4]);  // === list(1, 2, 3, 4) | cons(1, cons(2, cons(3, cons(4, empty))))\n *  const c = list([5, 6, 7, 8]);  // === list(5, 6, 7, 8) | cons(5, cons(6, cons(7, cons(8, empty))))\n * \n *  b.zip(c);\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\n * \n *  or point-wise call:\n *  \n *  list.zip(b, c);\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\n *  \n *  or curried alternative:\n *  \n *  list.zip(b)(c);\n *  //-> cons([1, 5], cons([2, 6], cons([3, 7], cons([4, 8], empty))))\n */\n\n\n\n\n\n\nconst listWrapper = p => {\n    const wrapped = fn => (...args) => listWrapper(fn(...args));\n    \n    return ({\n        // map :: List a ⤳ (a -> b) -> List a\n        map: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(f, p),\n\n        // filter :: List a ⤳ (a -> Boolean) -> List a\n        filter: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(f, p),\n\n        // forEach :: List a ⤳ (a -> ()) -> List a\n        forEach: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"forEach\"])(f, p),\n\n        // print :: List a ⤳ ((), Stream a)\n        print: () => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"forEach\"])(x => console.log(x), p),\n\n        // foldl :: List a ⤳ ((b, a) -> b, b) -> b\n        foldl: (f, z) => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldl\"])(f, z, p),\n\n        // foldr :: List a ⤳ ((a, b) -> b, b) -> b\n        foldr: (f, z) => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])(f, z, p),\n\n        // toArray :: List a ⤳ [a]\n        toArray: () => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"toArray\"])(p),\n\n        toStream: () => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"stream\"].fromList(listWrapper(p)),\n\n        // concat :: List a ⤳ List a -> List a\n        concat: r => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, r.getPairContext()),\n\n        // mconcat :: List a ⤳ [List a] -> List a\n        mconcat: l => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"]((x, y) => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getPairContext(), y.getPairContext()), listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]))(l).getPairContext()),\n\n        // takeWhile :: List a ⤳ (a -> Boolean) -> List a\n        takeWhile: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"takeWhile\"])(f, p),\n\n        // zip :: List a ⤳ List b -> List [a, b]\n        zip: r => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"zip\"])(p, r.getPairContext()),\n\n        // reverse :: List a ⤳ List a\n        reverse: () => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"reverse\"])(p),\n\n        // join :: List (List a) ⤳ List a\n        join: () => Object(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])((x, y) => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getPairContext(), y.getPairContext()), listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]), p),\n\n        // chain :: List a ⤳ (a -> List b) -> List b\n        chain: f => wrapped(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"chain\"])(p, x => f(x).getPairContext()),\n\n        // getPairContext :: List a ⤳ Pair a\n        getPairContext: () => p,\n    });\n};\n\n\nconst guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? (Array.isArray(args[0]) ? f(args[0]) : f([args[0]])) : f([])\n\nconst list = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](listWrapper, guardFromArray(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"fromArray\"]));\n\n// ListWrapper :: Pair a -> List a\nlist.listWrapper = p => listWrapper(p);\n\n// fromArray :: [a] -> List a\nlist.fromArray = a => list(a);\n\n// toStream :: List a -> Stream a\nlist.toStream = p => p.toStream();\n\n// map :: ((a -> b), List a) -> List b\nlist.map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.map(f)\n);\n\n// filter :: ((a -> Boolean), List a) -> List a\nlist.filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.filter(f)\n);\n\n// forEach :: (a -> (), List a) -> List a\nlist.forEach = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.forEach(f)\n);\n\n// logger :: (List a) -> ((), List a)\nlist.print = p => p.print();\n\n// foldl :: ((b, a) -> b, b, List a) -> b\nlist.foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p.foldl(f, z)\n);\n\n// foldr :: ((a, b) -> b, b, List a) -> b\nlist.foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p.foldr(f, z)\n);\n\n// toArray :: List a -> [a]\nlist.toArray = p => p.toArray();\n\n// concat :: (List a, List a) -> List a\nlist.concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p1, p2) => p1.concat(p2)\n);\n\n// mconcat :: [List a] -> List a\nlist.mconcat = l => listWrapper(_private_pair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]).mconcat(l);\n\n// takeWhile :: ((a -> Boolean), List a) -> List a\nlist.takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.takeWhile(f)\n);\n\n// zip :: (List a, List b) -> List [a, b]\nlist.zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p, r) => p.zip(r)\n);\n\n// reverse :: List a -> List a\nlist.reverse = p => p.reverse();\n\n// join :: List (List a) -> List a\nlist.join = p => p.join();\n\n// chain :: (List a, (a -> List b)) -> List b\nlist.chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p, f) => p.chain(f)\n);\n\n// getPairContext :: List a -> Pair a\nlist.getPairContext = p => p.getPairContext();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n//# sourceURL=webpack://r/./source/list.js?");

/***/ }),

/***/ "./source/map.js":
/*!***********************!*\
  !*** ./source/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Applies to every element of the array the function a -> b. Returns a new array.\n *  Same behaviour as Array.prototype.map except array must be passed explicitly\n * @signature\n *  map :: (a -> b) -> [a] -> [b]\n * @example\n *  const a = [1, 2, 3, 4];\n *  map(x => x + 1, a);\n *  //-> [2, 3, 4, 5]\n *  map(x => x === 1)(a);\n *  //-> [true, false, false, false]\n * \n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.map))));\n\n\n//# sourceURL=webpack://r/./source/map.js?");

/***/ }),

/***/ "./source/multiply.js":
/*!****************************!*\
  !*** ./source/multiply.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\n * @description\n *  Multiplies first parameter, second parameter times . op (*)\n * @signature\n *  multiply :: Number -> Number -> Number\n *  multiply :: (Number, Number) -> Number\n * @example\n *  let result = multiply(2, 5);  //=> 10\n *  let result = multiply(2)(5);  //=> 10 \n */\n\n\n\nconst multiply = (x, y) => x * y;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(multiply));\n\n//# sourceURL=webpack://r/./source/multiply.js?");

/***/ }),

/***/ "./source/pair.js":
/*!************************!*\
  !*** ./source/pair.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/pair */ \"./source/private/pair.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_private_pair__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://r/./source/pair.js?");

/***/ }),

/***/ "./source/partialCurry.js":
/*!********************************!*\
  !*** ./source/partialCurry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Converting a multivariable function into a stepwise sequence of partially applied functions\n * @signature\n *  pcurry :: ((a1, a2, a3, ..., an) -> b, Number?) -> (a1 -> a2 -> a3 -> ... -> an -> b) | ((a1, a2) -> a3 -> ... -> an -> b) | ((a1, a2, a3) -> ... -> an -> b) | ... | (a1, a2, ..., an) -> b\n * @example\n *  const add = (x, y, w, z) => x + y + w + z;\n *  \n *  const curriedAdd = pcurry(add);\n *  const a = curriedAdd(1);\n *  //-> (y, w, z) => 1 + y + w + z\n *  const b = a(2, 3);\n *  //-> z => 1 + 2 + 3 + z\n *  const c = b(4);\n *  //-> 1 + 2 + 3 + 4 = 10\n *  or\n *  curriedAdd(1, 2, 3, 4);\n *  //-> 10\n * \n *  For functions that have unspecified number of arguments you can provide them explictly\n * \n *  const add = (...args) => args.reduce((x, y) => x + y, 0, args);\n *  curriedAdd = pcurry(add, 3);\n *  curriedAdd(1, 2);\n *  //-> Function\n *  curriedAdd(1, 2, 3);\n *  //-> 6 \n */\n\n\n\n// Implementation utilizing Function.prototype.bind method\nconst partialCurryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : (...args) => partialCurryWithBind(fn.bind(null, ...args), argLength - 1);\n\n// Default implementation via recursion and closures\nconst partialCurryRecursive = (fn, argLength = fn.length) => {\n    const innerCurry = (...args1) => (...args2) => (argLength <= args1.length + args2.length ? fn : innerCurry)(...args1, ...args2);\n    return innerCurry();\n};\n\nconst pcurry = partialCurryRecursive;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pcurry);\n\n//# sourceURL=webpack://r/./source/partialCurry.js?");

/***/ }),

/***/ "./source/pipeline.js":
/*!****************************!*\
  !*** ./source/pipeline.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\n *  with a mapping A -> C and type f | g  = g(f(x)) \n * @signature\n *  pipeline :: (a -> b, b -> c, ... , x -> y, y -> z) -> a -> z\n * @example\n *  add5 :: Number -> Number\n *  const add5 = x => x + 5;\n *\n *  mul50 :: Number -> Number\n *  const mul50 = x => x * 50;\n *\n *  mul50AndAdd5 :: Number -> Number\n *  const mul50AndAdd5 = pipeline(mul50, add5) == add5(mul50)\n *\n *  mul50AndAdd5(10) = add5(mul50(10)) = 505\n *  \n */\n\n\n\n\nconst pipelineTwo = (f, g) => x => g(f(x));\n\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\n\n\n//# sourceURL=webpack://r/./source/pipeline.js?");

/***/ }),

/***/ "./source/pipelineM.js":
/*!*****************************!*\
  !*** ./source/pipelineM.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function\n *  with a mapping A -> C and type f | g  = g(f(x)) \n * @signature\n *  pipelineM :: (...[a] -> b, b -> c, ... , x -> y, y -> z) -> ...[a] -> z\n * @example\n *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);\n *  \n *  const mul5 = x => x * 5;\n * \n *  const addArgsAndMul5 = pipelineM(add(0), mul5);\n *  \n *  addArgsAndMul5(1, 2, 3, 4, 5);\n *  \n */\n\n\n\n\nconst pipelineTwo = (f, g) => (...args) => g(f(...args));\n\nconst pipelineNleft = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldl\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\nconst pipelineNright = (...args) => Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"])(pipelineTwo)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"])(args);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pipelineNleft);\n\n\n//# sourceURL=webpack://r/./source/pipelineM.js?");

/***/ }),

/***/ "./source/private/lazypair.js":
/*!************************************!*\
  !*** ./source/private/lazypair.js ***!
  \************************************/
/*! exports provided: empty, delay, delayv, prepend, fromArray, fromPair, toPair, concat, mconcat, foldl, foldr, toArray, map, filter, lfilter, takeWhile, zip, join, chain, tramboline, print, take, repeat, range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return empty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delay\", function() { return delay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delayv\", function() { return delayv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return prepend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromArray\", function() { return fromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromPair\", function() { return fromPair; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toPair\", function() { return toPair; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mconcat\", function() { return mconcat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return foldl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return foldr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toArray\", function() { return toArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lfilter\", function() { return lfilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"takeWhile\", function() { return takeWhile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return zip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return chain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tramboline\", function() { return tramboline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"take\", function() { return take; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repeat\", function() { return repeat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return range; });\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Implements a lazily evaluated cons cell chain simulating a stream. Provides the core implementation for the streamWrapper object.\n *  You can use this implementation since it is exported, but better use the object alternative, stream.\n * \n *  ***\n *  You have to procceed with caution when you are consuming a lazy structure or you will end with stack overflow. \n *  This happens because all the implementation utilizes a recursive approach. If you want to consume a lazy pair without errors,\n *  you can use the unpure tramboline function helper.\n *  ***\n * @signature\n *  lpair a = () => (empty | (a, lpair a))\n * @example\n *  Eg. You can map the lpair structure\n *  const a = fromArray([1, 2, 3, 4]); //-> () => pair(1)(() => pair(2)(() => pair(3)(() => pair(4)(() => empty))))\n *\n *  const b = map(x => x + 5)(a);\n *  //-> () => pair(6)(() => pair(7)(() => pair(8)(() => pair(9)(() => empty))))\n *  // This is the lazy presentation. The structure isn't evaluated until its needed by a consumer\n *\n *  \n *  You can produce infinite lpair\n * \n *  const c = range(1, infinite);\n *  \n *  Filter them lazily and take the first n results\n *  \n *  const d = lfilter(x => x % 2 === 0)(c);\n *  \n *  const e = take(100)(d);\n *  //-> Consumes the lazy chain of pairs. Creates a new lazy pair structure. Take is greedy, use with caution\n * \n *  toArray(e);\n *  //-> [2, 4, 6, ..., 200]\n *  \n *\n */\n\n\n\n\n\nconst pair = x => y => s => s(x)(y);\n\nconst K = x => y => x;\n\nconst I = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n\nconst car = p => p(K);\n\nconst cdr = p => p(K(I));\n\nconst empty = null;\n\nconst prepend = (x, y) => pair(x)(y);\n\nconst delay = fn => (...args) => () => fn(...args);\n\nconst delayv = val => () => val;\n\n\n\n\n\n// foldr :: ((a, b) -> b, b, Lazy Pair a) -> b\nconst foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => {\n        const evaluated = p();\n        return evaluated === empty ? z : f(car(evaluated), foldr(f, z, cdr(evaluated)));\n    }\n);\n\n// foldl :: ((b, a) -> b, b, Lazy Pair a) -> b\nconst foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => {\n        const evaluated = p();\n        return evaluated === empty ? z : foldl(f, f(z, car(evaluated)), cdr(evaluated));\n    }\n);\n\n// fromArray :: [a] -> Lazy Pair a\nconst fromArray = delay(\n    ([first, ...rest]) => first === undefined ? empty : prepend(first, fromArray(rest))\n);\n\n// fromPair :: Pair a -> Lazy Pair a\nconst fromPair = delay(\n    p => p === empty ? empty : prepend(car(p), fromPair(cdr(p)))\n);\n\n// toArray :: Lazy Pair a -> [a]   *toArray function is greedy, careful stack overflow*\nconst toArray = p => foldr((x, y) => [x, ...y], [], p);\n\n// toPair :: Lazy Pair a -> Pair a   *toPair function is greedy, careful stack overflow*\nconst toPair = p => foldr(prepend, empty, p);\n\n// map :: ((a -> b), Lazy Pair a) -> Lazy Pair b\nconst map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    delay(\n        (f, p) => {\n            const evaluated = p();\n            return evaluated === empty ? empty : prepend(f(car(evaluated)), map(f, cdr(evaluated)));\n        }\n    ), 2\n);\n\n// filter :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a  *filter function is greedy, careful stack overflow*\nconst filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => {\n        const innerFilter = (f, p) => {\n            const evaluated = p();\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), innerFilter(f, cdr(evaluated))) : innerFilter(f, cdr(evaluated))\n        };\n\n        // return fromArray(r.pair.toArray(innerFilter(f, p)));\n        return fromPair(innerFilter(f, p));\n    }\n);\n\nconst lfilter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    delay(\n        (f, p) => {\n            const evaluated = p();\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), lfilter(f, cdr(evaluated))) : lfilter(f, cdr(evaluated))()\n        }\n    ), 2\n);\n\nconst range = delay(\n    (start, stop, step = (stop - start) < 0 ? -1 : 1) => {\n        return step >= 0 ? (start >= stop ? empty : prepend(start, range(start + step, stop, step)))\n                        : (start <= stop) ? empty : prepend(start, range(start + step, stop, step))\n    }\n);\n\n// takeWhile :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a\nconst takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    delay(\n        (f, p) => {\n            const evaluated = p();\n            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), takeWhile(f, cdr(evaluated))) : empty\n        }\n    ), 2\n);\n\n// repeat :: a -> Lazy Pair a\nconst repeat = delay(\n    x => prepend(x, repeat(x))\n);\n\n// take :: (Number, Lazy Pair a) -> Lazy Pair a  *take function is greedy, careful stack overflow*\nconst take = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (n, p) => {\n        const innerTake = (n, p) => {\n            const evaluated = p();\n            return n < 1 || evaluated === empty ? empty : prepend(car(evaluated), innerTake(n - 1, cdr(evaluated)));\n        };\n\n        return fromPair(innerTake(n, p));\n    }\n);\n\n// concat :: (Lazy Pair a, Lazy Pair a) -> Lazy Pair a\nconst concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    delay(\n        (p1, p2) => {\n            const evaluated = p1();\n            return evaluated === empty ? p2() : prepend(car(evaluated), concat(cdr(evaluated), p2))\n        }\n    ), 2\n);\n\n// mconcat :: [Lazy Pair a] -> Lazy Pair a\nconst mconcat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](concat)(delayv(empty));\n\n// zip :: (Lazy Pair a, Lazy Pair b) -> Lazy Pair [a, b]\nconst zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    delay(\n        (p1, p2) => {\n            const evaluated1 = p1();\n            const evaluated2 = p2();\n            return evaluated1 === empty || evaluated2 === empty ? empty : prepend([car(evaluated1), car(evaluated2)], zip(cdr(evaluated1), cdr(evaluated2)));\n        }\n    ), 2\n);\n\n// join :: Lazy Pair (Lazy Pair a) -> Lazy Pair a\nconst join = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](foldr)(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](concat, 2), delayv(empty));\n\n// chain :: (Lazy Pair a, (a -> Lazy Pair b)) -> Lazy Pair b\nconst chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"]((p, f) => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](join, map(f))(p));\n\n\n// tramboline :: (a -> (), Lazy Pair a) -> Lazy Pair a *tramboline greedy implementation, Utilizes while loop because of TCO absence*\nconst tramboline = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => {\n        const init = p;\n        let evaluated;\n        while ((evaluated = p()) !== empty) {\n            f(car(evaluated));\n            p = cdr(evaluated);\n        }\n        return init;\n    }\n);\n\nconst print = tramboline(console.log.bind(console));\n\n\n\n//# sourceURL=webpack://r/./source/private/lazypair.js?");

/***/ }),

/***/ "./source/private/pair.js":
/*!********************************!*\
  !*** ./source/private/pair.js ***!
  \********************************/
/*! exports provided: empty, prepend, fromArray, concat, mconcat, foldl, foldr, toArray, reverse, map, filter, takeWhile, zip, join, chain, forEach, print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return empty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return prepend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromArray\", function() { return fromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mconcat\", function() { return mconcat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldl\", function() { return foldl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foldr\", function() { return foldr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toArray\", function() { return toArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return reverse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"takeWhile\", function() { return takeWhile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return zip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return join; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return chain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return forEach; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Implements a cons cell chain simulating a linked list. Provides the core implementation for the listWrapper object\n *  You can use this implementation since it is exported, but better use the object alternative, list\n * @signature\n *  pair a = empty | (a, pair a)\n *  pair ::  a -> pair a -> pair a \n * @example\n *  Eg. You can map a pair structure\n *  const a = fromArray([1, 2, 3, 4]); //-> pair(1)(pair(2)(pair(3)(pair(4)(empty))))\n *  \n *  const b = map(x => x + 5)(a);\n *  //-> pair(6)(pair(7)(pair(8)(pair(9)(empty))))\n *  \n *  You can fold it\n *  foldr((x, y) => x + y, 0, b);\n *  //-> 30\n *  \n *  Reverse it\n *  reverse(b);\n *  //-> pair(9)(pair(8)(pair(7)(pair(6)(empty))))\n * \n */ \n\n\n\n\n\n\nconst pair = x => y => s => s(x)(y);\n\nconst K = x => y => x;\n\nconst I = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n\nconst car = p => p(K);\n\nconst cdr = p => p(K(I));\n\nconst empty = null;\n\nconst prepend = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (x, y) => pair(x)(y)\n);\n\n// fromArray :: [a] -> Pair a\nconst fromArray = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](prepend)(empty);\n\n// concat :: (Pair a, Pair a) -> Pair a\nconst concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2))\n);\n\n// mconcat :: [Pair a] -> Pair a\nconst mconcat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"](concat)(empty);\n\n// foldl :: ((b, a) -> b, b, Pair a) -> b\nconst foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p))\n);\n\n// foldr :: ((a, b) -> b, b, Pair a) -> b\nconst foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)))\n);\n\n// toArray :: Pair a -> [a]\nconst toArray = p => foldr((x, y) => [x, ...y], [], p);\n\n// reverse :: Pair a -> Pair a\nconst reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));\n\n// map :: ((a -> b), Pair a) -> Pair b\nconst map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    // (f, p) => foldr((x, y) => prepend(f(x), y), empty, p)\n    (f, p) => p === empty ? empty : prepend(f(car(p)), map(f, cdr(p))) // this implementation forces the evaluation of f(car(p))\n);\n\n// filter :: ((a -> Boolean), Pair a) -> Pair a\nconst filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    // (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p)\n    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), filter(f, cdr(p))) : filter(f, cdr(p))  // this implementation forces the evaluation of f(car(p))\n);\n\n// takeWhile :: ((a -> Boolean), Pair a) -> Pair a\nconst takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty\n);\n\n// zip :: (Pair a, Pair b) -> Pair [a, b]\nconst zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)))\n);\n\n// join :: Pair (Pair a) -> Pair a\nconst join = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](foldr)(concat, empty);\n\n// chain :: (Pair a, (a -> Pair b)) -> Pair b\nconst chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p, f) => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](join, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](map)(f))(p)\n);\n\n// forEach :: (a -> (), Pair a) -> Pair a\nconst forEach = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => (foldl((z, x) => f(x), empty, p), p)\n);\n\n// print :: (Pair a) -> ((), Pair a)\nconst print = p => forEach(x => console.log(x), p);\n\n\n\n\n//# sourceURL=webpack://r/./source/private/pair.js?");

/***/ }),

/***/ "./source/private/twoParameter.js":
/*!****************************************!*\
  !*** ./source/private/twoParameter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst twoParameter = fn => (x, y) => fn(x, y);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (twoParameter);\n\n//# sourceURL=webpack://r/./source/private/twoParameter.js?");

/***/ }),

/***/ "./source/range.js":
/*!*************************!*\
  !*** ./source/range.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Creates an array with integers in range of [x, y). Can utilize a step quantity\n * @signature\n *  range :: (Number, Number, Number?) -> [Number]\n * @example\n *  range(1, 5);\n *  //-> [1, 2, 3, 4]\n *  range(5, 1, -2)\n *  //-> [5, 3]\n */\n\n\n\n\nconst range = (start, stop, step = (stop - start) < 0 ? -1 : 1) =>\n    Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"map\"])((x, i) => start + i * step)(Array(Math.ceil((stop - start) / step)).fill(0));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(range));\n\n\n\n//# sourceURL=webpack://r/./source/range.js?");

/***/ }),

/***/ "./source/reduce.js":
/*!**************************!*\
  !*** ./source/reduce.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Same behaviour as Array.prototype.reduce except array must be passed explicitly\n * @signature\n *  reduce :: ((b, a) -> b) -> b -> [a] -> b\n * @example\n *  const a = [1, 2, 3, 4];\n *  const add = (x, y) => x + y;\n *  reduce(add, 0, a);\n *  //-> 10\n *\n */\n\n\n\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduce))));\n\n\n//# sourceURL=webpack://r/./source/reduce.js?");

/***/ }),

/***/ "./source/reduceRight.js":
/*!*******************************!*\
  !*** ./source/reduceRight.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Same behaviour as Array.prototype.reduceRight except array must be passed explicitly\n * @signature\n *  reduceRight :: ((b, a) -> b) -> b -> [a] -> b\n * @example\n *  const a = [1, 2, 3, 4];\n *  const add = (x, y) => x + y;\n *  reduceRight(add, 0, a);\n *  //-> 10\n *\n */\n\n\n\nconst flipThree = fn => (x, y, z) => fn(z, x, y);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(flipThree(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.reduceRight))));\n\n\n//# sourceURL=webpack://r/./source/reduceRight.js?");

/***/ }),

/***/ "./source/some.js":
/*!************************!*\
  !*** ./source/some.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/**\n * @description\n *  Applies a predicate function to all the elements of the array. Returns true if for at least one element x, Predicate(x) -> True. Otherwise returns false.\n *  Same behaviour as Array.prototype.some except array must be passed explicitly\n * @signature\n *  some :: (a -> Boolean) -> [a] -> Boolean\n *  some :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) || Predicate(e2) || ... || Predicate(en)\n * @example\n *  const a = [1, 2, 3, 4];\n *  \n *  some(x => x > 3, a);\n *  //-> True\n *  every(x => x > 4)(a);\n *  //-> False\n *\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"flip\"])(Object(_exporter__WEBPACK_IMPORTED_MODULE_0__[\"unmethod\"])(Array.prototype.some))));\n\n\n//# sourceURL=webpack://r/./source/some.js?");

/***/ }),

/***/ "./source/stream.js":
/*!**************************!*\
  !*** ./source/stream.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ \"./source/exporter.js\");\n/* harmony import */ var _private_lazypair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/lazypair */ \"./source/private/lazypair.js\");\n/**\n * @description\n *  Implements a steam interface through a streamWrapper object. Utilizes a lpair data type (cons cell) for the creation\n *  of a recursively defined, lazy, linked list. Simulates lazy evaluation with the help of functions (thunks)\n *  \n * ***\n *  You have to procceed with caution when you are consuming a lazy structure or you will end with stack overflow. \n *  This happens because all the implementations are utilizing a recursive approach. If you want to consume a stream without errors,\n *  you can use the unpure tramboline function helper.\n * ***\n * @signature\n *  stream :: ([a] | (a, a, a, a, ...a)) -> Strea a\n * @example\n *  const a = stream([1, 2, 3, 4]) // === stream(1, 2, 3, 4)\n *\n *  Mapping\n *\n *  You can map the stream with a method call:\n *\n *  a.map(x => x + 5);\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\n *\n *  or point-wise call:\n *\n *  stream.map(x => x + 5, a);\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\n *\n *  or curried alternative:\n *\n *  stream.map(x => x + y)(a)\n *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*\n *\n *  Zipping\n *\n *  const b = stream([1, 2, 3, 4]);  // === stream(1, 2, 3, 4)\n *  const c = stream([5, 6, 7, 8]);  // === stream(5, 6, 7, 8) \n *\n *  b.zip(c);\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\n *\n *  or point-wise call:\n *\n *  stream.zip(b, c);\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\n *\n *  or curried alternative:\n *\n *  stream.zip(b)(c);\n *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*\n * \n *  You can operate on infinite streams like this\n * \n *  const n1 = stream.range(1, Infinity);\n *  const n2 = stream.map(x => -x)(n1);\n *  const n3 = stream.lfilter(x => x % 2 === 0)(n2);\n *  const n4 = stream.take(100)(n3);\n *  stream.print(n4);\n *  //-> -2 -4 -6 ... -200\n * \n *  Or you can use chaining\n *  stream.range(1, Infinity).map(x => -x).lfilter(x => x % 2 === 0).take(100).print();\n *  //-> -2 -4 -6 ... -200\n * \n *  Convert it to Arrays\n *  stream.range(100, 200000).take(100).toArray();\n *  //-> [100, 101, ..., 199]\n */\n\n\n\n\n\nconst streamWrapper = p => {\n    const wrapped = fn => (...args) => streamWrapper(fn(...args));\n\n    return ({\n        // map :: Stream a ⤳ (a -> b) -> Stream a\n        map: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(f, p),\n\n        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a *greedy*\n        filter: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(f, p),\n\n        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a  *lazy, use with caution cause filtering is not inherently lazy*\n        lfilter: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"lfilter\"])(f, p),\n\n        // foldl :: Stream a ⤳ ((b, a) -> b, b) -> b\n        foldl: (f, z) => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldl\"])(f, z, p),\n\n        // foldr :: Stream a ⤳ ((a, b) -> b, b) -> b\n        foldr: (f, z) => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])(f, z, p),\n\n        // takeWhile :: Stream a ⤳ (a -> Boolean) -> Stream a\n        takeWhile: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"takeWhile\"])(f, p),\n\n        // toArray :: Stream a ⤳ [a]\n        toArray: () => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"toArray\"])(p),\n\n        toList: () => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](_exporter__WEBPACK_IMPORTED_MODULE_0__[\"list\"].listWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"toPair\"])(p),\n\n        // concat :: Stream a ⤳ Stream a -> Stream a\n        concat: r => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, r.getLazyPairContext()),\n\n        // mconcat :: Stream a ⤳ [Stream a] -> Stream a\n        mconcat: l => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(p, _exporter__WEBPACK_IMPORTED_MODULE_0__[\"foldr\"]((x, y) => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])), l).getLazyPairContext()),\n\n        // zip :: Stream a ⤳ Stream b -> Stream [a, b]\n        zip: r => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"zip\"])(p, r.getLazyPairContext()),\n\n        // take :: Stream a ⤳ Number -> Stream a\n        take: n => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"take\"])(n, p),\n\n        // join :: Stream (Stream a) ⤳ Stream a\n        join: () => Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"foldr\"])((x, y) => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])), p),\n\n        // chain :: Stream a ⤳ (a -> Stream b) -> Stream b\n        chain: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"chain\"])(p, x => f(x).getLazyPairContext()),\n\n        // tramboline :: Stream a ⤳ (a -> ()) -> Stream a\n        tramboline: f => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"tramboline\"])(f, p),\n\n        // print :: Stream a ⤳ ((), Stream a)\n        print: () => wrapped(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"tramboline\"])(console.log.bind(console), p),\n\n        // getLazyPairContext :: Stream a ⤳ Lazy Pair a\n        getLazyPairContext: () => p,\n    });\n};\n\nconst guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? (Array.isArray(args[0]) ? f(args[0]) : f([args[0]])) : f([]);\n\n\nconst stream = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](streamWrapper, guardFromArray(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"fromArray\"]));\n\n// streamWrapper :: Lazy Pair a -> Stream a\nstream.streamWrapper = p => streamWrapper(p);\n\n// fromArray :: [a] -> Stream a\nstream.fromArray = a => stream(a);\n\n// fromList :: List a -> Stream a\nstream.fromList = p => _exporter__WEBPACK_IMPORTED_MODULE_0__[\"compose\"](streamWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"fromPair\"])(p.getPairContext())\n\n// toList :: Stream a -> List a\nstream.toList = p => p.toList();\n\n// toArray :: Stream a -> [a]\nstream.toArray = p => p.toArray();\n\nstream.range = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"composeM\"](streamWrapper, _private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"range\"]);\n\n// map :: ((a -> b), Stream a) -> Stream b\nstream.map = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.map(f)\n);\n\n// filter :: ((a -> Boolean), Stream a) -> Stream a\nstream.filter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.filter(f)\n);\n\n// filter :: ((a -> Boolean), Stream a) -> Stream a\nstream.lfilter = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.lfilter(f)\n);\n\n// foldl :: ((b, a) -> b, b, Stream a) -> b\nstream.foldl = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p.foldl(f, z)\n);\n\n// foldr :: ((a, b) -> b, b, Stream a) -> b\nstream.foldr = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, z, p) => p.foldr(f, z)\n);\n\n// concat :: (Stream a, Stream a) -> Stream a\nstream.concat = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p1, p2) => p1.concat(p2)\n);\n\n// mconcat :: [Stream a] -> Stream a\nstream.mconcat = l => streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"delayv\"])(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"empty\"])).mconcat(l);\n\n// takeWhile :: ((a -> Boolean), Stream a) -> Stream a\nstream.takeWhile = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.takeWhile(f)\n);\n\nstream.take = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (n, p) => p.take(n)\n);\n\n// zip :: (Stream a, Stream b) -> Stream [a, b]\nstream.zip = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p, r) => p.zip(r)\n);\n\n// join :: Stream (Stream a) -> Stream a\nstream.join = p => p.join();\n\n// chain :: (Stream a, (a -> Stream b)) -> Stream b\nstream.chain = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (p, f) => p.chain(f)\n);\n\n// tramboline :: (a -> (), Stream a) -> Stream a\nstream.tramboline = _exporter__WEBPACK_IMPORTED_MODULE_0__[\"pcurry\"](\n    (f, p) => p.tramboline(f)\n);\n\n// logger :: (Stream a) -> ((), Stream a)\nstream.print = p => p.print();\n\n// getLazyPairContext :: Stream a -> Lazy Pair a\nstream.getLazyPairContext = p => p.getLazyPairContext();\n\nstream.repeat = x => stream.streamWrapper(Object(_private_lazypair__WEBPACK_IMPORTED_MODULE_1__[\"repeat\"])(x));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stream);\n\n\n\n\n//# sourceURL=webpack://r/./source/stream.js?");

/***/ }),

/***/ "./source/subtract.js":
/*!****************************!*\
  !*** ./source/subtract.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partialCurry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partialCurry */ \"./source/partialCurry.js\");\n/**\n * @description\n *  Subtracts second parameter from first one. op (-)\n * @signature\n *  (Number, Number) -> Number\n * @example\n *  let result = subtract(2, 5);  //=> -3\n *  let result = subtract(2)(5);  //=> -3\n */\n\n\n\nconst subtract = (x, y) => x - y;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_partialCurry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subtract));\n\n//# sourceURL=webpack://r/./source/subtract.js?");

/***/ }),

/***/ "./source/uncurry.js":
/*!***************************!*\
  !*** ./source/uncurry.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Converting a stepwise sequence of unary functions into a multivariable function\n * @signature\n *  n1 -> n2 -> ... -> nm -> n -> (n1, n2, ..., nm) -> n\n * @example\n *  const add = x => y => z => x + y + z;\n *  const uncurriedAdd = uncurry(add);\n *  add(1)(2)(3) === uncurriedAdd(1, 2, 3);\n *  //-> 6\n */\n\n\n\nconst uncurry = fn => (...args) => args.reduce((F, arg) => F(arg), fn);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uncurry);\n\n//# sourceURL=webpack://r/./source/uncurry.js?");

/***/ }),

/***/ "./source/unmethodify.js":
/*!*******************************!*\
  !*** ./source/unmethodify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description\n *  Transform object methods to standalone functions receiving objects as first argument.\n * @singature\n *  ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b\n * @example\n *  let obj = {age: 15, getAge: function() {return this.age;}};\n *  obj.getAge() //=> 15\n * \n *  let getAge = unmethod(obj.getAge);\n *  getAge(obj) //=> 15\n */\n\nconst unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);\n\nconst unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);\n\nconst unmethodify3 = fn => (...args) => fn.bind(...args)();\n\nconst unmethod = unmethodify3;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unmethod);\n\n//# sourceURL=webpack://r/./source/unmethodify.js?");

/***/ })

/******/ });
});