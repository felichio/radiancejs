let r = require("../dist/radiance");

const result = [1, 2, 3, 1, 2, 3, 1];
const testee = [[1, 2, 3], r.range(1, 4), [], [1]]

test("function: join -> join([[1, 2, 3], r.range(1, 4), [], [1]]) === [1, 2, 3, 1, 2, 3, 1]", () => {
    return expect(r.join(testee)).toEqual(result);
});


test("function: join -> join([r.range(1, 10)]) === [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    return expect(r.join([r.range(1, 10)])).toEqual(r.range(1, 10));
});


