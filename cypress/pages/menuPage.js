class MenuPage {

  selectorsList() {
    const selectors = {
      myInfoButton: "My Info",
    }

    return selectors;
  }

  acessMyInfo() {
    cy.contains(this.selectorsList().myInfoButton).click();
  }

}

export default MenuPage;