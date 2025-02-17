require('cypress-xpath');

class homePage {


    elements = {

        buttonMyAccount: () => cy.get('a[title="My Account"]'),
        buttonLogin: () => cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/login"]'),
        buttonRegister: () => cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/register"]'),  
          
    }

    cleanSite(){
        cy.clearAllCookies()
    }

    selectLogin(){
        this.elements.buttonMyAccount().click()
        this.elements.buttonLogin().click()
    }

    selectRegister(){
        this.elements.buttonMyAccount().click()
        this.elements.buttonRegister().click()
    }


}

export default homePage;

