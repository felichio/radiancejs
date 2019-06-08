let r = require("../dist/radiance");

const add = (x, y) => x + y;

test("function: reduceRight -> reduceRight(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.reduceRight(add, 0, [1, 2, 3, 4, 5, 6])).toEqual(21);
});


test("function: reduceRight (curried) -> reduceRight(add, 0, [1, 2, 3, 4, 5, 6]) === 21", () => {
    return expect(r.reduceRight(add)(0)([1, 2, 3, 4, 5, 6])).toEqual(21);
});