class MyInfoPage {

  selectorsList() {
    const selectors = {
        firstnameField: "[name='firstName']", 
        lastnameField: "[name='lastName']",
        EmployeeIdField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
        employeeotheridField: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
        DriverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input ",
        dateFields: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
        dateCloseButton: ".--close",
        saveButton: 'button[type="submit"]',
        nationalitySelect: '.oxd-select-wrapper',
        genericCombobox:'.oxd-select-text--arrow',
    }

    return selectors;
    
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstnameField).clear().type(firstName);
        cy.get(this.selectorsList().lastnameField).clear().type(lastName);
    
       

    }

    fillemployeeDetails(employeeId, otherId, driverlicenseDate, date  ) {
        cy.get(this.selectorsList().EmployeeIdField).first().clear().type(employeeId);
        cy.get(this.selectorsList().employeeotheridField).clear().type(otherId);
        cy.get(this.selectorsList().DriverLicenseField).first().clear().type(driverlicenseDate); 
        cy.get(this.selectorsList().dateFields).clear().type(date);
        cy.get(this.selectorsList().dateCloseButton).click();

    }

    saveForm() {
        cy.contains('button', 'Save').last().scrollIntoView().click({ force: true });
        cy.get('.oxd-toast', { timeout: 20000 }).should('contain.text', 'Successfully Updated');
    
}
    
    fillStatus(){
        cy.get(this.selectorsList().nationalitySelect).eq(0).click();
        cy.get('.oxd-select-dropdown').contains('Brazilian').click();
        cy.get(this.selectorsList().genericCombobox).eq(2).click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
       
  
    }


}


export default  MyInfoPage 