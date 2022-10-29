import { formatPrice } from "./numbers";

describe("price formatter", () => {
  test("should format well", () => {
    const number = 12345;
    expect(formatPrice(number)).toMatch(/12.345/);
  });
});
