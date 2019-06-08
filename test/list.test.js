
const r = require("../dist/radiance");



// const pair = x => y => s => s(x)(y);

// const K = x => y => x;

// const I = r.identity;

// const car = p => p(K);

// const cdr = p => p(K(I));

// const empty = null;

// const prepend = (x, y) => (pair(x)(y));

// // fromArray :: [a] -> List a
// const fromArray = r.foldr(prepend)(empty);


// const append = (x, y) => pair(y)(x);

// // concat :: (List a, List a) -> List a
// const concat = (p1, p2) => p1 === empty ? p2 : prepend(car(p1), concat(cdr(p1), p2));

// // mconcat :: [List a] -> List a
// const mconcat = r.foldr(concat)(empty);



// // foldl :: ((b, a) -> b, b, List a) -> b
// const foldl = (f, z, p) => p === empty ? z : foldl(f, f(z, car(p)), cdr(p));

// // foldr :: ((a, b) -> b, b, List a) -> b
// const foldr = (f, z, p) => p === empty ? z : f(car(p), foldr(f, z, cdr(p)));


// // toArray :: List a -> [a]
// const toArray = p => foldr((x, y) => [x, ...y], [], p);

// // reverse :: List a -> List a
// const reverse = p => p === empty ? empty : concat(reverse(cdr(p)), prepend(car(p), empty));

// // map :: ((a -> b), List a) -> List b
// const map = (f, p) => foldr((x, y) => prepend(f(x), y), empty, p);

// // filter :: ((a -> Boolean), List a) -> List a
// const filter = (f, p) => foldr((x, y) => f(x) ? prepend(x, y) : y, empty, p);

// // takeWhile :: ((a -> Boolean), List a) -> List a
// const takeWhile = (f, p) => p === empty ? empty : f(car(p)) ? prepend(car(p), takeWhile(f, cdr(p))) : empty;

// // zip :: (List a, List b) -> List [a, b]
// const zip = (p1, p2) => p1 === empty || p2 === empty ? empty : prepend([car(p1), car(p2)], zip(cdr(p1), cdr(p2)));




// // join :: List (List a) -> List a
// const join = r.pcurry(foldr)(concat, empty);

// // chain :: (List a, (a -> List b)) -> List b
// const chain = (p, f) => r.compose(join, r.pcurry(map)(f))(p);

// const listWrapper = p => {
//     const wrapped = fn => (...args) => listWrapper(fn(...args));

//     return ({
//         map: f => wrapped(map)(f, p),

//         filter: f =>  wrapped(filter)(f, p),

//         print: () => (foldl((z, x) => console.log(x), empty, p), listWrapper(p)),

//         foldl: (f, z) => foldl(f, z, p),

//         foldr: (f, z) => foldr(f, z, p),

//         toArray: () => toArray(p),

//         concat: r => wrapped(concat)(p, r.getPairContext()),

//         mconcat: l => wrapped(concat)(p, r.foldr((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty))(l).getPairContext()),

//         takeWhile: f => wrapped(takeWhile)(f, p),

//         zip: r => wrapped(zip)(p, r.getPairContext()),

//         reverse: () => wrapped(reverse)(p),

//         join: () => foldr((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty), p),

//         chain: f => wrapped(chain)(p, x => f(x).getPairContext()),

//         getPairContext: () => p,
//     });
// };



// const guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? f(args[0]) : f([]);

// const list = r.composeM(listWrapper, guardFromArray(fromArray));



// const logger = p => p === empty ? console.log(empty) : (console.log(car(p)), logger(cdr(p)));

// const a = fromArray([1, 2, 3, 4, 5, 6, 11, 12]);
// const b = fromArray([5, 6, 7, 8, 9, 10]);
// // const c = fromArray([11, 12, 13, 14, 15]);

// // logger(reverse(a));

// // map(x => console.log(x), a);

// // logger(map(x => x + 100, a));

// // list(r.range(1, 100)).takeWhile(x => x < 50).print();
// // console.log(r.foldr((x, y) => x + y, 0, [1, 2, 3]))
// // logger(a);

// const c = prepend(a, prepend(b, empty));

// const d = chain(c, r.identity);


// // const q = r.list.chain(r.list(1, 2, 3), x => r.list(1, 2, 3)).forEach(x => console.log(`Hi there ${x}`))

// // r.list(1, 2, 3).chain(x => r.list(5, 6, 7)).print();

// const w = r.list(1, 2, 3, 4);

// const ww = r.list(r.range(1, 100, 5)).chain(x => r.list("up", "down")).forEach(r.identity).getPairContext();

// const q = r.list.filter(x => x > 50)(r.list.listWrapper(r.pair.chain(ww)(x => r.pair.prepend(1)(r.pair.empty))).print()).print().toArray();
// console.log(q)

const a = r.list.map(x => x + 10)(r.list(1, 2, 3, 4))

console.log(r.list.foldl((x, y) => x+ y)(0)(a));

const b = r.list(1, 2, 3, 4);
const c = r.list(5, 6, 7, 8);

r.list.zip(b, c).print()