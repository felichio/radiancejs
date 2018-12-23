/**
 * @description
 *  Subtracts second parameter from first one. op (-)
 * @signature
 *  (Number, Number) -> Number
 * @example
 *  let result = subtract(2, 5);  //=> -3
 */

import pcurry from "./partialCurry";

const subtract = (x, y) => x - y;

export default pcurry(subtract);