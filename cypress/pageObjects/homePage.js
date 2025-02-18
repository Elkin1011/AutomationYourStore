require('cypress-xpath');

class HomePage {

    elements = {
        buttonMyAccount: () => cy.get('a[title="My Account"]'),
        buttonLogin: () => cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/login"]'),
        buttonRegister: () => cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/register"]'),  
        tittleHomePage: () => cy.get('h1').contains('Your Store'), 
        categoryLaptops: () => cy.get('a[href="http://opencart.abstracta.us:80/index.php?route=product/category&path=18"]').contains('Laptops & Notebooks'),
        optionShowAll: () => cy.get('a[href="http://opencart.abstracta.us:80/index.php?route=product/category&path=18"]').contains('Show All Laptops & Notebooks'),
        searchBarFile: () => cy.get('input[placeholder="Search"]'),
        searchButton: () => cy.get('i[class="fa fa-search"]')
    }

    cleanSite(){
        cy.clearAllCookies();
    }

    selectLogin(){
        this.elements.buttonMyAccount().click();
        this.elements.buttonLogin().click();
    }

    selectRegister(){
        this.elements.buttonMyAccount().click();
        this.elements.buttonRegister().click();
    }

    validateHomePageAccess(){
        cy.url().should("include", "/opencart.abstracta.us");
        this.elements.tittleHomePage().should('exist');
    }

    selectCategoryLaptops(){
        this.elements.categoryLaptops().click();
    }

    selectOptionShowAll(){
        this.elements.optionShowAll().click();
    }

    selectSearchBar(productName){
        this.elements.searchBarFile().type(productName);
    }

    selectButtonSearchBar(){
        this.elements.searchButton().click();
        cy.wait(2000);
    }
}

export default HomePage;




