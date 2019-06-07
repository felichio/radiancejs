let r = require("../dist/radiance");

test("function: multiply -> multiply(2, 3) = 5", () => {
    return expect(r.multiply(2, 3)).toBe(2 * 3);
});

test("function: multiply (curried) -> multiply(2)(3) = 5", () => {
    return expect(r.multiply(2)(3)).toBe(2 * 3);
});
