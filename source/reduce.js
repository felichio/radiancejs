/**
 * @description
 *  Same behaviour as Array.prototype.reduce except array must be passed explicitly
 * @signature
 *  
 * @example
 *
 *
 */

import { pcurry, unmethod } from "./exporter";

const flipThree = fn => (x, y, z) => fn(z, x, y);

export default pcurry(flipThree(unmethod(Array.prototype.reduce)));
