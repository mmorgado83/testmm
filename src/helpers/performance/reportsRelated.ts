import { createDir, ifDirExist, writeFile } from '../fsActions';
import { Browser, Page } from 'puppeteer';
import lighthouse from 'lighthouse/core/index.cjs';
import {
  desktopFlags,
  mobileFlags
} from '../../config/performanceFlags';
import { formatUrlForFilename } from './utils'

export const browserObject: any = {
  browser: Browser,
  page: Page
};

const desktopOrMobile = {
  desktop: desktopFlags(),
  mobile: mobileFlags()
};

export async function saveHTMLReport(reportName, HTMLreport) {
  const htmlDir = './reports/lighthouse-report-html';
  if (!ifDirExist(htmlDir)) {
    createDir(htmlDir);
  }
  writeFile(`${htmlDir}/${reportName}`, HTMLreport);
}

export async function saveJSONReport(reportName, jsonReport) {
  const dir = './reports/lighthouse-report';
  if (!ifDirExist(dir)) {
    createDir(dir);
  }
  writeFile(`${dir}/${reportName}`, jsonReport);
}


const navigationOptions = (navigationType: 'warm' | 'cold') => ({
  stepName: navigationType === 'warm' ? 'Warm navigation' : 'Cold navigation',
  configContext: navigationType === 'warm' 
    ? { settingsOverrides: { disableStorageReset: true } }
    : undefined,
});

async function generateReport(flow, reportTitle) {  
  const report = await flow.generateReport();
  const flowResult = await flow.createFlowResult();
  const jsonReport = JSON.stringify(flowResult.steps[0]?.lhr, null, 2);
  await saveHTMLReport(`${reportTitle}.html`, report);
  await saveJSONReport(`${reportTitle}.json`, jsonReport);
}

export async function generateNavigationReport(
  url: string, 
  navigationType: 'warm' | 'cold', 
  flags: string
) {
  const formattedUrl = formatUrlForFilename(url);
  const timestamp = new Date().toISOString().replace(/[:]/g, '-').slice(0, 16);
  const reportTitle = `${navigationType} navigation-${formattedUrl}-${timestamp}-${flags}`;

  const flow = await lighthouse.startFlow(browserObject.page, {
    flags: desktopOrMobile[flags],
  });
  await flow.navigate(url, navigationOptions(navigationType));
  await browserObject.browser.close();
  await generateReport(flow, reportTitle);
}

export async function generateSnapshotReport() {
  const timestamp = new Date().toISOString().replace(/[:]/g, '-').slice(0, 16);
  const reportTitle = `snapshot-${timestamp}`;
  const flow = await lighthouse.startFlow(browserObject.page);
  await flow.snapshot();
  await browserObject.browser.close();
  await generateReport(flow, reportTitle);
}

export async function generateTimespanReportForPageScroll(flags: string) {
  const timestamp = new Date().toISOString().replace(/[:]/g, '-').slice(0, 16);
  const reportTitle = `timespan-${timestamp}-${flags}`;
  const session = await browserObject.page.target().createCDPSession();
  const flow = await lighthouse.startFlow(browserObject.page, {
    flags: desktopOrMobile[flags],
  });

  await flow.startTimespan({stepName: 'Scroll page down'});
  await session.send('Input.synthesizeScrollGesture', {
    x: 100,
    y: 600,
    yDistance: -2500,
    speed: 1000,
    repeatCount: 2,
    repeatDelayMs: 250,
  });
  await flow.endTimespan();
  await browserObject.browser.close();
  await generateReport(flow, reportTitle);
}