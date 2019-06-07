/**
 * @description
 *  Gathering values of an Array through a reducer function. Left-Folding
 * @signature
 *  foldLeft :: ((b, a) -> b) -> b -> [a] -> b || (b -> a -> b) -> b -> [a] -> b
 * @example
 *  const a = [1, 2, 3, 4];
 *
 */

import { pcurry } from "./exporter";

const foldLeft = (f, z, [first, ...rest]) => first === undefined ?
    z :
    foldLeft(f, pcurry(f)(z)(first), rest);


export default pcurry(foldLeft);
