let r = require("../dist/radiance");

const testFn = (x, y, z, w) => `x: ${x}, y: ${y}, z: ${z}, w: ${w}`


test("function: curry -> curry(testFn)(1)(2)(3)(4)", () => {
    return expect(r.curry(testFn)(1)(2)(3)(4)).toBe(testFn(1, 2, 3, 4));
});

test("function: curry -> curry(testFn)('aa')('bb')('cc')('dd')", () => {
    return expect(r.curry(testFn)("aa")("bb")("cc")("dd")).toBe(testFn("aa", "bb", "cc", "dd"));
});