import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import LoginPage from "../../pageObjects/loginPage";
import CategoryPage from "../../pageObjects/categoryPage";
import ProductPage from "../../pageObjects/productPage";
import ResultPage from "../../pageObjects/resultPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const categoryPage = new CategoryPage();
const productPage = new ProductPage();
const resultPage = new ResultPage();
const productName = "Samsung Galaxy Tablet";

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

When('el usuario ingresa "Samsung Galaxy Tablet" en la barra de búsqueda', () => { 
    homePage.selectSearchBar(productName);
});

When('hace clic en el botón de búsqueda', () => { 
    homePage.selectButtonSearchBar();
});

Then('se muestran los resultados de búsqueda relacionados con "Samsung Galaxy Tablet"', () => { 
    resultPage.validateResultPageAccess(productName);
});

When('el usuario selecciona una tablet Samsung Galaxy de la lista de resultados', () => { 
    resultPage.selectProduct();
});

When('hace clic en el botón "Agregar al carrito"', () => { 
    productPage.selectAddToCart();
});

Then('la tablet Samsung Galaxy se agrega correctamente al carrito de compras', () => { 
    productPage.validateIconMiniCart();
    productPage.validateMiniCart();
});

Then('se muestra un mensaje de confirmación', () => { 
    productPage.validateMessageAddToCart();
});
