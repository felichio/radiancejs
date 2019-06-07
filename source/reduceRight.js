/**
 * @description
 *  Same behaviour as Array.prototype.reduceRight except array must be passed explicitly
 * @signature
 *  reduceRight :: ((b, a) -> b) -> b -> [a] -> b
 * @example
 *  const a = [1, 2, 3, 4];
 *  const add = (x, y) => x + y;
 *  reduceRight(add, 0, a);
 *  //-> 10
 *
 */

import { pcurry, unmethod } from "./exporter";

const flipThree = fn => (x, y, z) => fn(z, x, y);

export default pcurry(flipThree(unmethod(Array.prototype.reduceRight)));
