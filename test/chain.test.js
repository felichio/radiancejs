let r = require("../dist/radiance");

const result = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

test("function: chain -> r.chain(r.range(1, 5))(x => r.range(1, 4))  === [1, 2, 3, 1, 2, 3, 1]", () => {
    return expect(r.chain(r.range(1, 5))(x => r.range(1, 4))).toEqual(result);
});

test("function: chain -> r.chain([], x => [x]) === []", () => {
    return expect(r.chain([], x => [x])).toEqual([]);
});





