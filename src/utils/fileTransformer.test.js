import { process } from "./fileTransformer";

test("File transformer", () => {
  const res = process("", "src/components");
  expect(res).toBe('module.exports = "components";');
});
