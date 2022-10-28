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

// const prueba = async () => {
//   const sub = "103041095737993934933";
//   const email = "juan.grajalesu@udea.edu.co";
//   const name = "JUAN MANUEL";
//   const lastName = "GRAJALES URQUIJO";

//   const result = await createUser(sub, email, name, lastName);
//   console.log(result);
// };

// await prueba();
