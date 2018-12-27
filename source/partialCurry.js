/**
 * @description
 *  Converting a multivariable function into a stepwise sequence of partially applied functions
 * @signature
 *  pcurry :: ((a1, a2, a3, ..., an) -> b, Number?) -> (a1 -> a2 -> a3 -> ... -> an -> b) | ((a1, a2) -> a3 -> ... -> an -> b) | ((a1, a2, a3) -> ... -> an -> b) | ... | (a1, a2, ..., an) -> b
 * @example
 *      
 */



// Implementation utilizing Function.prototype.bind method
const partialCurryWithBind = (fn, argLength = fn.length) => argLength === 0 ? fn() : (...args) => partialCurryWithBind(fn.bind(null, ...args), argLength - 1);

// Default implementation via recursion and closures
const partialCurryRecursive = (fn, argLength = fn.length) => {
    const innerCurry = (...args1) => (...args2) => (argLength <= args1.length + args2.length ? fn : innerCurry)(...args1, ...args2);
    return innerCurry();
};

const pcurry = partialCurryRecursive;

export default pcurry;