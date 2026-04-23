describe('Orange HRM Test', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
  });

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Test');
    cy.get('input[name="password"]').type('Test');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert');
  });






});
