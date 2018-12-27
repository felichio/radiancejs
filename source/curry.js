/**
 * @description
 *  Converting a multivariable function into a stepwise sequence of unary functions
 * @signature
 *  curry :: ((a1, a2, a3, ..., an) -> b, Number?) -> a1 -> a2 -> a3 -> ... -> an -> b
 * @example
 *      
 */


// Implementation utilizing Function.prototype.bind method
const curryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : x => curryWithBind(fn.bind(null, x), argLength - 1);

// Default implementation via recursion and closures
const curryRecursive = (fn, argLength = fn.length) => {
    const innerCurry = (...args) => y => (argLength <= args.length + 1 ? fn : innerCurry)(...args, y);
    return innerCurry();
};

const curry = curryRecursive;


export default curry;