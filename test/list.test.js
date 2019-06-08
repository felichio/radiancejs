let r = require("../dist/radiance");



test("function: list -> list([1, 2, 3, 4, 5]) === list(1, 2, 3, 4, 5)", () => {
    return expect(r.list([1, 2, 3, 4, 5]).toArray()).toEqual(r.list(1, 2, 3, 4, 5).toArray());
});


test("function: map -> r.list([3, 4, 5]).map(x => x + 1) === [4, 5, 6]", () => {
    return expect(r.list([3, 4, 5]).map(x => x + 1).toArray()).toEqual([4, 5, 6]);
});

test("function: filter -> r.list([3, 4, 5]).filter(x => x > 4) === [5]", () => {
    return expect(r.list([3, 4, 5]).filter(x => x > 4).toArray()).toEqual([5]);
});


test("function: foldl -> r.list([3, 4, 5]).foldl(add, 0) === 12", () => {
    return expect(r.list([3, 4, 5]).foldl(r.add, 0)).toEqual(12);
});

test("function: foldr -> r.list([3, 4, 5]).foldr(add, 0) === 12", () => {
    return expect(r.list([3, 4, 5]).foldr(r.add, 0)).toEqual(12);
});

test("function: toStream -> r.list([3, 4, 5]).toStream().toArray() === r.list(3, 4, 5).toArray()", () => {
    return expect(r.list([3, 4, 5]).toStream().toArray()).toEqual(r.list(3, 4, 5).toArray());
});

test("function: concat -> r.list.concat(r.list([1, 2, 3]), r.list([4, 5, 6])).toArray() === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.list.concat(r.list([1, 2, 3]), r.list(4, 5, 6)).toArray()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("function: mconcat -> r.list.mconcat([r.list([1, 2, 3]), r.list([4, 5, 6])]).toArray() === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.list.mconcat([r.list([1, 2, 3]), r.list(4, 5, 6)]).toArray()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("function: takeWhile -> r.list(1, 2, 3, 4).takeWhile(x => x < 3).toArray() === [1, 2]", () => {
    return expect(r.list(1, 2, 3, 4).takeWhile(x => x < 3).toArray()).toEqual([1, 2]);
});

test("function: zip -> r.list.zip(r.list(1, 2), r.list(3, 4)).toArray() === [[1, 3], [2, 4]]", () => {
    return expect(r.list.zip(r.list(1, 2), r.list(3, 4)).toArray()).toEqual([[1, 3], [2, 4]]);
});

test("function: reverse -> r.list(1, 2, 3, 4).reverse().toArray() === [4, 3, 2, 1]", () => {
    return expect(r.list(1, 2, 3, 4).reverse().toArray()).toEqual([4, 3, 2, 1]);
});

test("function: join -> r.list.join(r.list(r.list(1, 2, 3), r.list(2, 3, 4))).toArray() === [1, 2, 3, 2, 3, 4]", () => {
    return expect(r.list.join(r.list(r.list(1, 2, 3), r.list(2, 3, 4))).toArray()).toEqual([1, 2, 3, 2, 3, 4]);
});

test("function: chain -> r.list(1, 2, 3).chain(x => r.list(x, 4)).toArray() === [1, 4, 2, 4, 3, 4]", () => {
    return expect(r.list.join(r.list(r.list(1, 2, 3), r.list(2, 3, 4))).toArray()).toEqual([1, 2, 3, 2, 3, 4]);
});