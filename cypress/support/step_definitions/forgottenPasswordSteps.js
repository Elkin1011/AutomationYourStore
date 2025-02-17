import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/homePage";
import RegisterPage from "../../pageObjects/registerPage";
import LoginPage from "../../pageObjects/loginPage";
import ForgottenPage from "../../pageObjects/forgottenPasswordPage";

let homePage = new HomePage();
let registerPage = new RegisterPage();
let loginPage = new LoginPage();
let forgottenpage = new ForgottenPage();
let email = "elkinrios8210@yopmail.com";    


beforeEach(()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/');

});

Given('que el usuario está en la página de olvidar contraseña', () => {
    homePage.selectLogin()
    loginPage.selectForgottenPassword()

}); 

When('el usuario introduce un correo electrónico válido', () => {
    forgottenpage.typeEmail(email)

});

When('hace clic en Continuar', () => {
    forgottenpage.selectContinue()
    
});

Then('el usuario es redirigido a la página de inicio de sesión', () => {

    loginPage.validateLoginPageAccess()

    }); 


Then('el sistema muestra un mensaje de confirmación de cambio de contraseña enviado', () => { 
 loginPage.validateConfirmationMessage()
}); 
