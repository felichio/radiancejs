/**
 * @description
 *  Converting a multivariable function into a stepwise sequence of partially applied functions
 * @signature
 *  pcurry :: ((a1, a2, a3, ..., an) -> b, Number?) -> (a1 -> a2 -> a3 -> ... -> an -> b) | ((a1, a2) -> a3 -> ... -> an -> b) | ((a1, a2, a3) -> ... -> an -> b) | ... | (a1, a2, ..., an) -> b
 * @example
 *  const add = (x, y, w, z) => x + y + w + z;
 *  
 *  const curriedAdd = pcurry(add);
 *  const a = curriedAdd(1);
 *  //-> (y, w, z) => 1 + y + w + z
 *  const b = a(2, 3);
 *  //-> z => 1 + 2 + 3 + z
 *  const c = b(4);
 *  //-> 1 + 2 + 3 + 4 = 10
 *  or
 *  curriedAdd(1, 2, 3, 4);
 *  //-> 10
 * 
 *  For functions that have unspecified number of arguments you can provide them explictly
 * 
 *  const add = (...args) => args.reduce((x, y) => x + y, 0, args);
 *  curriedAdd = pcurry(add, 3);
 *  curriedAdd(1, 2);
 *  //-> Function
 *  curriedAdd(1, 2, 3);
 *  //-> 6 
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