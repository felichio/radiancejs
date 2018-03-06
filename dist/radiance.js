// "use strict";
//
// let modules = [
//     {
//         name: "compose",
//         path: "../source/"
//     },
//     {
//         name: "curry",
//         path: "../source/"
//     },
//     {
//         name: "every",
//         path: "../source/"
//     },
//     {
//         name: "filter",
//         path: "../source/"
//     },
//     {
//         name: "find",
//         path: "../source/"
//     },
//     {
//         name: "forEach",
//         path: "../source/"
//     },
//     {
//         name: "map",
//         path: "../source/"
//     },
//     {
//         name: "mapWith",
//         path: "../source/"
//     },
//     {
//         name: "pipeline",
//         path: "../source/"
//     },
//     {
//         name: "reduce",
//         path: "../source/"
//     },
//     {
//         name: "some",
//         path: "../source/"
//     },
// ]
//
//
// modules.forEach(m => module.exports[m.name] = require(`${m.path + m.name}`));

"use strict";

(function (global, factory) {
    "use strict";
    // NodeJS Enviroment

    typeof module === "object" && typeof module.exports === "object"
    ? module.exports = factory(global)
    : undefined;

    // Web Enviroments

    typeof window !== "undefined"
    ? global._ = global.r = global.R = factory(global)
    : undefined;

})(typeof window !== "undefined" ? window : this, function (global) {
    "use strict";

    const map = function map(fn, array) {
        return array.map(fn);
    };

    const filter = function (fn, array) {
        return array.filter(fn);
    };

    const find = function find(fn, array) {
        return array.find(fn);
    };

    const every = function every(fn, array) {
        return array.every(fn);
    };

    const some = function some(fn, array) {
        return array.some(fn);
    };

    const forEach = function forEach(fn, array) {
        return array.forEach(fn);
    };

    const reduce = function reduce(fn, array, initialValue) {
        return initialValue ? array.reduce(fn, initialValue) : array.reduce(fn);
    };

    const curry = function (fn) {
        return function curriedFn(...args) {
            return args.length < fn.length
            ? function (...rargs) {
                return curriedFn.apply(this, [...args, ...rargs])
            }
            : fn.apply(this, args);
        }
    };

    const compose = function compose(...args) {
        let composed = reduce((composedFn, currentFn) => x => composedFn(currentFn(x)), args);
        return composed;
    };

    const pipeline = function pipeline(...args) {
        let pipelined = reduce((composedFn, currentFn) => x => currentFn(composedFn(x)), args);
        return pipelined;
    };

    const mapWith = function mapWith(fn) {
        return curry(map)(fn);
    };

    return {
        map,
        filter,
        find,
        every,
        some,
        forEach,
        reduce,
        curry,
        compose,
        pipeline,
        mapWith,

    }




});
