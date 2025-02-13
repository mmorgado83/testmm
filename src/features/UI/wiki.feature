Feature: Example feature for Wiki page
    The goal of this feature file is to show how steps from Core framework (dcx/qa-taf-core) are used for UI tests.

    Scenario: Example test where steps from Core framework are used
        When I navigate to Wiki page
        Then "Title" element css style "font-family" on Wiki page should equal '"Linux Libertine", "Hoefler Text", Georgia, "Times New Roman", Times, serif'
        And Order in "languageOptions" collection should not be deep equal to alphabetical order