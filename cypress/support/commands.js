Cypress.Commands.add("login", () => {
  cy.request({
    method: "GET",
    url: "https://www.googleapis.com/oauth2/v3/userinfo?access_token=ya29.a0Aa4xrXPJtrlWx6NqeLvJTatVNjHQiADeKIIZyba46ipWqiM5ntd9PSeKcTe6rusM3e5kiRpVi_DyiZ0YkSx7e173J2oO5t0xjQyyLzjHUmK9E1Wxf4xA5D2OtMBHLyjKlW8d0F7NbcBdYvi6A4VivCRKOzwYiQaCgYKATASARISFQEjDvL9XDbBXncMH4XZqUJkipMKCw0165",
  }).then(({ body }) => {
    const user = {
      name: body.name,
      picture: body.picture,
      sub: body.sub,
      email: body.email,
    };

    window.localStorage.setItem("user", JSON.stringify(user));
  });
});
