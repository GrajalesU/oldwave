import { getProduct } from "./api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "iPhone 11",
          description: "(128 Gb) - Negro",
          price: 2999900,
          brand: "Apple",
          city: "Medellín",
          reseller: "Enrique Segoviano",
          reseller_logo:
            "https://rickandmortyapi.com/api/character/avatar/227.jpeg",
          reseller_rating: 4.5,
          imgs: [
            {
              id: 1,
              src: "https://http2.mlstatic.com/D_620519-MLA46153369011_052021-O.jpg",
            },
            {
              id: 2,
              src: "https://http2.mlstatic.com/D_981213-MLA46153369013_052021-O.jpg",
            },
            {
              id: 3,
              src: "https://http2.mlstatic.com/D_990246-MLA46153276373_052021-O.jpg",
            },
            {
              id: 4,
              src: "https://http2.mlstatic.com/D_629642-MLA46153276379_052021-O.jpg",
            },
          ],
        },
      ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("get product of backend", () => {
  test("Give the product", async () => {
    const product = await getProduct("1");

    expect(product.id).toEqual(1);
  });

  test("handle exception with null", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));

    const product = await getProduct("1");
    expect(product).toEqual(null);
  });
});
