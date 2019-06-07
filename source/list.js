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

import * as r from "./exporter";

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));

const empty = null;
 
const prepend = (x, y) => pair(x)(y);

// fromArray :: [a] -> List a
const fromArray = r.foldr(prepend)(empty); 



// concat :: (List a, List a) -> List a
const concat = (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2));

// mconcat :: [List a] -> List a
const mconcat = r.foldr(concat)(empty);

// foldl :: ((b, a) -> b, b, List a) -> b
const foldl = (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p));

// foldr :: ((a, b) -> b, b, List a) -> b
const foldr = (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)));

// toArray :: List a -> [a]
const toArray = p => foldr((x, y) => [x, ...y], [], p);

// reverse :: List a -> List a
const reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));

// map :: ((a -> b), List a) -> List b
const map = (f, p) => foldr((x, y) => prepend(f(x), y), empty, p);

// filter :: ((a -> Boolean), List a) -> List a
const filter = (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p);

// takeWhile :: ((a -> Boolean), List a) -> List a
const takeWhile = (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty;

// zip :: (List a, List b) -> List [a, b]
const zip = (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)));


const listWrapper = p => {
    const wrapped = fn => (...args) => listWrapper(fn(...args));

    return ({
        map: f => wrapped(map)(f, p),

        filter: f => wrapped(filter)(f, p),

        print: () => (foldl((z, x) => console.log(x), empty, p), listWrapper(p)),

        foldl: (f, z) => foldl(f, z, p),

        foldr: (f, z) => foldr(f, z, p),

        toArray: () => toArray(p),

        concat: r => wrapped(concat)(p, r.getPairContext()),

        mconcat: l => wrapped(concat)(p, r.foldr((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty))(l).getPairContext()),

        takeWhile: f => wrapped(takeWhile)(f, p),

        zip: r => wrapped(zip)(p, r.getPairContext()),

        reverse: () => wrapped(reverse)(p),

        getPairContext: () => p,
    });
};


const guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? f(args[0]) : f([]);

const list = r.composeM(listWrapper, guardFromArray(fromArray));

export default list;