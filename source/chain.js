/**
 * @description
 *  Chain operation (aka flatMap). Feeds a function of signature a -> M b to the array monad
 * @signature
 *  chain :: ([a], a -> [b]) -> [b]
 *  chain :: [a] -> (a -> [b]) -> [b]
 * @example
 *  const a = chain([1, 2])(x => [x, 1, x, 2]);
 *  //-> [ 1, 1, 1, 2, 2, 1, 2, 2 ]
 * 
 *  [1, 2].chain(x => [x, 0]);
 *  //-> [1, 0, 2, 0]
 */

import { join, map, pcurry, compose } from "./exporter";

const chain1 = f => compose(join, map(f));

const chain2 = (m, f) => join(map(f, m));


// Polutes the array prototype object with the chain (flatMap) function * composeK can utilize the object context to run on arrays too *
Array.prototype.chain = function (f) {
    return chain2(this, f);
};

export default pcurry(chain2);
