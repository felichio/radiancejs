"use strict";

let reduce = require("./reduce.js");

const compose = function compose(...args) {
    let composed = reduce((composedFn, currentFn) => x => composedFn(currentFn(x)), args);
    return composed;
};

module.exports = compose;
