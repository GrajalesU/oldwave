Cypress.Commands.add("login", () => {
  cy.request({
    method: "GET",
    url: "https://www.googleapis.com/oauth2/v3/userinfo?access_token=ya29.a0Aa4xrXP3-XyY_1-hF5cCLofSAk21-jsd-If7Mjj-nfRChTrwxLSVGyjrZFQTHo5QVx8apsDx89cozjt7s-9ZYzQtPiIQA9Ym78zpKF9LHN_CfNAnoHnvqj87hWpNBb-K7H17XjCdC9zjBiVPQS7dyZ1nh4yaDewaCgYKATASARASFQEjDvL9B9h8EX_0U6eJbfeUhAwp5w0166",
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
