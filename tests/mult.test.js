const mult = require("../src/mult");

it("returns correct product", () => {
    const result = mult(3,4);
    expect(result).toBe(12);
})