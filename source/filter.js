/**
 * @description
 *  Applies a predicate function to all the elements of the array. Returns a new array with all elements x for which Predicate(x) -> True.
 *  Same behaviour as Array.prototype.filter except array must be passed explicitly
 * @signature
 *  filter :: (a -> Boolean) -> [a] -> [a]
 * @example
 *  const a = [1, 2, 3, 4];
 *  filter(x => x > 1, a);
 *  //-> [2, 3, 4]
 *  filter(x => x < 2)(a);
 *  //-> [1]
 */

import { flip, pcurry, unmethod } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.filter)));
