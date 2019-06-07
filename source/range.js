/**
 * @description
 *  Creates an array with integers in range of [x, y). Can utilize a step quantity
 * @signature
 *  range :: (Number, Number, Number?) -> [Number]
 * @example
 *  range(1, 5);
 *  //-> [1, 2, 3, 4]
 *  range(5, 1, -2)
 *  //-> [5, 3]
 */


import {map, pcurry} from "./exporter";

const range = (start, stop, step = (stop - start) < 0 ? -1 : 1) =>
    map((x, i) => start + i * step)(Array(Math.ceil((stop - start) / step)).fill(0));

export default pcurry(range);

