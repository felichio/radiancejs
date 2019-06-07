/**
 * @description
 *  Gathering values of an Array through a reducer function. Right-Folding
 * @signature
 *  foldRight :: ((b, a) -> a) -> a -> [b] -> a || (b -> a -> a) -> a -> [b] -> a
 * @example
 *  const a = [1, 2, 3, 4];
 *  const add = (x, y) => x + y;
 *  foldRight(add, 0, a);
 *  //-> 10
 *
 */

import { pcurry } from "./exporter";

const foldRight = (f, z, [first, ...rest]) => first === undefined ?
    z :
    pcurry(f)(first)(foldRight(f, z, rest));

export default pcurry(foldRight);
