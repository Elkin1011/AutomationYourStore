import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";

const homePage = new HomePage();

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

Given('que el usuario tiene productos en su carrito de compras', () => {        
    homePage.selectLaptops();
    homePage.selectMacBookPro();
    homePage.addToCart();
    homePage.openCart();
    homePage.verifyConfirmationMessage();
    homePage.verifyCartQuantity(1);
    homePage.verifyCartTotal('$602.00');
});

When('el usuario hace clic en el botón "Ir al carrito"', () => {
    homePage.proceedToCheckout();
});

Then('el usuario ve los productos agregados en el carrito', () => {
    homePage.verifyCartPage();
    homePage.verifyCartTotal('$602.00');
    homePage.verifyCartQuantity(1);
});

When('el usuario hace clic en "Proceder al pago"', () => {         
    homePage.proceedToCheckout();
}); 

Then('el usuario es redirigido a la página de pago', () => {
    homePage.verifyCheckoutPage();
}); 

When('el usuario ingresa su dirección de envío y métodos de pago', () => {
    homePage.fillShippingInformation('John Doe', '123 Main St', 'Springfield', 'Illinois', '62701', 'United States');
});

When('el usuario revisa la información de la orden', () => {
    homePage.reviewOrder();
});

When('el usuario hace clic en "Confirmar compra"', () => {
    homePage.confirmOrder();
});

Then('el usuario recibe un mensaje de confirmación con el número de orden', () => {
    homePage.verifyConfirmationMessage();            
});

When('se muestra una página de confirmación de la orden', () => {
    homePage.proceedToCheckout();
});