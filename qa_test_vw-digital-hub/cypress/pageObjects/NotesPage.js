const { NotesSelectors } = require("../selectors/notes");

class NotesPage {
  static open() {
    cy.location("pathname").then(p => {
      if (!/notes/i.test(p)) {
        cy.contains(/notes/i).click({ force: true });
      }
    });
  }

  static listVisible() {
    cy.get("body").then($b => {
      if ($b.find(NotesSelectors.list).length) {
        cy.get(NotesSelectors.list).should("be.visible");
      } else {
        cy.contains(NotesSelectors.card, /.*/).should("exist");
      }
    });
  }

  static clickAdd() {
    cy.get("body").then($b => {
      if ($b.find(NotesSelectors.addBtn).length) {
        cy.get(NotesSelectors.addBtn).click({ force: true });
      } else {
        cy.contains("button", "+").click({ force: true });
      }
    });
  }

  static openCardByTitle(title) {
    cy.contains(NotesSelectors.card, title, { matchCase: false }).first().click({ force: true });
  }

  static assertCard(title) {
    cy.contains(NotesSelectors.card, title, { matchCase: false }).should("exist");
  }

  static assertNotCard(title) {
    cy.contains(NotesSelectors.card, title, { matchCase: false }).should("not.exist");
  }

  static search(query) {
    cy.get("body").then($b => {
      if ($b.find(NotesSelectors.search).length) {
        cy.get(NotesSelectors.search).clear().type(query);
      } else {
        cy.get('input[type="search"], input[placeholder*="search" i]').first().clear().type(query);
      }
    });
  }

  static assertEmptyState() {
    cy.get(NotesSelectors.emptyState).should("be.visible");
  }

  static assertEmptySearch() {
    cy.get(NotesSelectors.emptySearch).should("be.visible");
  }
}

module.exports = NotesPage;
