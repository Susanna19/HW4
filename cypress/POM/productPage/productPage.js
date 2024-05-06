import { productPage_locators } from "./productPage_locators";

class ProductPage{
    elements={
        addtoCartButton: () => {return cy.get(productPage_locators.ADD_TO_CART);},
        productPrice: () => {return cy.get(productPage_locators.PRODUCT_PRICE);},
        addtocartmessage: () => {return cy.get(productPage_locators.ADDING_TO_CART_MESSAGE);},
        numberofitems: () => {return cy.get(productPage_locators.numberofitems);}
    }

    addProductToCart(){
        this.elements.addtoCartButton().click();
    }

    getnumberofproducts(){
       return this.elements.numberofitems();
    }

    getProductPrice(){
        return this.elements.productPrice();
    }


}export const productPage = new ProductPage();