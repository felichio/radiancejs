"use strict";

let reduce = require("./reduce.js");

const pipeline = function pipeline(...args) {
    let pipelined = reduce((composedFn, currentFn) => x => currentFn(composedFn(x)), args);
    return pipelined;
};

module.exports = pipeline;
