class LoginPage {   
    selectorsList() { 
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: 'button[type="submit"]',
            wrongCredentialsAlert: '.oxd-alert-content-text',
        }

        return selectors;
    }

    accesLoginPage() {
        cy.visit('/auth/login');
    }

    loginWithUser(usarname, password) {
        cy.get(this.selectorsList().usernameField).type(usarname);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }

    checkAscessInvalid() {
        cy.get(this.selectorsList().wrongCredentialsAlert);
    }

}


export default LoginPage