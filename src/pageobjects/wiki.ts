import { IPOLocators, POPage, RegisterPage } from '@dcx/qa-taf-core';

@RegisterPage()
export class Wiki extends POPage {
  readonly name = 'Wiki';
  readonly url = 'https://www.wikipedia.org';

  constructor() {
    super();
  }

  get locators(): IPOLocators {
    return {
      languageOptions: '.central-featured-lang strong',
      Title: '.central-textlogo'
    };
  }
}
