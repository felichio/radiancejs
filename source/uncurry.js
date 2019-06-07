/**
 * @description
 *  Converting a stepwise sequence of unary functions into a multivariable function
 * @signature
 *  n1 -> n2 -> ... -> nm -> n -> (n1, n2, ..., nm) -> n
 * @example
 *  const add = x => y => z => x + y + z;
 *  const uncurriedAdd = uncurry(add);
 *  add(1)(2)(3) === uncurriedAdd(1, 2, 3);
 *  //-> 6
 */



const uncurry = fn => (...args) => args.reduce((F, arg) => F(arg), fn);


export default uncurry;