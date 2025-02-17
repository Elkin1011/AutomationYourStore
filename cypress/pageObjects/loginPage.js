require('cypress-xpath');

class loginPage {

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
        this.elements.loginContentPage().should('be.exist') 
    }

    loginUser(userName, password){
        this.elements.fileUserName().type(userName)
        this.elements.filePassword().type(password)
    }

    buttonLogin(){
        this.elements.buttonLogin().click()
    }

    validateAccountPageAccess(){
        cy.url().should("include", "/account")
    }

    selectForgottenPassword(){
    this.elements.getForgottenPassword().click()    

    }

    validateConfirmationMessage(){
    this.elements.tittleConfirmation().should('be.visible') 
}
}

export default loginPage;