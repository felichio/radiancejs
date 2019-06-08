const r = require("../dist/radiance");







const a = r.stream.take(1000)(r.stream.map(x => x + 5)(r.stream.repeat(2)));

const b = [];

const c = r.lpair.map(x => x + 15, r.stream(1, 2, 3, 4).getLazyPairContext());

r.stream.join(r.stream([r.stream(1, 2, 3), r.stream(r.range(1, 15))]));



r.lpair.print(r.lpair.take(2)(r.lpair.map(x => "felix5")(r.stream.chain(r.stream("felix", "random"))(x => r.stream([x + 5, x + 10])).getLazyPairContext())))

// r.stream(1, 2, 3, 4, 5).toList().print()

r.stream.print(r.list.toStream(r.stream.toList(r.stream.fromList(r.list(1, 2, 3, 4, 5, 6)))))

r.stream.print(r.stream.take(1000, r.stream.concat(r.stream(r.range(1, 1000)).take(100).takeWhile(x => x < 59), r.stream.repeat("random"))))