
export class Wiki {
  private page;
  readonly name = 'Wiki';
  readonly url = 'https://www.wikipedia.org';

  constructor(page) {
    this.page = page;
  }

  private locators = {
    hamburgerMenu: '[id="vector-main-menu-dropdown"]',
  };

  getLocator(elementName: string): string | undefined {
    return this.locators[elementName];
  }
}
