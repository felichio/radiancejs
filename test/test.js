let r = require("../dist/radiance");



// // r.lpair.print(r.lpair.lfilter(x => x % 2 === 0)(r.lpair.range(0, Infinity)))

// // r.stream.range(-1000, -1000000).map(x => x + 1000000).lfilter(x => x % 2 === 0).take(15).print()

// // console.log(r.lpair.toArray(r.lpair.take(100, r.lpair.lfilter(x => x % 2 === 0)(r.lpair.range(1, Infinity)))));

// // r.stream.range(1, Infinity).map(x => -x).lfilter(x => x % 2 === 0).take(100).print();

// //  const n1 = r.stream.range(1, Infinity);
// //  const n2 = r.stream.map(x => -x)(n1);
// //  const n3 = r.stream.lfilter(x => x % 2 === 0)(n2);
// //  const n4 = r.stream.take(100)(n3);
// //  r.stream.print(n4);

// // console.log(r.stream.range(100, 200000).take(100).toArray())



// r.stream("asd").print()

// const a = r.composeK(x => r.stream(6, 6, 7), x => r.stream(1, 2, 3), x => r.stream([5, 5]));

// // r.stream(6, 6).chain(a).print()

// const list = r.list;
// const stream = r.stream;



// stream.print(list.fromArray(list(1, 2, 3, 4).map(x => x + 5).toArray()))

// // console.log(r.join([[1, 2, 3], [], [4, 5], [6]]));

// console.log(r.chain([])(x => [x]));

// const b = r.lpair.range(1, 10);
// r.lpair.print(b);


// // stream.zip(stream.repeat(3), stream.range(1, Infinity)).takeWhile(x => x[1] < 1000000).print();

// console.log([0, 0, 0].chain(x => [1, 2, 3]));



// const list = r.list;

// // You can call the list constructor with a multiargument approach
// list(1, 2, 3, 4, 5).map(x => x + 5).filter(x => x < 8).reverse().toArray();
// //-> [ 7, 6 ]

// // You can pass an array inside constuctor
// list([1, 2, 3, 4, 5]).map(x => x + 5).filter(x => x < 8).reverse().toArray();
// //-> [ 7, 6 ]

// // You can use a functional approach
// list.toArray(list.reverse(list.filter(x => x < 8)(list.map(x => x + 5)(list(1, 2, 3, 4, 5)))))
// //-> [ 7, 6 ]


// list(r.range(1, 1001)).foldr((x, y) => x + y, 0);
// //-> 500500


// list.mconcat([list(1, 2, 3, 4), list(1, 2, 3), list(4, 5, 6)]);
// //-> Cons(1, Cons(2, Cons(3, Cons(4, Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, Cons(6, empty))))))))))

// list.join(list(list(1, 2, 3), list(4, 5, 6)));
// //-> Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, Cons(6, empty))))))

// list(1, 2, 3).chain(x => list(x, 1)).toArray();
// //-> [ 1, 1, 2, 1, 3, 1 ]

// list(r.range(10, 16)).chain(r.composeK(x => list(x, 2), x => list(x, 1))).toArray();
// //-> [ 10, 2, 1, 2, 11, 2, 1, 2, 12, 2, 1, 2, 13, 2, 1, 2, 14, 2, 1, 2, 15, 2, 1, 2 ]


const pair = r.pair;

// You can manually create a pair like this
const a = pair.prepend(1, pair.prepend(2, pair.prepend(3, pair.empty)));
//-> pair(1, pair(2, pair(3, null)))

pair.print(a);
//-> 1, 2, 3

pair.print(pair.map(x => x + 1)(a));
//-> 2, 3, 4

pair.filter(x => x === 2)(a);
//-> pair(2, null)

pair.fromArray([1, 2, 3, 4]);
//-> pair(1, pair(2, pair(3, pair(4, null))))

pair.zip(pair.fromArray([1, 2, 3]), pair.fromArray([4, 5, 6]));
//-> pair([1, 4], pair([2, 5], pair([3, 6], empty)))

pair.toArray(pair.zip(pair.fromArray([1, 2, 3]), pair.fromArray([4, 5, 6])));
//-> [[1, 4], [2, 5], [3, 6]]

pair.print(pair.chain(pair.fromArray([1, 2, 3]))(x => pair.prepend(x, pair.prepend(1, pair.empty))))