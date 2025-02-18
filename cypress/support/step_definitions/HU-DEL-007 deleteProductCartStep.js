import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import LoginPage from "../../pageObjects/loginPage";
import CategoryPage from "../../pageObjects/categoryPage";
import ProductPage from "../../pageObjects/productPage";
import ResultPage from "../../pageObjects/resultPage";
import CartPage from "../../pageObjects/cartPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const categoryPage = new CategoryPage();
const productPage = new ProductPage();
const resultPage = new ResultPage();
const cartPage = new CartPage();
const productName = "MacBook Pro";

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

Given('que el usuario ha agregado una MacBook Pro al carrito', () => {
    homePage.selectCategoryLaptops();
    homePage.selectOptionShowAll();
    categoryPage.selectProduct(productName);
    productPage.selectAddToCart();
});

When('el usuario accede al carrito de compras', () => {
    productPage.validateProductPageAccess();
    productPage.selectMiniCart();
    productPage.selectViewCart();
});

Then('elimina la MacBook Pro del carrito', () => {
    cartPage.validateCartPageAccess();
    cartPage.deleteProductCart();
    cartPage.validateCartEmpty();
});
    