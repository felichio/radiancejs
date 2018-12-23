/**
 * @description
 *  Same behaviour as Array.prototype.filter except array must be passed explicitly
 * @signature
 *  (a -> Boolean) -> [a] -> [a]
 * @example
 * 
 * 
 */

import { flip, pcurry, unmethod } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.filter)));
