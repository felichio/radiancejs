let r = require("../dist/radiance");



test("function: stream -> stream([1, 2, 3, 4, 5]) === stream(1, 2, 3, 4, 5)", () => {
    return expect(r.stream([1, 2, 3, 4, 5]).toArray()).toEqual(r.stream(1, 2, 3, 4, 5).toArray());
});

test("function: map -> r.stream([3, 4, 5]).map(x => x + 1) === [4, 5, 6]", () => {
    return expect(r.stream([3, 4, 5]).map(x => x + 1).toArray()).toEqual([4, 5, 6]);
});

test("function: filter -> r.stream([3, 4, 5]).filter(x => x > 4) === [5]", () => {
    return expect(r.stream([3, 4, 5]).filter(x => x > 4).toArray()).toEqual([5]);
});


test("function: foldl -> r.stream([3, 4, 5]).foldl(add, 0) === 12", () => {
    return expect(r.stream([3, 4, 5]).foldl(r.add, 0)).toEqual(12);
});

test("function: foldr -> r.stream([3, 4, 5]).foldr(add, 0) === 12", () => {
    return expect(r.stream([3, 4, 5]).foldr(r.add, 0)).toEqual(12);
});

test("function: toList -> r.stream([3, 4, 5]).toList().toArray() === r.list(3, 4, 5).toArray()", () => {
    return expect(r.list([3, 4, 5]).toStream().toArray()).toEqual(r.list(3, 4, 5).toArray());
});

test("function: concat -> r.stream.concat(r.stream([1, 2, 3]), r.stream([4, 5, 6])).toArray() === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.stream.concat(r.stream([1, 2, 3]), r.stream(4, 5, 6)).toArray()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("function: mconcat -> r.stream.mconcat([r.stream([1, 2, 3]), r.stream([4, 5, 6])]).toArray() === [1, 2, 3, 4, 5, 6]", () => {
    return expect(r.stream.mconcat([r.stream([1, 2, 3]), r.stream(4, 5, 6)]).toArray()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("function: takeWhile -> r.stream(1, 2, 3, 4).takeWhile(x => x < 3).toArray() === [1, 2]", () => {
    return expect(r.stream(1, 2, 3, 4).takeWhile(x => x < 3).toArray()).toEqual([1, 2]);
});

test("function: zip -> r.stream.zip(r.stream(1, 2), r.stream(3, 4)).toArray() === [[1, 3], [2, 4]]", () => {
    return expect(r.stream.zip(r.stream(1, 2), r.stream(3, 4)).toArray()).toEqual([[1, 3], [2, 4]]);
});

test("function: take -> r.stream.take(50, r.stream(r.range(1, 1000))).toArray() === r.range(1, 51)", () => {
    return expect(r.stream.take(50, r.stream(r.range(1, 1000))).toArray()).toEqual(r.range(1, 51));
});


test("function: getLazyPairContext -> r.stream.streamWrapper(r.stream(1, 2, 3, 4).getLazyPairContext()).toArray() === [1, 2, 3, 4]", () => {
    return expect(r.stream.streamWrapper(r.stream(1, 2, 3, 4).getLazyPairContext()).toArray()).toEqual([1, 2, 3, 4]);
});

test("function: join -> r.stream.join(r.stream(r.stream(1, 2, 3), r.stream(2, 3, 4))).toArray() === [1, 2, 3, 2, 3, 4]", () => {
    return expect(r.stream.join(r.stream(r.stream(1, 2, 3), r.stream(2, 3, 4))).toArray()).toEqual([1, 2, 3, 2, 3, 4]);
});

test("function: chain -> r.stream(1, 2, 3).chain(x => r.stream(x, 4)).toArray() === [1, 4, 2, 4, 3, 4]", () => {
    return expect(r.stream.join(r.stream(r.stream(1, 2, 3), r.stream(2, 3, 4))).toArray()).toEqual([1, 2, 3, 2, 3, 4]);
});