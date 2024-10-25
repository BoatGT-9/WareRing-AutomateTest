import { login } from "./space.cy";
describe("Api-key", () => {
  it("TC10.001 Admin can Create key ", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#create-api-key-btn").click();
    cy.get("#name").type("บ้านไฮเทค");
    cy.get("#description").type("รวมอุปกรณ์ไฮเทค");
    cy.get("#expireIn").type("2024-10-25");
    cy.get("#submit-create-api-key-btn").click();
    cy.contains("Your API key was created").should("exist");
    cy.screenshot();
  });

  
  it("TC10.002 Admin can Delete key", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.contains("Delete").click();
    cy.get("#confirm-delete-api-key").click();
    cy.contains("Deleted your API key").should("exist");
    cy.screenshot();
  });

  it("TC10.003 Admin can't Create API KEY no have name  ",()=>{
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#create-api-key-btn").click();
    cy.get("#name").type("บ้านปลายดิน");
    cy.get("#expireIn").type("2024-10-18");
    cy.get("#submit-create-api-key-btn").click();
    cy.contains("Please provide name and description").should("exist");
    cy.screenshot();
  });

  it("TC10.004 Admin can't Create API KEY no have description ",()=>{
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#create-api-key-btn").click();
    cy.get("#description").type("อุปกรณ์วัดความร้อน");
    cy.get("#expireIn").type("2024-10-18");
    cy.get("#submit-create-api-key-btn").click();
    cy.contains("Please provide name and description").should("exist");
    cy.screenshot();
  })

  it("TC10.005 Admin can search Api key",()=>{
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#search_key").type("จุมเม้");
    cy.contains("จุมเม้").should("exist");
    cy.screenshot();
  })

  it("TC10.006 Admin can filter Sort by Date Oldest",()=>{
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#sort-by-date-select").select("Oldest");
    cy.contains("18/10/2567").should("exist");
    cy.screenshot();
  });

  it("TC10.007 Admin can filter Sort by Date latest",()=>{
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#sort-by-date-select").select("Latest");
    cy.contains("25/10/2567").should("exist");
    cy.screenshot();
  });

  it("TC10.008 Admin can export JSON file", () => {
    login("AdminWareringCaxknsa", "kmsad9ASdjas0LSJWd9iaa");
    cy.get("#toggle-nav-links-dialog-btn").click();
    cy.contains("API Keys").click();
    cy.get("#create-api-key-btn").click();
    cy.get("#name").type("บ้านไฮเทค");
    cy.get("#description").type("รวมอุปกรณ์ไฮเทค");
    cy.get("#expireIn").type("2024-10-18");
    cy.get("#submit-create-api-key-btn").click();
    cy.get("#download-api-key-json-btn").click();
    cy.screenshot();
  });
});
