/**
 * @description
 *  Function composition. For f: A -> B, g: B -> C function composition produces a new function
 *  with a mapping A -> C and type gྪ ◦ f = g(f(x)) 
 * @signature
 *  compose :: (y -> z, x -> y, ..., b -> c, a -> b) -> a -> z 
 * @example
 *   
 */


import { foldl, identity, foldr } from "./exporter";

const composeTwo = (g, f) => x => g(f(x));

const composeNleft = (...args) => foldl(composeTwo)(identity)(args);

const composeNright = (...args) => foldr(composeTwo)(identity)(args);

export default composeNleft;
