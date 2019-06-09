/**
 * @description
 *  Chain operation (aka flatMap). Feeds a function of signature a -> M b to the array monad
 * @signature
 *  chain :: ([a], a -> [b]) -> [b]
 *  chain :: [a] -> (a -> [b]) -> [b]
 * @example
 *  const a = chain([1, 2])(x => [x, 1, x, 2]);
 *  //-> [ 1, 1, 1, 2, 2, 1, 2, 2 ]
 */

import { join, map, pcurry, compose } from "./exporter";

const chain1 = f => compose(join, map(f));

const chain2 = (m, f) => join(map(f, m));

export default pcurry(chain2);
