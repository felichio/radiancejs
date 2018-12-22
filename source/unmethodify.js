/**
 * Transform object methods to standalone functions receiving objects as first argument.
 *  @singature
 *      ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b
 *  @example
 *      
 */

const unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);

const unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);

const unmethodify3 = fn => (...args) => fn.bind(...args)();


export default unmethodify3;