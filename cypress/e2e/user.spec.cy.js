import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';

const loginPage =  new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM Test', () => {

  const selectorsList= {
   
   
    firstnameField: "[name='firstName']", 
    lastnameField: "[name='lastName']",
    EmployeeIdField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    employeeotheridField: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    DriverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input ",
    dateFields: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    dateCloseButton: ".--close",
    saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
    nationalitySelect: '.oxd-select-wrapper',
    genericCombobox:'.oxd-select-text--arrow',
  };

  it.only('User Info Update - Success', () => {
    loginPage.accesLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
    menuPage.acessMyInfo();
 
       
    
    
    cy.get(selectorsList.firstnameField).clear().type('firstnameTest');
    cy.get(selectorsList.lastnameField).clear().type('lastnameTest');
    cy.get(selectorsList.EmployeeIdField).first().clear().type('idtest');
    cy.get(selectorsList.employeeotheridField).clear().type('otheridtest');
    cy.get(selectorsList.DriverLicenseField).first().clear().type('driverlicensetest'); 
    cy.get(selectorsList.dateFields).clear().type('2026-04-24');
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.saveButton).click();
    cy.get(selectorsList.nationalitySelect).eq(0).click();
    cy.get('.oxd-select-dropdown').contains('Brazilian').click();
    cy.get(selectorsList.genericCombobox).eq(2).click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
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
