import { shopping_cart_locators } from "./shopping_cart_locators";

class Shopping_Cart{
    elements =
    {
    remove_button: () => {return cy.get(shopping_cart_locators.REMOVE_BUTTON);},

    checkout_button: () => {return cy.get(shopping_cart_locators. CHECKOUT_BUTTON).filter(':visible');},
    adding: () => {return cy.get(shopping_cart_locators.adding).filter(':visible');},
    reduce: () => {return cy.get(shopping_cart_locators.reducing);},
    remove_message: () => {return cy.get(shopping_cart_locators.remove_message).filter(':visible');}, 
    numbers: () => {return cy.get(shopping_cart_locators.number);}
}

proceedtoCheckout(){
this.elements.checkout_button().click();
}

addAmount(){
    this.elements.adding().click();
}

reduceAmount(){
    this.elements.reduce().click();
}

removeItem(){
    this.elements.remove_button().click();
}

bringBack(){
    this.elements.remove_message().click();
}
  
removed(){
    this.elements.remove_message().should('be.visible')
}

getthenumber(){
    return this.elements.numbers();
    }

}
export const shopping_cart = new Shopping_Cart();