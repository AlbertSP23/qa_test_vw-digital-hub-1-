const HomePage = require("../../pageObjects/HomePage");
const NotesPage = require("../../pageObjects/NotesPage");

function setViewport(device) {
  cy.viewport(1366, 850);
}

Given("the user has viewport of {string}", (device) => setViewport(device));
Given("the user uses authorization of {string}", (_credentials) => {

});
Given("the user is in home screen", () => {
  HomePage.go();
  HomePage.headerVisible(); 
});

When('the user clicks "Notes"', () => {
  HomePage.goToNotes();
});

Then('the user accesses "Notes" screen', () => {
  cy.location("pathname").should("match", /notes/i);
});

Then("the notes list is displayed", () => {
  NotesPage.listVisible();
});
