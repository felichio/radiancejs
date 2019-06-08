let r = require("../dist/radiance");

const add = (x, y) => x + y;

test("function: reduce -> reduce(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.reduce(add, 0, [1, 2, 3, 4, 5, 6])).toEqual(21);
});


test("function: reduce (curried) -> reduce(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.reduce(add)(0)([1, 2, 3, 4, 5, 6])).toEqual(21);
});