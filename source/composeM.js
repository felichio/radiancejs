/**
 * @description
 *  Function composition. For f: A -> B, g: B -> C function composition produces a new function
 *  with a mapping A -> C and type g ◦ f = g(f(x)) 
 * @signature
 *  composeM :: (y -> z, x -> y, ..., b -> c, ...[a] -> b) -> ...[a] -> z 
 * @example
 *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);
 *  
 *  const mul5 = x => x * 5;
 * 
 *  const addArgsAndMul5 = composeM(mul5, add(0));
 *  
 *  addArgsAndMul5(1, 2, 3, 4, 5);
 *  //-> 75
 *  
 */


import { foldl, identity, foldr } from "./exporter";

const composeTwo = (g, f) => (...args) => g(f(...args));

const composeNleft = (...args) => foldl(composeTwo)(identity)(args);

const composeNright = (...args) => foldr(composeTwo)(identity)(args);

export default composeNleft;
