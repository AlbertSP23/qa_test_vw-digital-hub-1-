@home @automated @VWJIRA-0001
Feature: Home & Navigation

  @smoke @home_to_notes
  Scenario Outline: [WEB] Home - Open Notes from Home
    Given the user has viewport of <device>
    And the user uses authorization of <credentials>
    And the user is in home screen
    When the user clicks "Notes"
    Then the user accesses "Notes" screen
    And the notes list is displayed

    Examples:
      | credentials | device |
      | guest       | pc     |