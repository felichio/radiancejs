let r = require("../dist/radiance");

const add = (x, y) => x + y;

test("function: foldr -> foldr(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.foldr(add, 0, [1, 2, 3, 4, 5, 6])).toEqual(21);
});


test("function: foldr (curried) -> foldr(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.foldr(add)(0)([1, 2, 3, 4, 5, 6])).toEqual(21);
});