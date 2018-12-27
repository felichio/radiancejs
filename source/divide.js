/**
 * @description
 *  Divides second parameter by first one. op (/)
 * @signature
 *  divide :: Number -> Number -> Number
 *  divide :: (Number, Number) -> Number
 * @example
 *  let result = divide(2, 5);  //=> 0.4
 *  let result = divide(2)(5);  //=> 0.4
 */

import pcurry from "./partialCurry";

const divide = (x, y) => x / y;


export default pcurry(divide);