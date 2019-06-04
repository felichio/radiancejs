











import r from "./exporter";

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));

const empty = null;
 
const prepend = (x, y) => (console.log(`values x: ${x}   y: ${y}`), pair(x)(y));

// fromArray :: [a] -> List a
const fromArray = r.foldr(prepend)(empty); 

// concat :: (List a, List a) -> List a
const concat = (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2));

// mconcat = [List a] -> List a
const mconcat = r.foldr(concat)(empty);

// foldl :: ((b, a) -> b, b, List a) -> b
const foldl = (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p));

// foldr :: ((a, b) -> b, b, List a) -> b
const foldr = (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)));

// map :: ((a -> b), List a) -> List b
const map = (f, p) => foldr((x, y) => prepend(f(x), y), empty, p);

// filter :: ((a -> Boolean), List a) -> List a
const filter = (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p);

// takeWhile :: ((a -> Boolean), List a) -> List a
const takeWhile = (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty;

const zip = (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)));
