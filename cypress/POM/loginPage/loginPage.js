import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
    elements = {

        username: () => {return cy.get(loginPageLocators.USERNAME_FIELD);},

        password: () => {return cy.get(loginPageLocators. PASSWORD_FIELD);},

        buttonforlogin: () => {return cy.get(loginPageLocators.BUTTON_LOG).filter(':visible');}, 

        loginButton: () => {return cy.get(loginPageLocators.LOGIN_BUTTON);},

        ERROR_MESSAGE: () => {return cy.get(loginPageLocators.ERROR_MESSAGE);}
    }

    login(username, password){
        this.elements.buttonforlogin().click();
        this.elements.username().clear().type(username);
        this.elements.password().clear().type(password);
        this.elements.loginButton().click();
    }

    isErrorMessageDisplayed() {
     this.elements.ERROR_MESSAGE().should('be.visible')
    }
      
}

export const loginPage = new LoginPage();