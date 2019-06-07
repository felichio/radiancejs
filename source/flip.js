/**
 * @description
 *  Inverts parameter passing to a function.
 * @signature
 *  ((a, b) -> c) -> ((b, a) -> c)
 * @example
 *  const greet = (fname, lname) => `Hello mr ${fname}. Hello again mr ${lname}`;
 *  greet("chicken", "turtle");
 *  //-> "Hello mr chicken. Hello again mr turtle"
 *  flip(greet)("chicken", "turtle");
 *  //-> "Hello mr turtle. Hello again mr chicken"
 */


const flip = fn => (x, y) => fn(y, x);

export default flip;
