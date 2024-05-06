import { loginPage } from '../POM/loginPage/loginPage';

describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.viewport(3000, 2000);
        cy.visit('https://www.rouge.am');
    });

    it('should allow a user to log in with valid credentials', () => {
        loginPage.login('asenqzut@gmail.com', 'Qwerty11$');
        cy.url().should('include', 'login=yes');
    });

    it('should display an error message for invalid login', () => {
        loginPage.login('invalidUser', 'wrongPassword');
        return loginPage.isErrorMessageDisplayed();
        });
    })

