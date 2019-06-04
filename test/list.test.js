
const r = require("../dist/radiance");

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));
 

const prepend = (x, y) => (console.log(`values x: ${x}   y: ${y}`), pair(x)(y));

const empty = null;

// fromArray :: [a] -> List a
const fromArray = r.foldr(prepend)(empty); 

const concat = (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2));

const foldl = (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p));

const foldr = (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)));

const logger = p => p === empty ? console.log(empty) : (console.log(car(p)), logger(cdr(p)));

const a = fromArray([1, 2, 3, 4, 5, 6, 11, 12]);
const b = fromArray([5, 6, 7, 8, 9, 10]);
// const c = fromArray([11, 12, 13, 14, 15]);

const mconcat = r.foldr(concat)(empty);

const map = (f, p) => foldr((x, y) => prepend(f(x), y), empty, p);
// const map = (f, p) => p === empty ? empty : prepend(f(car(p)), map(f, cdr(p)));

// map(x => console.log(x), a);

// logger(map(x => x + 100, a));


const filter = (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p);

const takeWhile = (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty;

const zip = (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)));


logger(zip(a, b));

