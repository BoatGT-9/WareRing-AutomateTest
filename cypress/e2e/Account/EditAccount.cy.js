import { login } from "./spec.cy.js";
describe("Profile", () => {
  it("TC7001 view account ", () => {
    login("boat3", "19092545Boat");
    // view account
    cy.get("#user-profile-image").click();
    cy.get("#account-user-drawer-nav-link").click();
    cy.wait(2000);
    cy.screenshot();
  });

  // เปลี่ยนชื่อ สำเร็จ
  it("TC7002 edit account firstName and lastName", () => {
    login("boat3", "19092545Boat");
    // edit Name
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#firstName").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type(`Surapong`);
    cy.get("#lastName").click();
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Keaynin");
    cy.get("#save-update-new-user-info-btn").click();
    cy.contains("Updated your information").should('exist')
    cy.screenshot();
  });

  // ชื่อไม่แมท
  it("TC7003 Edit firstName not match pattern", () => {
    login("boat3", "19092545Boat");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#firstName").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type(`Boat_r`);
    cy.get("#lastName").click();
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Keaynin");
    cy.get("#save-update-new-user-info-btn").click();
    cy.contains("firstName must match ").should('exist')
    cy.screenshot();
  });

  // นามสกุลไม่แมท
  it("TC7004 Edit LastName not match pattern", () => {
    login("boat3", "19092545Boat");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#firstName").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type("boat");
    cy.get("#lastName").click();
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Keaynin_d");
    cy.get("#save-update-new-user-info-btn").click();
    cy.contains("lastName must match ").should('exist')
    cy.screenshot();
  });

  it("TC7005 User can change password ",()=>{
    login("kran","Kumpa12345");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#change-password-btn").click();
    cy.get("#current_password").type("Kumpa12345");
    cy.get("#new_password").type("Kran12345");
    cy.get("#confirm_new_password").type("Kran12345");
    cy.contains("Updated Password").click();
    cy.contains("Updated your password").should('exist');
    cy.screenshot();
  })

  it("TC7006 User not can change password  ",()=>{
    login("kran","Kran12345");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#change-password-btn").click();
    // cy.get("#current_password").type("Kumpa12345");
    cy.get("#new_password").type("Kran12345");
    cy.get("#confirm_new_password").type("Kran12345");
    cy.contains("Updated Password").click();
    cy.contains("current password is required").should('exist');
    cy.screenshot();
  })

  it("TC7007 User not can change password ",()=>{
    login("kran","Kran12345");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#change-password-btn").click();
    cy.get("#current_password").type("Kumpa12345");
    // cy.get("#new_password").type("Kran12345");
    cy.get("#confirm_new_password").type("Kran12345");
    cy.contains("Updated Password").click();
    cy.contains("new password is required").should('exist');
    cy.screenshot();
  })

  it("TC7008 User not can change password ",()=>{
    login("kran","Kran12345");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#change-password-btn").click();
    cy.get("#current_password").type("Kumpa12345");
    cy.get("#new_password").type("Kran12345");
    // cy.get("#confirm_new_password").type("Kran12345");
    cy.contains("Updated Password").click();
    cy.contains("confirm new password is required").should('exist');
    cy.screenshot();
  })
  
  it("TC7009 PasswordNew  to weak ",()=>{
    login("kran","Kran12345");
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();
    cy.get("#change-password-btn").click();
    cy.get("#current_password").type("Kumpa12345");
    cy.get("#new_password").type("12345");
    cy.get("#confirm_new_password").type("12345");
    cy.contains("Updated Password").click();
    cy.contains("PasswordNew too weak").should('exist');
    cy.screenshot();
  })

});
