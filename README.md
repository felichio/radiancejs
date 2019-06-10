# radiancejs
Functional Programming in Javascript

[![dependencies](https://david-dm.org/felichio/radiancejs.svg)](https://david-dm.org/felichio/radiancejs)

**_This library was built for educational purposes._**

Briefly, it does 4 things:
1. It contains a bunch of helper higher-order functions (eg. compose, pipe, curry) with more than one implementation (Of course, one is exported by default, but you can study the source code to view the others).
2. It transformes some of the array methods to their curried functional equivalents.
3. It produces a list data structure. It is a recursively defined data structure (purely functional) that resembles a linked list with cons cells.
4. It produces a stream data structure. Stream is a lazy equivalent of the list data structure. It utilizes thunks to simulate the laziness (Nothing new here, you can achieve the same behaviour more efficiently through js generators)


Installation
------------
#### Using it whith Node.js

```bash
$ npm install radiancejs
```

#### Using it directly in the browser:
Firsty navigate to a newly created folder for your project and run the command
```bash
$ npm install radiancejs
```
You can find the distribution files inside the path ./node_modules/radiancejs/dist

```html
<script src="path/to/distributionFiles/radiancejs.js"></script>
```

If for some reason you need the unminified version you have to manually build in development (see building instructions)

Building
--------

Navigate to the node_modules folder of your project and find the radiancejs package. Inside it run the command
```bash
$ npm install
```
to install the development dependencies. Now you can manually add functions to the library. Just create the new file in the source folder and add a record to the exporter.js file (view it to see the pattern).

You can build in production mode with the command

```bash
$ npm run build
```

or in development mode (unminified version)
```bash
$ npm run build-dev
```
Development building creates test/radiance.html. It is preloaded with the library so you can expreriment with it in the browser.

Testing
--------

Navigate to the node_modules folder of your project and find the radiancejs package. Inside it run the command
```bash
$ npm install jest
```
to install the testing suite. You can manually add tests inside the test folder (be sure to adhere to the naming pattern)

To run the test suite
```bash
$ npm run test
```

Usage
--------

You can import the package using a require call

```js
const r = require("radiancejs");

r.map(x => x + 1)([1, 2, 3, 4]);
```

or if you are using a bundler with es6 module support

```js
import * as r from "radiancejs";

r.map(x => x + 1)([1, 2, 3, 4]);
```

In the browser the object is available through the letter **r**
but feel free to use whatever symbol or letter you wish.

```js
const _ = r;

_.map(x => x + 1)([1, 2, 3, 4]);
```

Examples
--------

#### Math operatations
The basic math operations are available as curried functions

*add, subtract, multiply, divide, binaryOp*
```js
const r = require("radiance");

r.add(2, 3);
//-> 5
r.add(2)(3);
//-> 5

const mulWith10 = r.multiply(10);

mulWith10(20);
//-> 200

const biggerThan5 = r.binaryOp(">")(5);

biggerThan5(6);
//-> true
```

#### Fliping and Method decoupling
flip is a simple hof (higher order function) that inverts the arguments of a dual-parameter uncurried function. Unmethodify simple decouples a method from the object context forcing an explicit pass

*flip, unmethod*
```js
const r = require("radiance");

const div = (x, y) => x / y;

div(10, 2);
//-> 5

const flippedDiv = r.flip(div);

flippedDiv(10, 2);
//-> 0.2

const obj = {
    age: 109,
    getAge: function () {
        return this.age;
    }
};

obj.getAge();
//-> 109

const decoupledGetAge = r.unmethod(obj.getAge);

decoupledGetAge(obj);
//-> 109

```

#### Array methods
Some of the array methods are decoupled with the *unmethod* hof and curried

*map, filter, concat, every, some, reduce, reduceRight*
```js
const r = require("radiance");

r.map(x => x + 5, [1, 2, 3, 4, 5]);
//-> [ 6, 7, 8, 9, 10 ]

// even :: Number -> Boolean
const even = x => x % 2 === 0;

r.filter(even)(r.map(x => x + 100)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//-> [ 102, 104, 106, 108, 110 ]
```

#### Folding operations on Arrays and Ranging
You can use the native functional folding operatations with Arrays. And you can create arrays of type [Number] with the range function call

*foldl, foldr, range*
```js
const r = require("radiance");

// add (reducer) :: (Number, Number) -> Number
const add = (x, y) => x + y;

r.foldr(add)(0)([1, 2, 3, 4, 5]);
//-> add(1, add(2, add(3, add(4, add(5, 0)))))
//-> 15

r.foldl(add)(0)([1, 2, 3, 4, 5]);
//-> add(add(add(add(add(0, 1), 2), 3), 4), 5)
//-> 15

r.range(1, 11, 2);
//-> [ 1, 3, 5, 7, 9 ]

r.range(-15, -5);
//-> [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6 ]
```

#### Monadic operations on Arrays
You can use join function to flatten a (one) layer of a self composite Array structure. And you can use the chain function aka flatMap, to feed a function of type a -> [b] to an Array structure of type [a].

_chain function is hooked to the Array.prototype object so it is available as a method call too_

*join, chain*
```js
const r = require("radiance");

r.join([[1, 2, 3], [4, 5], [], [6]]);
//-> [ 1, 2, 3, 4, 5, 6 ]

r.chain([1, 2, 3])(x => ["m", x]);
//-> [ 'm', 1, 'm', 2, 'm', 3 ]

[1, 2, 3].chain(x => ["m", x]);
//-> [ 'm', 1, 'm', 2, 'm', 3 ]
```

#### Composition and Pipelining
You can compose functions using the compose function helper. Pipelining is composition in the reverse order. The M alternatives allows multiple arguments to be passed on the inner funtion. The K alternatives implements the Kleisli composition/pipelining between functions of signature a -> M b, where M is a Monadic type (eg. Array). 

_composeK and pipeK will work only if the monadic type imlements the chain function (as method), You can use it with arrays, lists, and streams (see below)_

*compose, pipe, composeM, pipeM, composeK, pipeK*

```js
const r = require("radiance");

// add5 :: Number -> Number
const add5 = r.add(5);

// mul15 :: Number -> Number
const mul15 = r.multiply(15);

// add5AndMul15 :: Number -> Number
add5AndMul15 = r.compose(mul15, add5);

// mul15AndAdd5 :: Number -> Number
mul15AndAdd5 = r.pipe(mul15, add5);

add5AndMul15(10);
//-> 225

mul15AndAdd5(10);
//-> 155



const a = [10, 11, 12, 13, 14, 15];

a.chain(x => [x, 1]).chain(x => [x, 2])
//-> [ 10, 2, 1, 2, 11, 2, 1, 2, 12, 2, 1, 2, 13, 2, 1, 2, 14, 2, 1, 2, 15, 2, 1, 2 ]

r.chain(a)(r.composeK(x => [x, 2], x => [x, 1]));
//-> [ 10, 2, 1, 2, 11, 2, 1, 2, 12, 2, 1, 2, 13, 2, 1, 2, 14, 2, 1, 2, 15, 2, 1, 2 ]
```

#### Currying and Uncurrying
You can convert a multiparameter function to a stepwise sequence of unary functions with the curry hof. You can also partial curry a function with the pcurry call. Partial currying permits you to pass more than one arguments to the curried function. Uncurrying is the reverse operation.

_if you call curry and pcurry with a function of type (...args) => {} you have to declare the number of parameters the function expects in order to use currying. It is always better to pass functions in their point-wise form when you can_

*curry, uncurry, pcurry*

```js
const r = require("radiance");

// add :: (Number, Number, Number) -> Number
const add = (x, y, z) => x + y + z;

r.curry(add)(1)(2)(3);
//-> 6
r.pcurry(add)(1, 2, 3);
//-> 6
r.pcurry(add)(1, 2)(3);
//-> 6
r.pcurry(add)(1)(2)(3);
//-> 6
r.uncurry(r.curry(add))(1, 2, 3)
//-> 6

const addm = (...args) => r.foldr((x, y) => x + y)(0)(args);

r.curry(addm, 5)(1)(2)(3)(4)(5);
//-> 15
r.pcurry(addm, 5)(1, 2, 3)(4, 5);
//-> 15
r.uncurry(r.curry(addm, 3))(1, 2, 3)
//-> 6
r.uncurry(r.pcurry(addm, 3))(1, 2, 3)
//-> 6

```

#### Lists
List constructor acts as an object wrapper to a recursively defined pair structure that acts as a cons cell. Effectively it wraps a function of type Cons(x, Cons(y, Cons(z, ...))) and creates a new context with available methods. The difference between lists and arrays is that the former is a purely functional persistent data structure and cannot be mutated (Technically in JavaScript you always can but you have to try). The implementation and methods are based strictly on recursion to simulate effectively the functional definition, so for a big number of elements you have to avoid using it or you will end with a stack overflow.

_The list constructor just simulates a LISP list. Use it only for small number of elements (< 5000)_

*list.map, list.filter, list.forEach, list.print, list.foldl, list.foldr, list.toArray, list.toStream, list.concat, list.mconcat, list.takeWhile, list.zip, list.reverse, list.join, list.chain, list.getPairContext*

You can use the above functions in a functional style or as method calls

```js
const r = require("radiance");

const list = r.list;

// You can call the list constructor with a multiargument approach
list(1, 2, 3, 4, 5).map(x => x + 5).filter(x => x < 8).reverse().toArray();
//-> [ 7, 6 ]

// You can pass an array inside constuctor
list([1, 2, 3, 4, 5]).map(x => x + 5).filter(x => x < 8).reverse().toArray();
//-> [ 7, 6 ]

// You can use a functional approach
list.toArray(list.reverse(list.filter(x => x < 8)(list.map(x => x + 5)(list(1, 2, 3, 4, 5)))))
//-> [ 7, 6 ]


list(r.range(1, 1001)).foldr((x, y) => x + y, 0);
//-> 500500


list.mconcat([list(1, 2, 3, 4), list(1, 2, 3), list(4, 5, 6)]);
//-> Cons(1, Cons(2, Cons(3, Cons(4, Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, Cons(6, empty))))))))))

list.join(list(list(1, 2, 3), list(4, 5, 6)));
//-> Cons(1, Cons(2, Cons(3, Cons(4, Cons(5, Cons(6, empty))))))

list(1, 2, 3).chain(x => list(x, 1)).toArray();
//-> [ 1, 1, 2, 1, 3, 1 ]

list(r.range(10, 16)).chain(r.composeK(x => list(x, 2), x => list(x, 1))).toArray();
//-> [ 10, 2, 1, 2, 11, 2, 1, 2, 12, 2, 1, 2, 13, 2, 1, 2, 14, 2, 1, 2, 15, 2, 1, 2 ]

```

#### Pairs
Pair data structure is simply the lambda expression that simulates the cons cell. It is utilized heavily by the list (see above) constructor. In fact every list function call is translated to its pair equivalent with the result of the call, wrapped. The interface of pair functionallity is exported by default so you can play with it but you'd better use the higher level list object. You can transform a list to its pair equivalent with the list.getPairContext function call.

*pair.map, pair.filter, pair.forEach, pair.print, pair.foldl, pair.foldr, pair.fromArray, pair.toArray, pair.concat, pair.mconcat, pair.takeWhile, pair.zip, pair.reverse, pair.join, pair.chain*

```js
const r = require("radiance");

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

pair.chain(pair.fromArray([1, 2, 3]))(x => pair.prepend(x, pair.prepend(1, pair.empty)));
//-> pair(1, pair(1, pair(2, pair(1, pair(3, pair(1, null))))))

```

