/**
 * @description
 *  Converting a multivariable function into a stepwise sequence of partially applied functions
 * @signature
 *  ((n1, n2, ...nm) -> n) -> n1 -> n2 -> ...nm -> n || ((n1, n2, ...nm) -> n) -> (n1, n2) -> n3 -> ...nm -> n || ... || ((n1, n2, ...nm) -> n) -> (n1, n2, ... n[m-1]) -> nm -> n
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


export default partialCurryRecursive;