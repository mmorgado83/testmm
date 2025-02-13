@Visualisation
Feature: Example feature for Wiki page
    The goal of this feature file is to show how steps from Core framework (dcx/qa-taf-core) are used for Visualisation tests.

  Scenario: Example test where visualisation steps from Core framework are used
    When I navigate to Wiki page
    Then I should compare actual and expected "./src/sceenshotReferences/wiki.png" screenshots for Wiki page