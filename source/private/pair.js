import * as r from "../exporter";

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));

const empty = null;

const prepend = r.pcurry(
    (x, y) => pair(x)(y)
);

// fromArray :: [a] -> List a
const fromArray = r.foldr(prepend)(empty);

// concat :: (List a, List a) -> List a
const concat = r.pcurry(
    (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2))
);

// mconcat :: [List a] -> List a
const mconcat = r.foldr(concat)(empty);

// foldl :: ((b, a) -> b, b, List a) -> b
const foldl = r.pcurry(
    (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p))
);

// foldr :: ((a, b) -> b, b, List a) -> b
const foldr = r.pcurry(
    (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)))
);

// toArray :: List a -> [a]
const toArray = p => foldr((x, y) => [x, ...y], [], p);

// reverse :: List a -> List a
const reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));

// map :: ((a -> b), List a) -> List b
const map = r.pcurry(
    (f, p) => foldr((x, y) => prepend(f(x), y), empty, p)
);

// filter :: ((a -> Boolean), List a) -> List a
const filter = r.pcurry(
    (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p)
);

// takeWhile :: ((a -> Boolean), List a) -> List a
const takeWhile = r.pcurry(
    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty
);

// zip :: (List a, List b) -> List [a, b]
const zip = r.pcurry(
    (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)))
);

// join :: List (List a) -> List a
const join = r.pcurry(foldr)(concat, empty);

// chain :: (List a, (a -> List b)) -> List b
const chain = r.pcurry(
    (p, f) => r.compose(join, r.pcurry(map)(f))(p)
);

// forEach :: (a -> (), List a) -> List a
const forEach = r.pcurry(
    (f, p) => (foldl((z, x) => f(x), empty, p), p)
);

// logger :: (List a) -> ((), List a)
const logger = p => forEach(x => console.log(x), p);


export {
    empty,
    prepend,
    fromArray,
    concat,
    mconcat,
    foldl,
    foldr,
    toArray,
    reverse,
    map,
    filter,
    takeWhile,
    zip,
    join,
    chain,
    forEach,
    logger,
}