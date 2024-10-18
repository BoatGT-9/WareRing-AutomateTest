const BASE_URL = "http://localhost:5173";
describe("Admin test", () => {
  // แอ็ดมิน ล็อคอินสำเร็จ
  it("TC9001 Admin login Success Fully ", () => {
    cy.visit(BASE_URL);
    cy.get('#toggle-big-login-landing-drawer-btn').click();
    cy.get('#username').type("AdminWareringCaxknsa");
    cy.get('#password').type("kmsad9ASdjas0LSJWd9iaa");
    cy.get('#setup-user-drawer-submit').click();
    cy.wait(1000);
    cy.contains("User List").should('exist');
    cy.screenshot();
  });
  //   ไม่มีบัญชีใน
  it("TC9002 Login to fail User Not found", () => {
    cy.visit(BASE_URL);
      cy.get('#toggle-big-login-landing-drawer-btn').click();
      cy.get('#username').type("AdminWareringbrabra");
      cy.get('#password').type("kmsad9ASdjas0LSJWd9iaa");
      cy.get('#setup-user-drawer-submit').click();
    cy.contains("not found user").should("exist");
    cy.screenshot();
  });

  //   แอ็ดมิน ใส่รหัสผ่านไม่ถูกต้อง
  it("TC9003 Login to fail Password Not Math", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").type("AdminWareringCaxknsa");
    cy.get("#password").type("kmsad9ASdjas0LSJWd9iaasa");
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Password is incorrect").should("exist");
    cy.wait(1000);
    cy.screenshot();
  });

  // ล็อคอินไม่สำเร็จ ไม่มีชื่อผู้ใช้
  it("TC9004 Login to fail Not have Username", () => {
    cy.visit(BASE_URL);
    cy.get('#toggle-big-login-landing-drawer-btn').click();
    cy.get('#password').type("kmsad9ASdjas0LSJWd9iaa");
    cy.get('#setup-user-drawer-submit').click();
    cy.wait(1000);
    cy.contains("Username is required").should('exist');
    cy.screenshot();
  });

  // ล็อคอินไม่สำเร็จ ไม่มีรหัสผ่าน
  it("TC9005 Login to fail Not have Password  ", () => {
    cy.visit(BASE_URL);
    cy.get('#toggle-big-login-landing-drawer-btn').click();
    cy.get('#username').type("AdminWareringCaxknsa");
    cy.get('#setup-user-drawer-submit').click();
    cy.wait(1000);
    cy.contains("Password is required").should('exist');
    cy.screenshot();
  });

  it("TC9006 Login to fail Password has less than 8 characters ", () => {
    cy.visit(BASE_URL);
    cy.get('#toggle-big-login-landing-drawer-btn').click();
    cy.get('#username').type("AdminWareringCaxknsa");
    cy.get('#password').type("kmsad9");
    cy.get('#setup-user-drawer-submit').click();
    cy.wait(1000);
    cy.contains("password must be longer than or equal to 8 characters").should('exist');
    cy.screenshot();
  });


});
