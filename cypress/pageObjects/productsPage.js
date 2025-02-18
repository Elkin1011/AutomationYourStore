require('cypress-xpath');

class ProductPage {

    elements = {
        tittleProduct: () => cy.get('h1'),
        quantityProducts: () => cy.get('div[class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"]'),
        addToCartButton: () => cy.get('#button-cart'),
        messageAddToCart: () => cy.get('div[class="alert alert-success alert-dismissible"]'),
        miniCart: () => cy.get('#cart-total'),
        dropDownMiniCart: () => cy.get('ul[class="dropdown-menu pull-right"]'),
        nameProductDropDownMiniCart: () => cy.get('td[class="text-left"]'),
        goToCart: () => cy.get('a[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"]').contains('View Cart'),
    }

    validateProductPageAccess(){
        cy.url().should("include", "/product");
    }

    selectProduct(productName){
        cy.xpath('//a[contains(text(),"' + productName + '")]').click({force: true});
    }

    selectAddToCart(){
        this.elements.addToCartButton().click();
        cy.wait(2000);
    }

    validateMessageAddToCart(){
        this.elements.messageAddToCart().should('be.visible');
    }

    validateIconMiniCart(){
        this.elements.miniCart().should('contain.text', '1 item(s)');
    }

    validateMiniCart(){
        this.elements.miniCart().click();
        this.elements.dropDownMiniCart().should('be.visible');
    }

    selectMiniCart(){
        this.elements.miniCart().click();
    }

    selectViewCart(){
        this.elements.goToCart().click();
    }
}

export default ProductPage;