import { provider, IProvider, memory } from '@dcx/qa-taf-core';
import {
  BeforeAll,
  Before,
  AfterAll,
  After
} from '@cucumber/cucumber';
import { Pact } from '@pact-foundation/pact';
import path from 'path';
import { config } from './config';
import 'dotenv/config';

let pwProvider: IProvider;
const width = Number(process.env.WIDTH);
const height = Number(process.env.HEIGHT);

export let page: any = {};

BeforeAll(async () => {
  console.log(process.env.CONTRACT);
  if (process.env.CONTRACT === 'yes') {
    const pactProvider = new Pact({
      dir: path.resolve(process.cwd(), 'pact'),
      port: 8080,
      consumer: 'Demo Consumer',
      provider: 'Demo Provider'
    });
    await pactProvider.setup();
    memory.set('mockProvider', pactProvider);
  }
});

Before({ tags: 'not @performance' }, async () => {
  pwProvider = await provider(
    { headless: true },
    { baseURL: config.baseURL }
  );

  page = pwProvider.page;

  if (process.env.MOBILE === 'yes') {
    await page.setViewportSize({
      width,
      height
    });
  }
});

AfterAll(async () => {
  if (process.env.CONTRACT === 'yes') {
    const pactProvider = memory.getValues('$mockProvider') as Pact;
    await pactProvider.writePact();
    await pactProvider.finalize();
  }
});

After({ tags: 'not @performance' }, async () => {
  await pwProvider.browser.close();
});