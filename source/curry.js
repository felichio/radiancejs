"use strict";

const curry = function (fn) {
    return function curriedFn(...args) {
        return args.length < fn.length
        ? function (...rargs) {
            return curriedFn.apply(this, [...args, ...rargs])
        }
        : fn.apply(null, args);
    }
};

module.exports = curry;
