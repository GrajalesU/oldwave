import { getUser, saveUser } from "./user";
const token = "ya29";

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

const localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

beforeEach(() => {
  fetch.mockClear();
});

describe("save user on localStorage", () => {
  test("set user", async () => {
    saveUser(1);
  });
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
