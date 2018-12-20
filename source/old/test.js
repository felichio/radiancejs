

let compose = require("./compose.js");
let reduce = require("./reduce.js");
let find = require("./find.js");
let pipeline = require("./pipeline");
let map = require("./map");
let every = require("./every");
let some = require("./some");

let _ = require("../dist/radiance");


let add = x => x + 10;

let mul = x => x * 3;

let d = compose(add, mul, x => x + 2);
let f = pipeline(add, mul, x => x + 2);
console.log(d(5));
console.log(f(2));

let a = [1, 10, 3, 4, 5, 23];

console.log(map(f, a));
console.log(map(d, a));
console.log(some(x => x > 23, a));

console.log(_);
