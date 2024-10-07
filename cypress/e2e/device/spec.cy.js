// Define the login function
export function login(username, password) {
    cy.visit("http://localhost:5173");
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#setup-user-drawer-submit").click();
    // cy.screenshot();
  }
  