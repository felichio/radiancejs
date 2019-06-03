const r = require("../dist/radiance");

const a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

test("function: range -> range(1, 20, 2)", () => {
    return expect(r.range(1, 20, 2)).toEqual(a);
});
