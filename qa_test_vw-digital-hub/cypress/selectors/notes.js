module.exports = {
    NotesSelectors: {
      // navigation/listing
      list:            '[data-cy="notes-list"]',
      card:            '[data-cy="note-card"]',
      emptySearch:     '[data-cy="empty-search"]',
      addBtn:          '[data-cy="note-add"]',            // botón "+"
  
      // detail / form
      details:         '[data-cy="note-details"]',
      editBtn:         '[data-cy="note-edit"]',
      deleteBtn:       '[data-cy="note-delete"]',
      saveBtn:         '[data-cy="note-save"]',
      cancelBtn:       '[data-cy="cancel"]',
      confirmBtn:      '[data-cy="confirm"]',
  
      // fields
      titleInput:      '[data-cy="note-title-input"]',
      contentInput:    '[data-cy="note-content-input"]',
  
      // validations
      titleError:      '[data-cy="error-title"]'
    }
  };
  