@UI
Feature: Example feature for NpmJS page
    The goal of this feature file is to show how steps from Core framework (dcx/qa-taf-core) are used for UI tests.

    Scenario: Example test where steps from Core framework are used
        When I navigate to NpmJSHome page
        Then "proButton" element should be visible
        And "teamsButton" element should be visible
        And "pricingButton" element should be visible
        And "documentationButton" element should be visible