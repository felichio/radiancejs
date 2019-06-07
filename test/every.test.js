let r = require("../dist/radiance");



test("function: every -> every(x => x > 3, [1, 2, 3, 4, 5, 6]) === false", () => {
    return expect(r.every(x => x > 3, [1, 2, 3, 4, 5, 6])).toEqual(false);
});


test("function: every (curried) -> every(x => x > 3, [4, 4, 4, 4, 5, 6]) === true", () => {
    return expect(r.every(x => x > 3)([4, 4, 4, 4, 5, 6])).toEqual(true);
});