import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import RegisterPage from "../../pageObjects/registerPage";

const homePage = new HomePage();
const registerPage = new RegisterPage();
const userName = "Elkin";
const lastName = "Rios";
const email = "elkinrios8210@yopmail.com";
const telephone = "1234567890";
const password = "Pruebas123*";
const passwordConfirm = "Pruebas123*";

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
});

Given('que el usuario está en la página de registro', () => {
    homePage.selectRegister();
    registerPage.validateRegisterPage();
});

When('el usuario completa todos los campos obligatorios con datos válidos', () => {
    registerPage.registerUser(userName, lastName, email, telephone, password, passwordConfirm);
});

When('acepta los términos y condiciones', () => {
    registerPage.selectCheckbox();
});

When('hace clic en el botón de Continuar', () => {
    registerPage.selectContinue();
});

Then('el sistema muestra un mensaje de confirmación de registro exitoso', () => {
    registerPage.validateConfirmationMessage();
});