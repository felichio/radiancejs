/**
 * @description
 *  Merges two arrays. Returns a new array.
 *  Same behaviour as Array.prototype.concat except array must be passed explicitly
 * @signature
 *  concat :: [a] -> [b] -> [a, b]
 *  concat :: ([a], [b]) -> [a, b] 
 * @example
 *  concat([1, 2, 3], [4, 5, 6]) = [1, 2, 3, 4, 5, 6];
 *  concat([1, 2, 3])([4, 5, 6]) = [1, 2, 3, 4, 5, 6];
 * 
 */

import { join, map, pcurry, compose } from "./exporter";

const chain1 = f => compose(join, map(f));

const chain2 = (m, f) => join(map(f, m));

export default pcurry(chain2);
