///<reference types="cypress" />
import { user1 } from "../../fixtures/User.json";

const BASE_URL = "http://localhost:5173/";
describe("Login", () => {
  it("login to webpage success fully", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").click();
    cy.get("#username").type("boat");
    cy.get("#password").type("19092545Boat");
    // cy.get('#password').type("19092545Boat")
    // cy.get("#remember-user-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();
    // cy.get("h1").should("contain", "Overview");
    cy.screenshot();

  });
  it("Login to fail when not verify email", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("userName40");
    cy.get(" #password").type("Password1234");
  // cy.get("#remember-user-drawer-checkbox").click();
  cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please verify your e-mail first").should("exist");
    // cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });
  
  it("Login to fail when password is incorrect", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`boat`);
    cy.get(" #password").type(`fkfkfkfk`);
  // cy.get("#remember-user-drawer-checkbox").click();
  cy.get("#setup-user-drawer-submit").click();
    cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });

  
  it("Login to fail when password is not long", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.firstName}`);
    cy.get(" #password").type("pass");
  // cy.get("#remember-user-drawer-checkbox").click();
  cy.wait(2000)
  cy.get("#setup-user-drawer-submit").click();
    cy.contains("password must be longer than or equal to 8 characters").should(
      "exist"
      );
      cy.screenshot();
    });
    
  it("Login to fail no have a username", () => {
      cy.visit(BASE_URL);
      cy.get("#toggle-big-login-landing-drawer-btn").click();
      
      cy.get(" #password").type(`${user1.password}`);
  // cy.get("#remember-user-drawer-checkbox").click();
  cy.get("#setup-user-drawer-submit").click();
      cy.contains("Please provide all value").should("exist");
      cy.screenshot();
    });
    
  it("Login to fail no have a password", () => {
      cy.visit(BASE_URL);
      cy.get("#toggle-big-login-landing-drawer-btn").click();
      cy.get(" #username").type(`${user1.username}`);
          // cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
        cy.contains("Please provide all value").should("exist");
        cy.screenshot();
      });
      
  it("Login to fail not math username", () => {
        cy.visit(BASE_URL);
        cy.get("#toggle-big-login-landing-drawer-btn").click();
        cy.get(" #username").type("Username0@#413212321");
        cy.get(" #password").type("pass");
        //  cy.get("#remember-user-drawer-checkbox").click();
        cy.wait(10000)
        cy.get("#setup-user-drawer-submit").click();
        cy.contains(`username must match`).should("exist");
        cy.screenshot();
      });

    });
    