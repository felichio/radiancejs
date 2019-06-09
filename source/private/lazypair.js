/**
 * @description
 *  Implements a lazily evaluated cons cell chain simulating a stream. Provides the core implementation for the streamWrapper object.
 *  You can use this implementation since it is exported, but better use the object alternative, stream.
 * 
 *  ***
 *  You have to procceed with caution when you are consuming a lazy structure or you will end with stack overflow. 
 *  This happens because all the implementation utilizes a recursive approach. If you want to consume a lazy pair without errors,
 *  you can use the unpure tramboline function helper.
 *  ***
 * @signature
 *  lpair a = () => (empty | (a, lpair a))
 * @example
 *  Eg. You can map the lpair structure
 *  const a = fromArray([1, 2, 3, 4]); //-> () => pair(1)(() => pair(2)(() => pair(3)(() => pair(4)(() => empty))))
 *
 *  const b = map(x => x + 5)(a);
 *  //-> () => pair(6)(() => pair(7)(() => pair(8)(() => pair(9)(() => empty))))
 *  // This is the lazy presentation. The structure isn't evaluated until its needed by a consumer
 *
 *  
 *  You can produce infinite lpair
 * 
 *  const c = range(1, infinite);
 *  
 *  Filter them lazily and take the first n results
 *  
 *  const d = lfilter(x => x % 2 === 0)(c);
 *  
 *  const e = take(100)(d);
 *  //-> Consumes the lazy chain of pairs. Creates a new lazy pair structure. Take is greedy, use with caution
 * 
 *  toArray(e);
 *  //-> [2, 4, 6, ..., 200]
 *  
 *
 */



import * as r from "../exporter";

const pair = x => y => s => s(x)(y);

const K = x => y => x;

const I = r.identity;

const car = p => p(K);

const cdr = p => p(K(I));

const empty = null;

const prepend = (x, y) => pair(x)(y);

const delay = fn => (...args) => () => fn(...args);

const delayv = val => () => val;





// foldr :: ((a, b) -> b, b, Lazy Pair a) -> b
const foldr = r.pcurry(
    (f, z, p) => {
        const evaluated = p();
        return evaluated === empty ? z : f(car(evaluated), foldr(f, z, cdr(evaluated)));
    }
);

// foldl :: ((b, a) -> b, b, Lazy Pair a) -> b
const foldl = r.pcurry(
    (f, z, p) => {
        const evaluated = p();
        return evaluated === empty ? z : foldl(f, f(z, car(evaluated)), cdr(evaluated));
    }
);

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
const map = r.pcurry(
    delay(
        (f, p) => {
            const evaluated = p();
            return evaluated === empty ? empty : prepend(f(car(evaluated)), map(f, cdr(evaluated)));
        }
    ), 2
);

// filter :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a  *filter function is greedy, careful stack overflow*
const filter = r.pcurry(
    (f, p) => {
        const innerFilter = (f, p) => {
            const evaluated = p();
            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), innerFilter(f, cdr(evaluated))) : innerFilter(f, cdr(evaluated))
        };

        // return fromArray(r.pair.toArray(innerFilter(f, p)));
        return fromPair(innerFilter(f, p));
    }
);

const lfilter = r.pcurry(
    delay(
        (f, p) => {
            const evaluated = p();
            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), lfilter(f, cdr(evaluated))) : lfilter(f, cdr(evaluated))()
        }
    ), 2
);

const range = delay(
    (start, stop, step = (stop - start) < 0 ? -1 : 1) => {
        return step >= 0 ? (start >= stop ? empty : prepend(start, range(start + step, stop, step)))
                        : (start <= stop) ? empty : prepend(start, range(start + step, stop, step))
    }
);

// takeWhile :: ((a -> Boolean), Lazy Pair a) -> Lazy Pair a
const takeWhile = r.pcurry(
    delay(
        (f, p) => {
            const evaluated = p();
            return evaluated === empty ? empty : f(car(evaluated)) ? prepend(car(evaluated), takeWhile(f, cdr(evaluated))) : empty
        }
    ), 2
);

// repeat :: a -> Lazy Pair a
const repeat = delay(
    x => prepend(x, repeat(x))
);

// take :: (Number, Lazy Pair a) -> Lazy Pair a  *take function is greedy, careful stack overflow*
const take = r.pcurry(
    (n, p) => {
        const innerTake = (n, p) => {
            const evaluated = p();
            return n < 1 || evaluated === empty ? empty : prepend(car(evaluated), innerTake(n - 1, cdr(evaluated)));
        };

        return fromPair(innerTake(n, p));
    }
);

// concat :: (Lazy Pair a, Lazy Pair a) -> Lazy Pair a
const concat = r.pcurry(
    delay(
        (p1, p2) => {
            const evaluated = p1();
            return evaluated === empty ? p2() : prepend(car(evaluated), concat(cdr(evaluated), p2))
        }
    ), 2
);

// mconcat :: [Lazy Pair a] -> Lazy Pair a
const mconcat = r.foldr(concat)(delayv(empty));

// zip :: (Lazy Pair a, Lazy Pair b) -> Lazy Pair [a, b]
const zip = r.pcurry(
    delay(
        (p1, p2) => {
            const evaluated1 = p1();
            const evaluated2 = p2();
            return evaluated1 === empty || evaluated2 === empty ? empty : prepend([car(evaluated1), car(evaluated2)], zip(cdr(evaluated1), cdr(evaluated2)));
        }
    ), 2
);

// join :: Lazy Pair (Lazy Pair a) -> Lazy Pair a
const join = r.pcurry(foldr)(r.pcurry(concat, 2), delayv(empty));

// chain :: (Lazy Pair a, (a -> Lazy Pair b)) -> Lazy Pair b
const chain = r.pcurry((p, f) => r.compose(join, map(f))(p));


// tramboline :: (a -> (), Lazy Pair a) -> Lazy Pair a *tramboline greedy implementation, Utilizes while loop because of TCO absence*
const tramboline = r.pcurry(
    (f, p) => {
        const init = p;
        let evaluated;
        while ((evaluated = p()) !== empty) {
            f(car(evaluated));
            p = cdr(evaluated);
        }
        return init;
    }
);

const print = tramboline(console.log.bind(console));

export {
    empty,
    delay,
    delayv,
    prepend,
    fromArray,
    fromPair,
    toPair,
    concat,
    mconcat,
    foldl,
    foldr,
    toArray,
    map,
    filter,
    lfilter,
    takeWhile,
    zip,
    join,
    chain,
    tramboline,
    print,
    take,
    repeat,
    range
}