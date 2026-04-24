import userData from '../fixtures/userData.json';

describe('Orange HRM Test', () => {

  const selectorsList= {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: 'button[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-dashboard-grid > :nth-child(1)',
    wrongCredentialsAlert: '.oxd-alert-content-text',
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    firstnameField: "[name='firstName']",
    lastnameField: "[name='lastName']",
    EmployeeIdField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    employeeotheridField: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    DriverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input ",
    dateFilds: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    dateCloseButton: ".--close",
    saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
  }

  it.only('User Info Update - Success', () => {
    
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstnameField).clear().type('firstnameTest');
    cy.get(selectorsList.lastnameField).clear().type('lastnameTest');
    cy.get(selectorsList.EmployeeIdField).clear().type('idtest');
    cy.get(selectorsList.employeeotheridField).clear().type('otheridtest');
    cy.get(selectorsList.DriverLicenseField).clear().type('driverlicensetest'); 
    cy.get(selectorsList.dateFilds).clear().type('2026-04-24');
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.saveButton).click();
    cy.get('.oxd-toast-close');
  });
  it('Login - Fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialsAlert);
  });






});
