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

// fromArray :: [a] -> Pair a
const fromArray = r.foldr(prepend)(empty);

// concat :: (Pair a, Pair a) -> Pair a
const concat = r.pcurry(
    (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2))
);

// mconcat :: [Pair a] -> Pair a
const mconcat = r.foldr(concat)(empty);

// foldl :: ((b, a) -> b, b, Pair a) -> b
const foldl = r.pcurry(
    (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p))
);

// foldr :: ((a, b) -> b, b, Pair a) -> b
const foldr = r.pcurry(
    (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)))
);

// toArray :: Pair a -> [a]
const toArray = p => foldr((x, y) => [x, ...y], [], p);

// reverse :: Pair a -> Pair a
const reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));

// map :: ((a -> b), Pair a) -> Pair b
const map = r.pcurry(
    // (f, p) => foldr((x, y) => prepend(f(x), y), empty, p)
    (f, p) => p === empty ? empty : prepend(f(car(p)), map(f, cdr(p))) // this implementation forces the evaluation of f(car(p))
);

// filter :: ((a -> Boolean), Pair a) -> Pair a
const filter = r.pcurry(
    // (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p)
    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), filter(f, cdr(p))) : filter(f, cdr(p))  // this implementation forces the evaluation of f(car(p))
);

// takeWhile :: ((a -> Boolean), Pair a) -> Pair a
const takeWhile = r.pcurry(
    (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty
);

// zip :: (Pair a, Pair b) -> Pair [a, b]
const zip = r.pcurry(
    (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)))
);

// join :: Pair (Pair a) -> Pair a
const join = r.pcurry(foldr)(concat, empty);

// chain :: (Pair a, (a -> Pair b)) -> Pair b
const chain = r.pcurry(
    (p, f) => r.compose(join, r.pcurry(map)(f))(p)
);

// forEach :: (a -> (), Pair a) -> Pair a
const forEach = r.pcurry(
    (f, p) => (foldl((z, x) => f(x), empty, p), p)
);

// logger :: (Pair a) -> ((), Pair a)
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