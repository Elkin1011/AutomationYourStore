require('cypress-xpath');

class LoginPage {

    elements = {
        loginContentPage: () => cy.get('#account-login'),
        fileUserName: () => cy.get('input[id="input-email"]'),
        filePassword: () => cy.get('input[id="input-password"]'),
        buttonLogin: () => cy.get('input[value="Login"]'),
        getForgottenPassword: () => cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/forgotten"]').eq(0),
        tittleConfirmation: () => cy.get('.alert')
    }

    validateLoginPageAccess(){
        cy.url().should("include", "/login");
        this.elements.loginContentPage().should('exist');
    }

    loginUser(userName, password){
        cy.wait(200);
        this.elements.fileUserName().type(userName);
        this.elements.filePassword().type(password);
    }

    clickLoginButton(){
        this.elements.buttonLogin().click();
    }

    validateAccountPageAccess(){
        cy.url().should("include", "/account");
    }

    selectForgottenPassword(){
        this.elements.getForgottenPassword().click();
    }

    validateConfirmationMessage(){
        this.elements.tittleConfirmation().should('be.visible');
    }
}

export default LoginPage;