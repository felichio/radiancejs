/**
 * @description
 *  Function pipelining. For f: A -> B, g: B -> C function pipelining produces a new function
 *  with a mapping A -> C and type f | g  = g(f(x)) 
 * @signature
 *  pipelineM :: (...[a] -> b, b -> c, ... , x -> y, y -> z) -> ...[a] -> z
 * @example
 *  const add = x => (...args) => x + args.reduce((x + y) => x + y, 0);
 *  
 *  const mul5 = x => x * 5;
 * 
 *  const addArgsAndMul5 = pipelineM(add(0), mul5);
 *  
 *  addArgsAndMul5(1, 2, 3, 4, 5);
 *  
 */


import { foldl, identity, foldr } from "./exporter";

const pipelineTwo = (f, g) => (...args) => g(f(...args));

const pipelineNleft = (...args) => foldl(pipelineTwo)(identity)(args);

const pipelineNright = (...args) => foldr(pipelineTwo)(identity)(args);

export default pipelineNleft;
