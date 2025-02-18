require('cypress-xpath');

class ResultPage {

    elements = {
        tittleResult: () => cy.get('h1'),
        quantityProducts: () => cy.get('div[class="product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12"]'),
        nameProductResult: () => cy.get('h4'),
        selectProduct: () => cy.get('.img-responsive').eq(0),
    }

    validateResultPageAccess(productName){
        cy.url().should("include", "/search");
        this.elements.tittleResult().should('contain.text', 'Search - ' + productName);
        this.elements.quantityProducts().should('have.length.gt', 0);
        this.elements.nameProductResult().should('contain.text', productName);
    }

    selectProduct(){
        this.elements.selectProduct().click();
    }
}

export default ResultPage;