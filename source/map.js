/**
 * @description
 *  Applies to every element of the array the function a -> b. Returns a new array.
 *  Same behaviour as Array.prototype.map except array must be passed explicitly
 * @signature
 *  map :: (a -> b) -> [a] -> [b]
 * @example
 *  const a = [1, 2, 3, 4];
 *  map(x => x + 1, a);
 *  //-> [2, 3, 4, 5]
 *  map(x => x === 1)(a);
 *  //-> [true, false, false, false]
 * 
 */

import { flip, unmethod, pcurry } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.map)));
