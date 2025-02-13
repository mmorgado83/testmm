import { When } from '@cucumber/cucumber';
import { Collection } from '@dcx/qa-taf-core';
import { Locator } from '@playwright/test';

When(
    'I click on each element in {collection}',
    async (collection: Collection) => {
      const allLocators: Locator[] = await collection.actions.getAll();
      for (let i = 0; i < allLocators.length; i++) {
        await allLocators[i].click();
      }
    }
  );
