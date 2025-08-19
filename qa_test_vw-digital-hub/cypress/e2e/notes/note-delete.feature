@notes @delete @automated @VWJIRA-0006
Feature: Notes - Delete

  @delete_confirm
  Scenario Outline: [WEB] Notes - Delete note with confirmation
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<title>"
    When the user opens the note titled "<title>"
    And the user clicks in "Delete"
    And the user confirms the deletion
    Then the note "<title>" is removed from the list

    Examples:
      | credentials | device | title        |
      | guest       | pc     | E2E Seeded 3 |

  @delete_cancel
  Scenario Outline: [WEB] Notes - Cancel deletion keeps the note
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<title>"
    When the user opens the note titled "<title>"
    And the user clicks in "Delete"
    And the user cancels the deletion
    Then the user sees a note card titled "<title>"

    Examples:
      | credentials | device | title        |
      | guest       | pc     | E2E Seeded 3 |
