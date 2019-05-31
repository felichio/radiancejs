let r = require("../dist/radiance");

test("function: add", () => {
    return expect(r.add(2, 2)).toBe(4);
});

test("function: add (curried)", () => {
    return expect(r.add(2)(2)).toBe(4);
});
