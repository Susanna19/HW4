import { loginPage } from '../POM/loginPage/loginPage';
import { homePage } from '../POM/homePage/homePage';
import { shopping_cart } from '../POM/shopping_cart/shopping_cart';

/*
Besides shopping cart tests, here also are tests that include functions 
from all POMs
*/

describe('Shopping Cart Functionality', () => {
    beforeEach(() => {
        cy.viewport(3000, 2000);
        cy.visit('https://rouge.am/');
        loginPage.login('asenqzut@gmail.com', 'Qwerty11$');
    });

    it('should handle item amount reduction correctly in the cart', () => {
        homePage.clickBasket();
        let oldAmount;

        shopping_cart.getthenumber().invoke('val').then((amount) => {
            oldAmount = amount;
            shopping_cart.reduceAmount();
        }).then(() => {
            shopping_cart.getthenumber().invoke('val').should((newAmount) => {
                if (oldAmount === '1') {
                    expect(newAmount).to.eq(oldAmount);
                } else {
                    expect(newAmount).to.not.eq(oldAmount);
                }
            });
        });
    });

    it('should handle item amount increasement correctly in the cart', () => {
        homePage.clickBasket();
        let oldAmount;

        shopping_cart.getthenumber().invoke('val').then((amount) => {
            oldAmount = amount;
            shopping_cart.addAmount();
        }).then(() => {
            shopping_cart.getthenumber().invoke('val').should((newAmount) => {
                
                    expect(newAmount).to.not.eq(oldAmount);
            });
        });
    });

    it('should log in, go to cart, increase item amount, and proceed to checkout', () => {
        homePage.clickBasket();
        shopping_cart.addAmount();
        shopping_cart.proceedtoCheckout();
        cy.url().should('include', 'order/make/');
    });

       it('should remove an item from the cart and verify it is removed', () => {
        homePage.clickBasket();
        shopping_cart.removeItem();
        return shopping_cart.removed();
    });


    it('should bring back just deleted item', () => {
        homePage.clickBasket();
        shopping_cart.removeItem();
        shopping_cart.bringBack();
    })
        });
