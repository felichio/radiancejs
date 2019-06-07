let r = require("../dist/radiance");

const result = [1, 2, 3, 4, 5, 6];

test("function: concat -> concat([1, 2, 3], [4, 5, 6]) === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.concat([1, 2, 3], [4, 5, 6])).toEqual(result);
});

test("function: concat (curried) -> concat([1, 2, 3])([4, 5, 6]) === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.concat([1, 2, 3])([4, 5, 6])).toEqual(result);
});
