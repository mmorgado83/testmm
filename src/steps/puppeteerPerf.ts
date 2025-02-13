import { When } from '@cucumber/cucumber';
import puppeteer from 'puppeteer';
import * as puppeteerFunctions from '../helpers/performance/reportsRelated';
import { delayInSec } from '../helpers/performance/utils'
import { browserObject } from '../helpers/performance/reportsRelated'
import { Wiki} from '../pageobjects/puppeteer/wiki'

const timeout = 90000;
const wikiPage = new Wiki(browserObject.page); 

When(
  'I navigate to {string} page',
  { timeout },
  async function (url: string) {
    browserObject.browser = await puppeteer.launch({headless: true});
    browserObject.page = await browserObject.browser.newPage();
    await browserObject.page.goto(url, {
      waitUntil: 'load'
    });
  }
);

When('I wait for {int} seconds', async function (seconds: number) {
  await delayInSec(seconds);
});

When('I click on {string}', async function (elementName: string) {  
  const locator = wikiPage.getLocator(elementName); 
  await browserObject.page.waitForSelector(locator); 
  await browserObject.page.click(locator);           
});

When(
  'I navigate to {string} on {string} {condition} cache and local storage cleared and generate Navigation performance report',
  { timeout },
  async (url: string, device: string, condition: string) => {
    if (condition === 'with') {
      await puppeteerFunctions.generateNavigationReport(url, 'cold', device);
    } else {
      await puppeteerFunctions.generateNavigationReport(url, 'warm', device);
    }
  }
);

When(
  'I generate Snapshot report',
  { timeout }, async () => {
    await puppeteerFunctions.generateSnapshotReport();
  }
);

When(
  'I generate Timespan report on {string} for {string} flow',
  { timeout }, async (device: string, flowName: string) => {
    const flowMap = {
      "Scroll Page": await puppeteerFunctions.generateTimespanReportForPageScroll(device)
    }
    flowMap[flowName];
  }
);