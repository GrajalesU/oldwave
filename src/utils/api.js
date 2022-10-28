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

export const handleUser = async (sub, email, name, lastname) => {
  const response = await fetch(
    "https://oldwave-backend.herokuapp.com/api/users/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sub,
        email,
        name,
        lastname,
      }),
    }
  );

  const result = await response.json();
  return result;
};