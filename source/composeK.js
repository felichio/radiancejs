/**
 * @description
 *  Kleisli unction composition. For f: A -> M B, g: B -> M C kleisli function composition produces a new function
 *  with a mapping A -> M C and type g <=< f = x => f(x).chain(g)
 * @signature
 *  composeK :: (y -> m z, x -> m y, ..., b -> m c, a -> m b) -> a -> m z 
 * @example
 *  
 *  
 */


import { foldl, identity, foldr, list } from "./exporter";

const composeKTwo = (g, f) => x => f(x).chain(g);

const composeKNleft = (...args) => args.reduce(composeKTwo);

// must provide a pure (aka return) function implementation
// const composeKNleft2 = (...args) => foldl(composeKTwo)(pure)(args);

// must provide a pure (aka return) function implementation
// const composeKNright = (...args) => foldr(composeKTwo)(pure)(args);

export default composeKNleft;
