let r = require("../dist/radiance");

test("function: subtract -> subtract(2, 3) = -1", () => {
    return expect(r.subtract(2, 3)).toBe(-1);
});

test("function: subtract (curried) -> subtract(2)(3) = -1", () => {
    return expect(r.subtract(2)(3)).toBe(-1);
});

