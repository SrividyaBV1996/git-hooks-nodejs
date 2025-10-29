const sum = require("../src/sum");

it("returns correct sum", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
})