const BASE_URL ="http://localhost:5173/home";
describe("LogOut", () => {
  it("logout website ", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").click();
    cy.get("#username").type("boat");
    cy.get("#password").type("19092545Boat");
    cy.get("#setup-user-drawer-submit").click();
    cy.get("#user-profile-image").click();
    cy.get("#logout-user-btn").click();
    cy.contains("Welcome to Warering IOT Platform").should("exist");
    cy.screenshot();
  });
});
