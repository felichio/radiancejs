/**
 * @description
 *  Transform object methods to standalone functions receiving objects as first argument.
 * @singature
 *  ((this, n1, ... nm) -> b) -> (a, n1, n2, n3, ... nm) -> b
 * @example
 *  let obj = {age: 15, getAge: function() {return this.age;}};
 *  obj.getAge() //=> 15
 * 
 *  let getAge = unmethod(obj.getAge);
 *  getAge(obj) //=> 15
 */

const unmethodify1 = fn => (first, ...rest) => fn.call(first, ...rest);

const unmethodify2 = fn => (first, ...rest) => fn.apply(first, rest);

const unmethodify3 = fn => (...args) => fn.bind(...args)();

const unmethod = unmethodify3;

export default unmethod;