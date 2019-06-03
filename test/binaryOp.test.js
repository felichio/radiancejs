let r = require("../dist/radiance");

test("function binaryOp + -> binaryOp('+', 2, 3) = 5", () => {
    return expect(r.binaryOp("+", 2, 3)).toBe(5);
});

test("function binaryOp - -> binaryOp('+', 2, 3) = -1", () => {
    return expect(r.binaryOp("-", 2, 3)).toBe(-1);
});

test("function binaryOp > -> binaryOp('>', 2, 3) = false", () => {
    return expect(r.binaryOp(">", 2, 3)).toBe(false);
});

test("function binaryOp < -> binaryOp('>', 2, 3) = true", () => {
    return expect(r.binaryOp("<", 2, 3)).toBe(true);
});

const mulOf5 = r.binaryOp("*")(5);

test("function binaryOp (*)(5) -> mulOf5(10) = 50", () => {
    return expect(mulOf5(10)).toBe(50);
});


