@contract
Feature: Products API

  Scenario: POST /query - Querying for a single user by id
      When I create a pact interaction with "get" method and with "/products/10" path and save it as "productInteraction"
      And I have the following state for the "$productInteraction" interaction: "There is Margharita pizza"
      And I add the following expectation for the "$productInteraction" interaction response: "Receiving a single Margharita pizza"
      And I add 200 status code to "$productInteraction" interaction response
      And I add body to "$productInteraction" interaction response:
        """
        {
            "id": 10,
            "type": "pizza",
            "name": "Margharita"
        }
        """
      And I save the "$productInteraction" interaction
      And I create "get" request to mock provider "http://127.0.0.1:8080/products/10" endpoint and save it as "productRequest"
      And I send the "$productRequest" request
    Then the "$productRequest" response should have 200 status code
