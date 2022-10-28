export const getProduct = async (id) => {
  try {
    const response = await fetch(
      "https://oldwave-backend.herokuapp.com/api/product/" + id
    );
    const result = await response.json();
    return result[0];
  } catch (e) {
    return null;
  }
};
