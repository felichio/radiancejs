/**
 * @description
 *  Implements a list interface through a listWrapper object. Utilizes a pair data type (cons cell) for the creation
 *  of a recursively defined linked list.
 * @signature
 *  list :: ([a] | (a, a, a, a, ...a)) -> List a
 * @example
 *  const a = list([1, 2, 3, 4]) === list(1, 2, 3, 4) // cons(1, cons(2, cons(3, cons(4, empty))))
 *  
 *  You can map the list with a method call:
 * 
 *  a.map(x => x + 5);
 *  //-> cons(6, cons(7, cons(8, cons(9, empty))))
 * 
 *  or point-wise call :
 *  
 *  list.map(a, x => x + 5);
 *  // -> cons(6, cons(7, cons(8, cons(9, empty))))
 */

import * as r from "./exporter";
import {
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
    forEach
} from "./private/pair";



const listWrapper = p => {
    const wrapped = fn => (...args) => listWrapper(fn(...args));
    
    return ({
        // map :: List a ⤳ (a -> b) -> List a
        map: f => wrapped(map)(f, p),

        // filter :: List a ⤳ (a -> Boolean) -> List a
        filter: f => wrapped(filter)(f, p),

        // forEach :: List a ⤳ (a -> ()) -> List a
        forEach: f => wrapped(forEach)(f, p),

        // print :: List a ⤳ () -> List a
        print: () => wrapped(forEach)(x => console.log(x), p),

        // foldl :: List a ⤳ ((b, a) -> b, b) -> b
        foldl: (f, z) => foldl(f, z, p),

        // foldr :: List a ⤳ ((a, b) -> b, b) -> b
        foldr: (f, z) => foldr(f, z, p),

        // toArray :: List a ⤳ [a]
        toArray: () => toArray(p),

        // concat :: List a ⤳ List a -> List a
        concat: r => wrapped(concat)(p, r.getPairContext()),

        // mconcat :: List a ⤳ [List a] -> List a
        mconcat: l => wrapped(concat)(p, r.foldr((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty))(l).getPairContext()),

        // takeWhile :: List a ⤳ (a -> Boolean) -> List a
        takeWhile: f => wrapped(takeWhile)(f, p),

        // zip :: List a ⤳ List b -> List [a, b]
        zip: r => wrapped(zip)(p, r.getPairContext()),

        // reverse :: List a ⤳ List a
        reverse: () => wrapped(reverse)(p),

        // join :: List (List a) ⤳ List a
        join: () => foldr((x, y) => wrapped(concat)(x.getPairContext(), y.getPairContext()), listWrapper(empty), p),

        // chain :: List a ⤳ (a -> List b) -> List b
        chain: f => wrapped(chain)(p, x => f(x).getPairContext()),

        // getPairContext :: List a ⤳ Pair a
        getPairContext: () => p,
    });
};


const guardFromArray = f => (...args) => args.length > 1 ? f(args) : args.length === 1 ? f(args[0]) : f([]);

const list = r.composeM(listWrapper, guardFromArray(fromArray));

// ListWrapper :: Pair a -> List a
list.listWrapper = p => listWrapper(p);
// fromArray :: [a] -> List a
list.fromArray = a => list(a);
// map :: ((a -> b), List a) -> List b
list.map = (f, p) => p.map(f);
// filter :: ((a -> Boolean), List a) -> List a
list.filter = (f, p) => p.filter(f);
// forEach :: (a -> (), List a) -> List a
list.forEach = (f, p) => p.forEach(f);
// logger :: (List a) -> ((), List a)
list.print = p => p.print();
// foldl :: ((b, a) -> b, b, List a) -> b
list.foldl = (f, z, p) => p.foldl(f, z);
// foldr :: ((a, b) -> b, b, List a) -> b
list.foldr = (f, z, p) => p.foldr(f, z);
// toArray :: List a -> [a]
list.toArray = p => p.toArray();
// concat :: (List a, List a) -> List a
list.concat = (p1, p2) => p1.concat(p2);
// mconcat :: [List a] -> List a
list.mconcat = (p, l) => p.mconcat(l);
// takeWhile :: ((a -> Boolean), List a) -> List a
list.takeWhile = (f, p) => p.takeWhile(f);
// zip :: (List a, List b) -> List [a, b]
list.zip = (p, r) => p.zip(r);
// reverse :: List a -> List a
list.reverse = p => p.reverse();
// join :: List (List a) -> List a
list.join = p => p.join();
// chain :: (List a, (a -> List b)) -> List b
list.chain = (p, f) => p.chain(f);
// getPairContext :: List a -> Pair a
list.getPairContext = p => p.getPairContext();

export default list;