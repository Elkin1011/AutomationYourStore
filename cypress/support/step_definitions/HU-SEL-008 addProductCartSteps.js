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
const productName = "Samsung Galaxy";
const quantity = 2;

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

Given('que el usuario ha agregado una tablet Samsung Galaxy al carrito', () => {
    homePage.selectSearchBar(productName);
    homePage.selectButtonSearchBar();
    resultPage.selectProduct();
    productPage.selectAddToCart();
    productPage.validateMessageAddToCart();
});

When('aumenta la cantidad de la tablet Samsung Galaxy a 2', () => { 
    cartPage.addQuantity(quantity);
    cartPage.selectUpdateCart();
});

Then('el total del carrito refleja el precio de 2 unidades de la tablet Samsung Galaxy', () => { 
    cartPage.validateTotalCart(quantity);
});