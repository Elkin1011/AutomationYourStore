require('cypress-xpath');

class ForgottenPasswordPage {

    elements = {
        fileUserName: () => cy.get('#input-email'),
        fileCheckbox: () => cy.get('.pull-right > .btn'),
    }

    typeEmail(email) {
        this.elements.fileUserName().type(email);
    }

    selectContinue() {
        this.elements.fileCheckbox().click();
    }
}

export default ForgottenPasswordPage;