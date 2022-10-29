import { reducer, USER_DEFAULT } from ".";

describe("User Context", () => {
  test("reducer test", () => {
    expect(reducer({}, null)).toStrictEqual({});
    expect(
      reducer({}, { type: "login", value: { someKey: "someValue" } })
    ).toStrictEqual({ someKey: "someValue" });
    expect(reducer({}, { type: "logout" })).toStrictEqual({ ...USER_DEFAULT });
  });
});
