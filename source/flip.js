/**
 * Inverts parameter passing to a function.
 * 
 * 
 * 
 */


const flip = fn => (x, y) => fn(y, x);

export default flip;