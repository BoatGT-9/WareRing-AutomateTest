// const BASE_URL = "http://localhost:5173";
import { login } from "./Space.cy";
describe("Admin is Active User ", () => {
  it("TC9007 Admin is Banned User", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.contains("User List").should("exist");
    cy.contains("Active").click();
    cy.contains("Banned").should("exist");
    cy.screenshot();
  });

  it("TC9008 Admin is Active User ", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.contains("User List").should("exist");
    cy.contains("Banned").click();
    cy.contains("Active").should("exist");
    cy.screenshot();
  });

  it("TC9009 Admin can search user", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.contains("User List").should("exist");
    cy.get("#search_user").type("boat");
    cy.contains("boat").should("exist");
    cy.screenshot();
  });
});
