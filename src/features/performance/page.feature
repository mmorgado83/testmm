@performance
Feature: Wiki page performance

  Scenario Outline: Generate Navigation performance report for Wiki page
      When I navigate to "https://www.wikipedia.org" page
        And I navigate to "https://www.wikipedia.org" on "<formFactor>" <condition> cache and local storage cleared and generate Navigation performance report

    Examples:
      |formFactor|condition|
      |desktop   | with    |
      |mobile    | without |

  Scenario: Generate Snapshot performance report for Wiki page with expanded sidebar menu
    When I navigate to "https://en.wikipedia.org/wiki/Main_Page" page
      And I click on "hamburgerMenu"
      And I generate Snapshot report


  Scenario: Generate Timestamp performance report for Wiki page - "Scroll" flow
    When I navigate to "https://en.m.wikipedia.org/wiki/Cat" page
      And I generate Timespan report on "mobile" for "Page Scroll" flow
