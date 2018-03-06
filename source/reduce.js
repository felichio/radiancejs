"use strict";

const reduce = function reduce(fn, array, initialValue) {
    return initialValue ? array.reduce(fn, initialValue) : array.reduce(fn);
};

module.exports = reduce;
