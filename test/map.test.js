let r = require("../dist/radiance");



test("function: map -> map(x => x + 5, [1, 2, 3, 4, 5, 6]) === [6, 7, 8, 9, 10, 11, 12]", () => {
    return expect(r.map(x => x + 5, [1, 2, 3, 4, 5, 6])).toEqual([6, 7, 8, 9, 10, 11]);
});


test("function: map (curried) -> map(x => x + 5, [1, 2, 3, 4, 5, 6]) === [6, 7, 8, 9, 10, 11, 12]", () => {
    return expect(r.map(x => x + 5)([1, 2, 3, 4, 5, 6])).toEqual([6, 7, 8, 9, 10, 11]);
});