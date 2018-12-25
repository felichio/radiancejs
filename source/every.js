/**
 * @description
 *  Applies a predicate function to all the elements of the array. Returns true if for every element x, Predicate(x) -> True. Otherwise return false.
 *  Same behaviour as Array.prototype.every except array must be passed explicitly
 * @signature
 *  (a -> Boolean) -> [a] -> Boolean
 *  [n1, n2, n3, ..., nm] -> Predicate(n1) && Predicate(n2) && ... && Predicate(nm)
 * @example
 *
 *
 */

import { flip, unmethod, pcurry } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.every)));
