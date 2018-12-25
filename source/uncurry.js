/**
 * @description
 *  Converting a stepwise sequence of unary functions into a multivariable function
 * @signature
 *  n1 -> n2 -> ... -> nm -> n -> (n1, n2, ... , nm) -> n
 * @example
 *  
 */



const uncurry = fn => (...args) => args.reduce((F, arg) => F(arg), fn);


export default uncurry;