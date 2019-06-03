let r = require("../dist/radiance");

test("function: add -> add(2, 3) = 5", () => {
    return expect(r.add(2, 3)).toBe(5);
});

test("function: add (curried) -> add(2)(3) = 5", () => {
    return expect(r.add(2)(3)).toBe(5);
});
