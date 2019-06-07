let r = require("../dist/radiance");

test("function: divide -> divide(2, 3) = 5", () => {
    return expect(r.divide(2, 3)).toBe(2 / 3);
});

test("function: divide (curried) -> divide(2)(3) = 5", () => {
    return expect(r.divide(2)(3)).toBe(2 / 3);
});
