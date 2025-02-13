import { IPOLocators, POPage, RegisterPage } from '@dcx/qa-taf-core';

@RegisterPage()
export class NpmJSHome extends POPage {
  readonly name = 'NpmJSHome';
  readonly url = '';

  constructor() {
    super();
  }

  get locators(): IPOLocators {
    return {
        proButton: '[id="nav-pro-link"]',
        teamsButton: '[id="nav-teams-link"]',
        pricingButton: '[id="nav-pricing-link"]',
        documentationButton: '[id="nav-docs-link"]'
    };
  }
}
