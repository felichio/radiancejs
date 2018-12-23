/**
 * @description
 *  Multiplies first parameter, second parameter times . op (*)
 * @signature
 *  (Number, Number) -> Number
 * @example
 *  let result = multiply(2, 5);  //=> 10
 */

import pcurry from "./partialCurry";

const multiply = (x, y) => x * y;

export default pcurry(multiply);