import 'cypress-xpath';

class CheckoutPage {

    elements = {
        tittleCheckout: () => cy.get('h1'),
        checkButton: () => cy.get('input[name="payment_address"]').eq(1).check(),
        firstName: () => cy.get('input[placeholder="First Name"]'),
        lastName: () => cy.get('input[placeholder="Last Name"]'),
        company: () => cy.get('input[placeholder="Company"]'),
        address1: () => cy.get('input[placeholder="Address 1"]'),
        address2: () => cy.get('input[placeholder="Address 2"]'),
        city: () => cy.get('input[placeholder="City"]'),
        postCode: () => cy.get('input[placeholder="Post Code"]'),
        country: () => cy.get('select[id="input-payment-country"]'),
        regionState: () => cy.get('select[id="input-payment-zone"]'),
        buttonContinue: () => cy.get('#button-payment-address'),
        buttonContinueShipping: () => cy.get('#button-shipping-address'),
        buttonContinueShippingMethod: () => cy.get('#button-shipping-method'),
        checkTermConditions: () => cy.get('input[name="agree"]'),
        buttonContinuePaymentMethod: () => cy.get('#button-payment-method'),
        buttonConfirmOrder: () => cy.get('input[id="button-confirm"]'),
    }

    validateCheckoutPageAccess() {
        cy.url().should("include", "/checkout");
        this.elements.tittleCheckout().should('exist');
    }

    fillOutForm(firstName, lastName, company, address1, address2, city, postCode, country, regionState) {
        this.elements.checkButton();
        this.elements.firstName().clear().type(firstName);
        this.elements.lastName().clear().type(lastName);
        this.elements.company().clear().type(company);
        this.elements.address1().clear().type(address1);
        this.elements.address2().clear().type(address2);
        this.elements.city().clear().type(city);
        this.elements.postCode().clear().type(postCode);
        this.elements.country().select(country);
        cy.wait(500);
        this.elements.regionState().select(regionState);
        this.elements.buttonContinue().click();
        cy.wait(500);
    }

    deliveryOptionsSelect() {
        this.elements.buttonContinueShipping().click();
        cy.wait(1000);
    }

    deliveryMethodSelect() {
        this.elements.buttonContinueShippingMethod().click();
        cy.wait(1000);
    }

    paymentMethodSelect() {
        this.elements.checkTermConditions().check();
        this.elements.buttonContinuePaymentMethod().click();
        cy.wait(1000);
    }

    confirmOrderSelect() {
        this.elements.buttonConfirmOrder().click();
        cy.wait(3000);
    }
}

export default CheckoutPage;