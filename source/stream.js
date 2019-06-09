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
    takeWhile,
    zip,
    join,
    chain,
    tramboline,
    print,
    take,
    repeat
} from "./private/lazypair";

const streamWrapper = p => {
    const wrapped = fn => (...args) => streamWrapper(fn(...args));

    return ({
        // map :: Stream a ⤳ (a -> b) -> Stream a
        map: f => wrapped(map)(f, p),

        // filter :: Stream a ⤳ (a -> Boolean) -> Stream a
        filter: f => wrapped(filter)(f, p),

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

        // join :: Stream (Stream a) ⤳ List a
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

// map :: ((a -> b), Stream a) -> Stream b
stream.map = r.pcurry(
    (f, p) => p.map(f)
);

// filter :: ((a -> Boolean), Stream a) -> Stream a
stream.filter = r.pcurry(
    (f, p) => p.filter(f)
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


