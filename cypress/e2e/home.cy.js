describe("Oldwave", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("frontpage can be opened", () => {
    cy.contains("Oldwave");
  });

  it("Login can be opened", () => {
    cy.contains("inicia sesión").click();
    cy.contains("Login");
  });

  it("User can log into app", () => {
    cy.contains("inicia sesión").click();
    cy.contains("Login");
    cy.login();
    cy.reload();
    cy.contains("Cerrar sesión");
  });

  it("User can search products", () => {
    cy.get('input[placeholder="Estoy buscando..."]').type("a");
    cy.contains("Buscar").click();
    cy.contains("Agregar al carrito");
  });

  it("If product does not exists, app do not show products when user search", () => {
    cy.get('input[placeholder="Estoy buscando..."]').type(
      "this text can't match with any product"
    );
    cy.contains("Buscar").click();
    cy.contains("No se encontraron productos");
  });

  it("User can add products to cart", () => {
    cy.get('input[placeholder="Estoy buscando..."]').type("a");
    cy.contains("Buscar").click();
    cy.contains("Agregar al carrito").click();
    cy.get('img[alt="Icono de carrito de compras"').click();
  });

  it("User can remove products to cart", () => {
    cy.get('input[placeholder="Estoy buscando..."]').type("a");
    cy.contains("Buscar").click();
    cy.contains("Agregar al carrito").click();
    cy.get('img[alt="Icono de carrito de compras"').click();
    cy.contains("-").click();
    cy.contains("SUBTOTAL (0)");
  });

  it("User can buy products", () => {
    cy.login();
    cy.reload();
    cy.get('input[placeholder="Estoy buscando..."]').type("Moto");
    cy.contains("Buscar").click();
    cy.contains("Agregar al carrito").click();
    cy.get('img[alt="Icono de carrito de compras"').click();
    cy.contains("FINALIZAR PEDIDO").click();
  });

  it("User can see his orders", () => {
    cy.login();
    cy.reload();
    cy.contains("Compras").click();
    cy.get("h1").contains("Compras");
  });

  it("If user is not logged, he can not buy", () => {
    cy.get('input[placeholder="Estoy buscando..."]').type("Moto");
    cy.contains("Buscar").click();
    cy.contains("Agregar al carrito").click();
    cy.get('img[alt="Icono de carrito de compras"').click();
    cy.contains("FINALIZAR PEDIDO").click();
    cy.contains("Login");
  });
});
