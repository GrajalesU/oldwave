export const getProduct = (id) => {
  return fetch("https://oldwave-backend.herokuapp.com/api/product/" + id)
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    });
};
