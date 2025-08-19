@notes @create @automated @VWJIRA-0004
Feature: Notes - Create

  @create_happy_path @smoke
  Scenario Outline: [WEB] Notes - Create a new note with valid data
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    When the user clicks "+" (create note)
    And the user fills title "<title>" and content "<content>"
    And the user clicks in "Save"
    Then the note "<title>" is added
    And the user sees a note card titled "<title>"

    Examples:
      | credentials | device | title                | content                      |
      | guest       | pc     | E2E New Note <rand>  | This is a note from Cypress. |

@create_validation
Scenario Outline: [WEB] Notes - Cannot create without title (Save is unavailable)
  Given the user has viewport of <device>
  And the user uses authorization of <credentials>
  And the user is in "Notes" screen
  When the user clicks "+" (create note)
  And the user fills content "<content>"
  Then the "Save" button is unavailable for submission

  Examples:
    | credentials | device | content   |
    | guest       | pc     | Body only |
