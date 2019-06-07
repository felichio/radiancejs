/**
 * @description
 *  Converting a multivariable function into a stepwise sequence of unary functions
 * @signature
 *  curry :: ((a1, a2, a3, ..., an) -> b, Number?) -> a1 -> a2 -> a3 -> ... -> an -> b
 * @example
 *  const add = (x, y, w, z) => x + y + w + z;
 *  
 *  const curriedAdd = curry(add);
 *  const a = curriedAdd(1);
 *  //-> (y, w, z) => 1 + y + w + z
 *  const b = a(2)(3);
 *  //-> z => 1 + 2 + 3 + z
 *  const c = b(4);
 *  //-> 1 + 2 + 3 + 4 = 10
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