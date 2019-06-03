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


import {map, pcurry} from "./exporter";

const range = (start, stop, step = (stop - start) < 0 ? -1 : 1) =>
    map((x, i) => start + i * step)(Array(Math.ceil((stop - start) / step)).fill(0));

export default pcurry(range);

