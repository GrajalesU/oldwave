Cypress.Commands.add("login", () => {
  const user = {
    email: "juan.grajalesu@udea.edu.co",
    name: "JUAN MANUEL GRAJALES URQUIJO",
    picture:
      "https://lh3.googleusercontent.com/a/ALm5wu3U5sBUH3HEP7Z9o-ZcQTeRTBHFU8R_doGHrBMbRw=s96-c",
    sub: "103041095737993934933",
  };

  window.localStorage.setItem("user", JSON.stringify(user));
});
