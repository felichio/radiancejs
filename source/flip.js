/**
 * @description
 *  Inverts parameter passing to a function.
 * @signature
 *  ((a, b) -> c) -> ((b, a) -> c)
 * 
 * 
 */


const flip = fn => (x, y) => fn(y, x);

export default flip;
