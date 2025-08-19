const { NotesSelectors } = require("../selectors/notes");

class NoteFormPage {
  static fillTitle(v, { clear = true } = {}) {
    const sel = NotesSelectors.titleInput;
    if (clear) cy.get(sel).clear();
    cy.get(sel).type(v);
  }

  static fillContent(v, { clear = true } = {}) {
    const sel = NotesSelectors.contentInput;
    if (clear) cy.get(sel).clear();
    cy.get(sel).type(v);
  }

  static save() {
    cy.get(NotesSelectors.saveBtn).click({ force: true });
  }

  static edit() {
    cy.get(NotesSelectors.editBtn).click({ force: true });
  }

  static del() {
    cy.get(NotesSelectors.deleteBtn).click({ force: true });
  }

  static confirmDelete() {
    cy.get("body").then($b => {
      if ($b.find(NotesSelectors.confirmBtn).length) {
        cy.get(NotesSelectors.confirmBtn).click({ force: true });
      }
    });
  }

  static cancel() {
    cy.get(NotesSelectors.cancelBtn).click({ force: true });
  }

  static expectTitleValidationError() {
    cy.get(NotesSelectors.titleError).should("be.visible");
  }
}

module.exports = NoteFormPage;
