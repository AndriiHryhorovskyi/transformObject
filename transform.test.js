const { transform, transformReverse } = require("./transform");
const testObj = {
  a: { b: "abc", c: "123", d: { e: "f", g: "h" } },
  ab: 45,
  ar: ["item1", "item2"]
};

const transformedTestObj = {
  "a.b": "abc",
  "a.c": "123",
  "a.d.e": "f",
  "a.d.g": "h",
  ab: 45,
  ar: ["item1", "item2"]
};
describe("transform", () => {
  test("1", () => {
    const transformed = transform(testObj);
    expect(transformed).toMatchObject(transformedTestObj);
  });
});

describe("transformReverse", () => {
  test("1", () => {
    const transformed = transformReverse(transformedTestObj);
    return expect(transformed).toMatchObject(testObj);
  });
});
