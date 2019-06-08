let r = require("../dist/radiance");



test("function: some -> some(x => x > 3, [1, 2, 3, 4, 5, 6]) === true", () => {
    return expect(r.some(x => x > 3, [1, 2, 3, 4, 5, 6])).toBe(true);
});


test("function: some (curried) -> some(x => x < 3, [4, 4, 4, 4, 5, 6]) === false", () => {
    return expect(r.some(x => x < 3)([4, 4, 4, 4, 5, 6])).toBe(false);
});