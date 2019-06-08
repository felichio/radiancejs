let r = require("../dist/radiance");

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));

const empty = null;

const prepend = (x, y) => pair(x)(y);

const delay = fn => (...args) => () => fn(...args);

const delayv = val => () => val;




const logger = p => {
    const evaluated = p();
    return evaluated === empty ? console.log(empty) : (console.log(car(evaluated)), logger(cdr(evaluated)));
};

// foldr :: ((a, b) -> b, b, Lazy Pair a) -> b
const foldr = (f, z, p) => {
    const evaluated = p();
    return evaluated === empty ? z : f(car(evaluated), foldr(f, z, cdr(evaluated)));
};

// foldl :: ((b, a) -> b, b, Lazy Pair a) -> b
const foldl = (f, z, p) => {
    const evaluated = p();
    return evaluated === empty ? z : foldl(f, f(z, car(evaluated)), cdr(evaluated));
};

// fromArray :: [a] -> Lazy Pair a
const fromArray = delay(
    ([first, ...rest]) => first === undefined ? empty : prepend(first, fromArray(rest))
);

// fromPair :: Pair a -> Lazy Pair a
const fromPair = delay(
    p => p === empty ? empty : prepend(car(p), fromPair(cdr(p)))
);

// toArray :: Lazy Pair a -> [a]   *toArray function is greedy, careful stack overflow*
const toArray = p => foldr((x, y) => [x, ...y], [], p);

// toPair :: Lazy Pair a -> Pair a   *toPair function is greedy, careful stack overflow*
const toPair = p => foldr(prepend, empty, p);

// map :: ((a -> b), Lazy Pair a) -> Lazy Pair b
const map = delay(
    (f, p) => {
        const evaluated = p();
        return evaluated === empty ? empty : prepend(f(car(evaluated)), map(f, cdr(evaluated)));
    }
);

// filter :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a  *filter function is greedy, careful stack overflow*
const filter = (f, p) => {
    const innerFilter = (f, p) => {
        const evaluated = p();
        return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), innerFilter(f, cdr(evaluated))) : innerFilter(f, cdr(evaluated))
    };

    // return fromArray(r.pair.toArray(innerFilter(f, p)));
    return fromPair(innerFilter(f, p));
};

// takeWhile :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a
const takeWhile = delay(
    (f, p) => {
        const evaluated = p();
        return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), takeWhile(f, cdr(evaluated))) : empty
    }
);

// repeat :: a -> Lazy Pair a
const repeat = delay(
    x => prepend(x, repeat(x))
);

// take :: (Number, Lazy Pair a) -> Lazy Pair a
const take = (n, p) => {
    const innerTake = (n, p) => {
        const evaluated = p();
        return n < 1 || evaluated === empty ? empty : prepend(car(evaluated), innerTake(n - 1, cdr(evaluated)));
    };

    return fromPair(innerTake(n, p));
};

// concat :: (Lazy Pair a, Lazy Pair a) -> Lazy Pair a
const concat = delay(
    (p1, p2) => {
        const evaluated = p1();
        return evaluated === empty ? p2() : prepend(car(evaluated), concat(cdr(evaluated), p2))
    }
);

// mconcat :: [Lazy Pair a] -> Lazy Pair a
const mconcat = r.foldr(r.pcurry(concat, 2))(delayv(empty));

// join :: Lazy Pair (Lazy Pair a) -> Lazy Pair a
const join = r.pcurry(foldr)(r.pcurry(concat, 2), delayv(empty));

// chain :: (Lazy Pair a, (a -> Lazy Pair b)) -> Lazy Pair b
const chain = (p, f) => r.compose(join, r.pcurry(map, 2)(f))(p)

const streamWrapper = p => {

    return ({

    })
}

const a = toArray(fromArray([1, 2, 3, 4]))

// const b = filter(x => x > 2, map(x => x + 0, a));

// console.log(foldl((x, y) => x + y, 0, b))


const c = fromArray(r.range(1, 100));
const d = takeWhile(x => x < 50, c);

// r.pair.logger(toPair(fromArray(a)))

// logger(d);

// const a = fromArray(r.range(1, 1000));

// logger(() => prepend(1, () => empty));
// logger(a);


const q = fromArray([1]);
const t = fromArray([6]);
const w = mconcat([c, d, delayv(empty)])

// const y = fromArray([fromArray([5, 3, 3]), fromArray([1, 1, 1])]);

logger(chain(w, x => fromArray(r.range(1, 19))));
// console.log(car(cdr(w())()));
// logger(join(y))