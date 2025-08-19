const { HomeSelectors } = require("../selectors/home");

class HomePage {
  static go() {
    cy.visit("/");
  }

  static headerVisible() {
    cy.get(HomeSelectors.header).should("be.visible");
  }

  static goToNotes() {
    cy.get("body").then($b => {
      if ($b.find(HomeSelectors.navNotes).length) {
        cy.get(HomeSelectors.navNotes).click({ force: true });
      } else {
        // Fallback por texto si aún no pusiste data-cy
        cy.contains(/notes/i).click({ force: true });
      }
    });
  }
}

module.exports = HomePage;
