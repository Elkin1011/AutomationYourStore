import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import LoginPage from "../../pageObjects/loginPage";
import CategoryPage from "../../pageObjects/categoryPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const categoryPage = new CategoryPage();

beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/');
    cy.intercept('POST', '**/mod_pagespeed_beacon', { statusCode: 204 }).as('ignoreBeacon');
});

Given('el usuario está en la página de inicio', () => {
    homePage.validateHomePageAccess();
});

When('el usuario navega a la sección "Laptops & Notebooks"', () => {
    homePage.selectCategoryLaptops();
});

When('selecciona la opción "Show all laptops & notebooks"', () => {
    homePage.selectOptionShowAll();
});

Then('se muestra la lista completa de laptops y notebooks', () => {
    categoryPage.validateCategoryPageAccess();
});