describe('Orange HRM Test', () => {

  const selectorsList= {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: 'button[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialsAlert: '.oxd-alert-content-text'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type('Admin');
    cy.get(selectorsList.passwordField).type('admin123');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsList.sectionTitleTopBar).should('contain', 'Dashboard');
  });

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type('Test');
    cy.get(selectorsList.passwordField).type('Test');
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialsAlert);
  });






});
