/**
 * @description
 *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function
 *  with a mapping A -> C and type f | g  = g(f(x)) 
 * @signature
 *  pipeline :: (a -> b, b -> c, ... , x -> y, y -> z) -> a -> z
 * @example
 *  add5 :: Number -> Number
 *  const add5 = x => x + 5;
 *
 *  mul50 :: Number -> Number
 *  const mul50 = x => x * 50;
 *
 *  mul50AndAdd5 :: Number -> Number
 *  const mul50AndAdd5 = pipeline(mul50, add5) == add5(mul50)
 *
 *  mul50AndAdd5(10) = add5(mul50(10)) = 505
 *  
 */


import { foldl, identity, foldr } from "./exporter";

const pipelineTwo = (f, g) => x => g(f(x));

const pipelineNleft = (...args) => foldl(pipelineTwo)(identity)(args);

const pipelineNright = (...args) => foldr(pipelineTwo)(identity)(args);

export default pipelineNleft;
