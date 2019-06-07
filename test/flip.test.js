let r = require("../dist/radiance");

 
 const greet = (fname, lname) => `Hello mr ${fname}. Hello again mr ${lname}`;


test("function: flip -> flip(greet)('chicken', 'turtle') === greet('turtle', 'chicken')", () => {
    return expect(r.flip(greet)('chicken', 'turtle')).toEqual(greet("turtle", "chicken"));
});

test("function: flip -> flip(flip(greet))('chicken', 'turtle') === greet('chicken', 'turtle')", () => {
    return expect(r.flip(r.flip(greet))('chicken', 'turtle')).toEqual(greet('chicken', 'turtle'));
});