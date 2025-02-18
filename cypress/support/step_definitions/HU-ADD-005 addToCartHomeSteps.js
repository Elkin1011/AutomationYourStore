import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import LoginPage from "../../pageObjects/loginPage";
import CategoryPage from "../../pageObjects/categoryPage";
import ProductPage from "../../pageObjects/productsPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const categoryPage = new CategoryPage();
const productPage = new ProductPage();
const productName = "MacBook Pro";

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

When('el usuario selecciona el producto "MacBook Pro"', () => { 
    categoryPage.selectProduct(productName);
    productPage.validateProductPageAccess();
});

When('hace clic en el botón "Agregar al carrito"', () => { 
    productPage.selectAddToCart();
});

Then('el producto "MacBook Pro" se agrega exitosamente al carrito de compras', () => { 
    productPage.validateIconMiniCart();
});

Then('se muestra un mensaje de confirmación', () => { 
    productPage.validateMessageAddToCart();
});

Then('el total del carrito refleja el precio del "MacBook Pro"', () => { 
    productPage.validateMiniCart();
});