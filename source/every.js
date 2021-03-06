/**
 * @description
 *  Applies a predicate function to all the elements of the array. Returns true if for every element x, Predicate(x) -> True. Otherwise return false.
 *  Same behaviour as Array.prototype.every except array must be passed explicitly
 * @signature
 *  every :: (a -> Boolean) -> [a] -> Boolean
 *  every :: Predicate -> [e1, e2, ..., en] -> Predicate(e1) && Predicate(e2) && ... && Predicate(en)
 * @example
 *  const a = [1, 2, 3, 4];
 *  
 *  every(x => x > 0, a);
 *  //-> True
 *  every(x => x > 0)(a);
 *  //-> True
 */

import { flip, unmethod, pcurry } from "./exporter";

export default pcurry(flip(unmethod(Array.prototype.every)));
