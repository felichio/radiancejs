/**
 * @description
 *  Adds two values. op (+)
 * @signature
 *  (Number, Number) -> Number // Number -> Number -> Number      
 * @example
 *  let result = add(2, 5);  //=> 7
 *  let result = add(3)(6);  //=> 9
 */

import pcurry from "./partialCurry";

const add = (x, y) => x + y;


export default pcurry(add);