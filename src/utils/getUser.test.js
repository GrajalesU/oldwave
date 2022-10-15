import {getUser} from "./getUser";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        sub: "114397525599258619867",
        name: "Juan Manuel Grajales Urquijo",
        given_name: "Juan Manuel",
        family_name: "Grajales Urquijo",
        picture:
          "https://lh3.googleusercontent.com/a/ALm5wu2UVhSj7gY31mhDo_JLIHQmIONGPTGcBhVh037R=s96-c",
        email: "juan.grajalesu@gmail.com",
        email_verified: true,
        locale: "es",
      }),
  })
);

const token =
  "ya29.a0Aa4xrXOKdeNmgjbYPi_hjojkyC6LEO_H_cg38p6f3O69eqx4BqgY7YDMh3seRErOEuq2TYRlesUucrmKUkCDgfdNdICiLCFeE8osH6Ar_sWn4VW8X7dkADQNW4PGeMMzGUhKfm0tAZUs4Plqu9THDbZBZsxpaCgYKATASARMSFQEjDvL9ZkgkJ1E60MDPxxfJtVeMaw0163";

beforeEach(() => {
  fetch.mockClear();
});

describe("get google user", () => {
  test("Give the user", async () => {
    const user = await getUser(token);

    expect(user.name).toEqual("Juan Manuel Grajales Urquijo");
  });

  test("handle exception with null", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));

    const user = await getUser(token);
    expect(user).toEqual(null);
  });
});
