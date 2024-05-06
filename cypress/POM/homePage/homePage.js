import { homePageLocators } from "./homePageLocators";

class HomePage{

    elements =
    {
    searchInput: () => {return cy.get(homePageLocators.SEARCH_FIELD);},

    searchButton: () => {return cy.get(homePageLocators. SEARCH_BUTTON).filter(':visible');}, 
    basket: () => {return cy.get(homePageLocators.BASKET).filter(':visible');}
}

performSearch(searchInput){
this.elements.searchInput().clear().type(searchInput);
this.elements.searchButton().click()
}

clickBasket(){
    this.elements.basket().click({ multiple: true })
}

}
export const homePage = new HomePage();