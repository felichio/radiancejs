/**
 * @description
 *  Multiplies first parameter, second parameter times . op (*)
 * @signature
 *  multiply :: Number -> Number -> Number
 *  multiply :: (Number, Number) -> Number
 * @example
 *  let result = multiply(2, 5);  //=> 10
 *  let result = multiply(2)(5);  //=> 10 
 */

import pcurry from "./partialCurry";

const multiply = (x, y) => x * y;

export default pcurry(multiply);