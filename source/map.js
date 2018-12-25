/**
 * @description
 *  Applies to every element of the array the function a -> b. Returns a new array.
 *  Same behaviour as Array.prototype.map except array must be passed explicitly
 * @signature
 *  (a -> b) -> [a] -> [b]
 * @example
 * 
 * 
 */

import { flip, unmethod, pcurry } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.map)));
