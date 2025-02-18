require('cypress-xpath');

class CartPage {

    elements = {
        deleteProductCart: () => cy.get('button[data-original-title="Remove"]').eq(0),
        goToCart: () => cy.get('a[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"]').contains('View Cart'),
        tittleCart: () => cy.get('h1').contains('Shopping Cart'),
        subtitleCart: () => cy.get('p').contains('Your shopping cart is empty!'),
        fileQuantity: () => cy.get('.input-group.btn-block input.form-control'),
        updateQuantity: () => cy.get('button[type="submit"]'),
        confirmMessage: () => cy.get('.alert-success'),
        checkOutButton: () => cy.get('a[class="btn btn-primary"]'),
    }

    validateCartPageAccess() {
        cy.url().should("include", "/cart");
    }

    deleteProductCart() {
        this.elements.deleteProductCart().click();
        cy.wait(2000);
    }

    validateCartEmpty() {
        this.elements.tittleCart().should('exist');
        this.elements.subtitleCart().should('exist');
    }

    addQuantity(quantity) {
        this.elements.fileQuantity().clear();
        this.elements.fileQuantity().type(quantity);
    }

    selectUpdateCart() {
        this.elements.updateQuantity().click();
        cy.wait(2000);
    }

    validateMessageUpdate() {
        this.elements.confirmMessage().should('be.visible');
    }

    validateTotalCart(quantity) {
        this.elements.fileQuantity().should('have.value', quantity);
    }

    selectCheckoutButton() {
        this.elements.checkOutButton().click();
    }
}

export default CartPage;