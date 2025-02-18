const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HomePage from "../../pageObjects/homePage";
import LoginPage from "../../pageObjects/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const userName = 'elkinrios82@yopmail.com';
const password = 'Pruebas123*';

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

Given('que el usuario está en la página de inicio de sesión', () => {
    homePage.cleanSite();
    homePage.selectLogin();
    loginPage.validateLoginPageAccess();
});

When('el usuario introduce un correo electrónico y contraseña válidos', () => {
    loginPage.loginUser(userName, password);
});

When('hace clic en el botón de Iniciar sesión', () => {
    loginPage.clickLoginButton();
});

Then('el usuario es redirigido al Home', () => {
    loginPage.validateAccountPageAccess();
});