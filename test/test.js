let r = require("../dist/radiance");



// r.lpair.print(r.lpair.lfilter(x => x % 2 === 0)(r.lpair.range(0, Infinity)))

// r.stream.range(-1000, -1000000).map(x => x + 1000000).lfilter(x => x % 2 === 0).take(15).print()

r.stream.range(1, 100).chain(x => r.stream.range(100, 200)).lfilter(x => x > 120).take(15).print()