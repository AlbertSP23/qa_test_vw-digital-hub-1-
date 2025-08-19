@notes @edit @automated @VWJIRA-0005
Feature: Notes - Edit

  @edit_title
  Scenario Outline: [WEB] Notes - Rename a note
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<fromTitle>"
    When the user opens the note titled "<fromTitle>"
    And the user clicks in "Edit"
    And the user updates the title to "<toTitle>"
    And the user clicks in "Save"
    Then the user sees a note card titled "<toTitle>"

    Examples:
      | credentials | device | fromTitle      | toTitle                 |
      | guest       | pc     | E2E Seeded 2   | E2E Renamed <rand>      |

@notes @edit @automated @VWJIRA-0005
Feature: Notes - Edit

  @edit_validation
  Scenario Outline: [WEB] Notes - Save is unavailable when <field> is empty on edit
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<fromTitle>"
    When the user opens the note titled "<fromTitle>"
    And the user clicks in "Edit"
    And the user clears the "<field>" field
    Then the "Save" button is unavailable for submission

    Examples:
      | credentials | device | fromTitle    | field   |
      | guest       | pc     | E2E Seeded 2 | title   |
      | guest       | pc     | E2E Seeded 2 | content |

  @edit_body_only
  Scenario Outline: [WEB] Notes - Edit only content/body keeps title
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<fromTitle>"
    When the user opens the note titled "<fromTitle>"
    And the user clicks in "Edit"
    And the user updates the content to "<newContent>"
    And the user clicks in "Save"
    Then the user sees a note card titled "<fromTitle>"
    When the user opens the note titled "<fromTitle>"
    Then the note content shows "<newContent>"

    Examples:
      | credentials | device | fromTitle    | newContent                 |
      | guest       | pc     | E2E Seeded 2 | Updated body from Cypress. |
