require('cypress-xpath');

class RegisterPage {
  
    elements = {
        filename: () => cy.get('#input-firstname'),
        fileLastName: () => cy.get('#input-lastname'),
        fileEmail: () => cy.get('#input-email'),
        fileTelephone: () => cy.get('#input-telephone'),
        filePassword: () => cy.get('#input-password'),
        filePasswordConfirm: () => cy.get('#input-confirm'),
        fileCheckbox: () => cy.get('[type="checkbox"]'), 
        buttonContinue: () => cy.get('.pull-right > .btn'),
        tittleConfirmation: () => cy.get('#content > h1'),
        newsletterYes: () => cy.get('input[name="newsletter"][value="1"]'),
        newsletterNo: () => cy.get('input[name="newsletter"][value="0"]'),
    };

    validateRegisterPage() {
        cy.url().should("include", "/register");
    }

    registerUser(userName, lastName, email, telephone, password, passwordConfirm) {     
        this.elements.filename().type(userName);
        this.elements.fileLastName().type(lastName);
        this.elements.fileEmail().type(email);
        this.elements.fileTelephone().type(telephone); 
        this.elements.filePassword().type(password);
        this.elements.filePasswordConfirm().type(passwordConfirm);
        this.elements.newsletterNo().uncheck({ force: true }); 
        this.elements.newsletterYes().check({ force: true }).should('be.checked');
    }

    selectCheckbox(){
        this.elements.fileCheckbox().check({ force: true }).should('be.checked');
    }

    selectContinue(){
        this.elements.buttonContinue().should('be.enabled').click();
    }

    validateConfirmationMessage(){
        cy.url().should("include", "/success", { timeout: 30000 });
        this.elements.tittleConfirmation().should('have.text', 'Account');    
    }
}

export default RegisterPage;
