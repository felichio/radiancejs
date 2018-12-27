/**
 * @description
 *  Applies a predicate function to all the elements of the array. Returns true if for at least one element x, Predicate(x) -> True. Otherwise returns false.
 *  Same behaviour as Array.prototype.some except array must be passed explicitly
 * @signature
 *  some :: (a -> Boolean) -> [a] -> Boolean
 *  some :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) || Predicate(e2) || ... || Predicate(en)
 * @example
 *
 *
 */

import { flip, unmethod, pcurry } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.some)));
