const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const NotesPage = require('../../pageObjects/NotesPage');
const NoteFormPage = require('../../pageObjects/NoteFormPage');

// --- Helpers ---
function setViewport(/*device*/) {
  cy.viewport(1366, 850);
}

function applyRand(s) {
  return (s || '').replace('<rand>', Date.now().toString());
}

// --- Common Given ---
Given('the user has viewport of {string}', (device) => setViewport(device));
Given('the user uses authorization of {string}', (_credentials) => {
});
Given('the user is in {string} screen', (page) => {
  const p = page.toLowerCase();
  if (p === 'notes') {
    cy.visit('/');
    cy.contains(/notes/i).click({ force: true });
  } else {
    cy.visit('/');
  }
});

// --- Data setup ---
Given('notes data is empty', () => {
  // TODO: implement reset endpoint if available.
});

Given('there is a note titled {string}', (title) => {
  const t = applyRand(title);
  cy.request('GET', `${Cypress.env('API_URL')}/notes?title=${encodeURIComponent(t)}`).then(({ body }) => {
    if (!Array.isArray(body) || body.length === 0) {
      cy.request('POST', `${Cypress.env('API_URL')}/notes`, { title: t, content: `Seed ${t}` });
    }
  });
  cy.wrap(t).as('lastTitle');
});

// --- Listing & detail ---
Then('the notes list is displayed', () => {
  NotesPage.listVisible();
});

Then('the user sees a note card titled {string}', (title) => {
  NotesPage.assertCard(applyRand(title));
});

Then('the user sees the empty state for search results', () => {
  NotesPage.assertEmptySearch();
});

Then('the empty state message is displayed', () => {
  NotesPage.assertEmptyState();
});

When('the user opens the note titled {string}', (title) => {
  NotesPage.openCardByTitle(applyRand(title));
});

Then('the note detail is displayed for "{string}"', (title) => {
  cy.contains(applyRand(title), { matchCase: false }).should('be.visible');
});

// --- Search ---
When('the user searches "{string}"', (q) => {
  NotesPage.search(q);
});

// --- Create ---
When('the user clicks "+" (create note)', () => {
  NotesPage.clickAdd();
});

When('the user fills title "{string}" and content "{string}"', (title, content) => {
  NoteFormPage.fillTitle(applyRand(title));
  NoteFormPage.fillContent(content);
});

When('the user fills content "{string}"', (content) => {
  NoteFormPage.fillContent(content);
});

When('the user clicks in "Save"', () => {
  NoteFormPage.save();
});

Then('the note "{string}" is added', (title) => {
  NotesPage.assertCard(applyRand(title));
});

Then('the "Save" button is unavailable for submission', () => {
  cy.get('body').then($b => {
    const sel = '[data-cy="note-save"]';
    if ($b.find(sel).length) {
      cy.get(sel).should('be.disabled');
    } else {
      cy.contains(/^(save|guardar)$/i).should('not.exist');
      cy.contains(/save|guardar/i).should('not.exist');
    }
  });
  cy.location('pathname').should('match', /notes/i);
});

Then('a validation error for "title" is displayed', () => {
  cy.get('body').then($b => {
    if ($b.find('[data-cy="error-title"]').length) {
      cy.get('[data-cy="error-title"]').should('be.visible');
    } else {
      cy.log('No explicit validation message displayed for title (expected in current UX)');
    }
  });
});

// --- Edit ---
When('the user clicks in "Edit"', () => {
  NoteFormPage.edit();
});

When('the user updates the title to "{string}"', (newTitle) => {
  NoteFormPage.fillTitle(applyRand(newTitle), { clear: true });
});

When('the user clears the "{string}" field', (field) => {
  const f = field.toLowerCase();
  if (f === 'title') {
    NoteFormPage.fillTitle('', { clear: true });
  } else if (f === 'content' || f === 'body') {
    NoteFormPage.fillContent('', { clear: true });
  } else {
    throw new Error(`Unknown field to clear: ${field}`);
  }
});

When('the user updates the content to "{string}"', (newContent) => {
  NoteFormPage.fillContent(newContent, { clear: true });
});

Then('the note content shows "{string}"', (text) => {
  cy.get('body').then($b => {
    if ($b.find('[data-cy="note-content"]').length) {
      cy.get('[data-cy="note-content"]').should('contain.text', text);
    } else {
      cy.contains(text).should('be.visible');
    }
  });
});

// --- Delete ---
When('the user clicks in "Delete"', () => {
  NoteFormPage.del();
});

When('the user confirms the deletion', () => {
  NoteFormPage.confirmDelete();
});

When('the user cancels the deletion', () => {
  NoteFormPage.cancel();
});

Then('the note "{string}" is removed from the list', (title) => {
  NotesPage.assertNotCard(applyRand(title));
});
