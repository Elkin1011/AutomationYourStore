import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";

let homePage = new HomePage();

beforeEach(()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/');

});

Given('el usuario está en la página de inicio', () => {
    homePage.selectRegister()   
    registerPage.validateRegisterPage()   
});

