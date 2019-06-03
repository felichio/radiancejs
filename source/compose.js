/**
 * @description
 *  Function composition. For f: A -> B, g: B -> C function composition produces a new function
 *  with a mapping A -> C and type gྪ ◦ f = g(f(x)) 
 * @signature
 *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z 
 * @example
 *  add5 :: Number -> Number
 *  const add5 = x => x + 5;
 *
 *  mul50 :: Number -> Number
 *  const mul50 = x => x * 50;
 *
 *  mul50AndAdd5 :: Number -> Number
 *  const mul50AndAdd5 = compose(add5, mul50) == add5(mul50)
 *
 *  mul50AndAdd5(10) = add5(mul50(10)) = 505
 *  
 */


import { foldl, identity, foldr } from "./exporter";

const composeTwo = (g, f) => x => g(f(x));

const composeNleft = (...args) => foldl(composeTwo)(identity)(args);

const composeNright = (...args) => foldr(composeTwo)(identity)(args);

export default composeNleft;
