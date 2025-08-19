@notes @automated @VWJIRA-0002
Feature: Notes - Listing and Details

  @notes_empty_state
  Scenario Outline: [WEB] Notes - Empty state when no notes
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And notes data is empty
    Then the empty state message is displayed
    And the user sees a "Create" or "+" action

    Examples:
      | credentials | device |
      | guest       | pc     |

  @notes_list_render
  Scenario Outline: [WEB] Notes - Render list of existing notes
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<title>"
    Then the notes list is displayed
    And the user sees a note card titled "<title>"

    Examples:
      | credentials | device | title          |
      | guest       | pc     | E2E Seeded 1   |

  @notes_open_detail
  Scenario Outline: [WEB] Notes - Open a note detail
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in "Notes" screen
    And there is a note titled "<title>"
    When the user opens the note titled "<title>"
    Then the note detail is displayed for "<title>"

    Examples:
      | credentials | device | title          |
      | guest       | pc     | E2E Seeded 1   |
