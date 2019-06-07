let r = require("../dist/radiance");



test("function: filter -> filter(x => x > 3, [1, 2, 3, 4, 5, 6]) === [4, 5, 6]", () => {
    return expect(r.filter(x => x > 3, [1, 2, 3, 4, 5, 6])).toEqual([4, 5, 6]);
});


test("function: filter (curried) -> filter(x => x > 3, [4, 4, 4, 4, 5, 6]) === true", () => {
    return expect(r.filter(x => x > 3)([1, 4, 4, 4, 5, 6])).toEqual([4, 4, 4, 5, 6]);
});