import { login } from "./spec.cy";
describe("export file test", () => {
  
  it("TC8001 User can export excel file", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#excel-download").scrollIntoView();
    cy.get("#excel-download").click();
    cy.contains("Excel file is downloading...").should("be.visible");
    cy.screenshot();
  });

  it("TC8002 User can export Json file", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#json-dowload").scrollIntoView();
    cy.get("#json-dowload").click();
    cy.contains("JSON file is downloading...").should("be.visible");
    cy.screenshot();
  });
});
