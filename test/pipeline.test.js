const r = require("../dist/radiance");

const add5 = r.add(5);
const mul10 = r.multiply(10);
const divide2 = r.pcurry(r.flip(r.divide))(2);

const testfn = r.pipe(add5, mul10, divide2);


r.map((x) => {
    test(`divide2(mul10(add5(${x}))) == pipeline(add5, mul10, divide2)(${x}) == ${testfn(x)}`, () => {
        return expect(divide2(mul10(add5(x)))).toBe(testfn(x));
    })})(r.range(50, 100, 2));
    

