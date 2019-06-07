let r = require("../dist/radiance");

const add = (x, y) => x + y;

test("function: foldl -> foldl(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.foldl(add, 0, [1, 2, 3, 4, 5, 6])).toEqual(21);
});


test("function: foldl (curried) -> foldl(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.foldl(add)(0)([1, 2, 3, 4, 5, 6])).toEqual(21);
});