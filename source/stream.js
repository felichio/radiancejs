/**
 * @description
 *  Implements a steam interface through a streamWrapper object. Utilizes a lpair data type (cons cell) for the creation
 *  of a recursively defined, lazy, linked list. Simulates lazy evaluation with the help of functions (thunks)
 *  
 * ***
 *  You have to procceed with caution when you are consuming a lazy structure or you will end with stack overflow. 
 *  This happens because all the implementations are utilizing a recursive approach. If you want to consume a stream without errors,
 *  you can use the unpure tramboline function helper.
 * ***
 * @signature
 *  stream :: ([a] | (a, a, a, a, ...a)) -> Strea a
 * @example
 *  const a = stream([1, 2, 3, 4]) // === stream(1, 2, 3, 4)
 *
 *  Mapping
 *
 *  You can map the stream with a method call:
 *
 *  a.map(x => x + 5);
 *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*
 *
 *  or point-wise call:
 *
 *  stream.map(x => x + 5, a);
 *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*
 *
 *  or curried alternative:
 *
 *  stream.map(x => x + y)(a)
 *  //-> () => cons(6, () => cons(7, () => cons(8, () => cons(9, () => empty))))  *Thunks are evaluated on demand*
 *
 *  Zipping
 *
 *  const b = stream([1, 2, 3, 4]);  // === stream(1, 2, 3, 4)
 *  const c = stream([5, 6, 7, 8]);  // === stream(5, 6, 7, 8) 
 *
 *  b.zip(c);
 *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*
 *
 *  or point-wise call:
 *
 *  stream.zip(b, c);
 *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*
 *
 *  or curried alternative:
 *
 *  stream.zip(b)(c);
 *  //-> () => cons([1, 5], () => cons([2, 6], () => cons([3, 7], () => cons([4, 8], () => empty))))  *Thunks are evaluated on demand*
 * 
 *  You can operate on infinite streams like this
 * 
 *  const n1 = stream.range(1, Infinity);
 *  const n2 = stream.map(x => -x)(n1);
 *  const n3 = stream.lfilter(x => x % 2 === 0)(n2);
 *  const n4 = stream.take(100)(n3);
 *  stream.print(n4);
 *  //-> -2 -4 -6 ... -200
 * 
 *  Or you can use chaining
 *  stream.range(1, Infinity).map(x => -x).lfilter(x => x % 2 === 0).take(100).print();
 *  //-> -2 -4 -6 ... -200
 * 
 *  Convert it to Arrays
 *  stream.range(100, 200000).take(100).toArray();
 *  //-> [100, 101, ..., 199]
 */


import * as r from "./exporter";
import {
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
} from "./private/lazypair";

const streamWrapper = p => {
    const wrapped = fn => (...args) => streamWrapper(fn(...args));

    return ({
        // map :: Stream a ⤳ (a -> b) -> Stream a
        map: f => wrapped(map)(f, p),

        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a *greedy*
        filter: f => wrapped(filter)(f, p),

        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a  *lazy, use with caution cause filtering is not inherently lazy*
        lfilter: f => wrapped(lfilter)(f, p),

        // foldl :: Stream a ⤳ ((b, a) -> b, b) -> b
        foldl: (f, z) => foldl(f, z, p),

        // foldr :: Stream a ⤳ ((a, b) -> b, b) -> b
        foldr: (f, z) => foldr(f, z, p),

        // takeWhile :: Stream a ⤳ (a -> Boolean) -> Stream a
        takeWhile: f => wrapped(takeWhile)(f, p),

        // toArray :: Stream a ⤳ [a]
        toArray: () => toArray(p),

        toList: () => r.compose(r.list.listWrapper, toPair)(p),

        // concat :: Stream a ⤳ Stream a -> Stream a
        concat: r => wrapped(concat)(p, r.getLazyPairContext()),

        // mconcat :: Stream a ⤳ [Stream a] -> Stream a
        mconcat: l => wrapped(concat)(p, r.foldr((x, y) => wrapped(concat)(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(delayv(empty)), l).getLazyPairContext()),

        // zip :: Stream a ⤳ Stream b -> Stream [a, b]
        zip: r => wrapped(zip)(p, r.getLazyPairContext()),

        // take :: Stream a ⤳ Number -> Stream a
        take: n => wrapped(take)(n, p),

        // join :: Stream (Stream a) ⤳ Stream a
        join: () => foldr((x, y) => wrapped(concat)(x.getLazyPairContext(), y.getLazyPairContext()), streamWrapper(delayv(empty)), p),

        // chain :: Stream a ⤳ (a -> Stream b) -> Stream b
        chain: f => wrapped(chain)(p, x => f(x).getLazyPairContext()),

        // tramboline :: Stream a ⤳ (a -> ()) -> Stream a
        tramboline: f => wrapped(tramboline)(f, p),

        // print :: Stream a ⤳ ((), Stream a)
        print: () => wrapped(tramboline)(console.log.bind(console), p),

        // getLazyPairContext :: Stream a ⤳ Lazy Pair a
        getLazyPairContext: () => p,
    });
};

const guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? f(args[0]) : f([]);


const stream = r.composeM(streamWrapper, guardFromArray(fromArray));

// streamWrapper :: Lazy Pair a -> Stream a
stream.streamWrapper = p => streamWrapper(p);

// fromArray :: [a] -> Stream a
stream.fromArray = a => stream(a);

// fromList :: List a -> Stream a
stream.fromList = p => r.compose(streamWrapper, fromPair)(p.getPairContext())

// toList :: Stream a -> List a
stream.toList = p => p.toList();

// toArray :: Stream a -> [a]
stream.toArray = p => p.toArray();

stream.range = r.composeM(streamWrapper, range);

// map :: ((a -> b), Stream a) -> Stream b
stream.map = r.pcurry(
    (f, p) => p.map(f)
);

// filter :: ((a -> Boolean), Stream a) -> Stream a
stream.filter = r.pcurry(
    (f, p) => p.filter(f)
);

// filter :: ((a -> Boolean), Stream a) -> Stream a
stream.lfilter = r.pcurry(
    (f, p) => p.lfilter(f)
);

// foldl :: ((b, a) -> b, b, Stream a) -> b
stream.foldl = r.pcurry(
    (f, z, p) => p.foldl(f, z)
);

// foldr :: ((a, b) -> b, b, Stream a) -> b
stream.foldr = r.pcurry(
    (f, z, p) => p.foldr(f, z)
);

// concat :: (Stream a, Stream a) -> Stream a
stream.concat = r.pcurry(
    (p1, p2) => p1.concat(p2)
);

// mconcat :: [Stream a] -> Stream a
stream.mconcat = l => streamWrapper(delayv(empty)).mconcat(l);

// takeWhile :: ((a -> Boolean), Stream a) -> Stream a
stream.takeWhile = r.pcurry(
    (f, p) => p.takeWhile(f)
);

stream.take = r.pcurry(
    (n, p) => p.take(n)
);

// zip :: (Stream a, Stream b) -> Stream [a, b]
stream.zip = r.pcurry(
    (p, r) => p.zip(r)
);

// join :: Stream (Stream a) -> Stream a
stream.join = p => p.join();

// chain :: (Stream a, (a -> Stream b)) -> Stream b
stream.chain = r.pcurry(
    (p, f) => p.chain(f)
);

// tramboline :: (a -> (), Stream a) -> Stream a
stream.tramboline = r.pcurry(
    (f, p) => p.tramboline(f)
);

// logger :: (Stream a) -> ((), Stream a)
stream.print = p => p.print();

// getLazyPairContext :: Stream a -> Lazy Pair a
stream.getLazyPairContext = p => p.getLazyPairContext();

stream.repeat = x => stream.streamWrapper(repeat(x));

export default stream;


