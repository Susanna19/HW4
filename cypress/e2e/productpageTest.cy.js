import { productPage } from '../POM/productPage/productPage';
import { loginPage } from '../POM/loginPage/loginPage';
import { homePage } from '../POM/homePage/homePage';
import { shopping_cart } from '../POM/shopping_cart/shopping_cart';


describe('Product Price Tests', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('https://rouge.am/product/black-opium-red-edp-36/');
    });

    it('should display a non-empty price for the product', () => {
        productPage.getProductPrice().invoke('text').then((price) => {
            expect(price).to.not.be.null;
        });
    });


});

describe('Add Product to Cart Test', () => {
    beforeEach(() => {
        cy.viewport(3000, 2000);
        cy.visit('https://rouge.am/');
        loginPage.login('asenqzut@gmail.com', 'Qwerty11$');
    });

    it('should add a product to the cart and verify the cart amount changes', () => {
     homePage.performSearch('estee');
        let oldAmount;

        productPage.getnumberofproducts().invoke('val').then((amount) => {
            oldAmount = amount;
            productPage.addProductToCart();
        }).then(() => {
            productPage.getnumberofproducts().invoke('val').should((newAmount) => {
                
                    expect(newAmount).to.not.eq(oldAmount);
            });
        });
    });

});

