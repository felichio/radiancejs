/**
 * @description
 *  Adds two values. op (+)
 * @signature
 *  add :: Number -> Number -> Number
 *  add :: (Number, Number) -> Number     
 * @example
 *  let result = add(2, 5);  //=> 7
 *  let result = add(2)(5);  //=> 7
 */

import pcurry from "./partialCurry";

const add = (x, y) => x + y;


export default pcurry(add);