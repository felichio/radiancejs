/**
 * @description
 *  Merges two arrays. Returns a new array.
 *  Same behaviour as Array.prototype.concat except array must be passed explicitly
 * @signature
 *  concat :: [a] -> [b] -> [a, b]
 *  concat :: ([a], [b]) -> [a, b] 
 * @example
 * 
 * 
 */

import {unmethod, pcurry } from "./exporter";
import twoParameter from "./private/twoParameter";

export default pcurry(twoParameter(unmethod(Array.prototype.concat)));
