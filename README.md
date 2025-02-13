# Seed project for DCX Core Framework

## Folder Structure
### 1. Features
- **Cucumber Feature Files:** Located in the `src/features/` folder, these files contain executable specifications written in Gherkin syntax. Each feature file describes a particular feature of the application under test.
### 2. Step Definitions
- **Step Definition Files:** Located in the `src/steps/` folder, the files there contain the steps that are application specific and are absent in `@dcx/qa-taf-core`
### 3. Pages
- **Page Object Model:** Located in the `src/pageobjects/` folder, these files represent the different pages or components of the application.
### 5. Configuration
- **Configuration Files:** Configuration files are stored in the `src/cucumber/` folder and a root folder. Update these files to set up tests running conditions and environments specific to your project.
### 6. Reports
- **Test Execution Reports:** Cucumber test execution reports are generated and stored in the `reports/` folder. These reports provide insights into test results, including pass/fail status, execution time, and any errors encountered.

## Get started
1. Clone this repository to your local machine.
2. Install dependencies: `npm install`
3. Create page object model files in the `src/pageobjects/` folder to interact with the UI elements.
      - **How to create a new `PO component`:**

1. Install dependencies: `npm install`
2. Run tests: `npm run test -- --tags "@UI"`

Link to the DCX Core Framework: https://source.app.pconnect.biz/projects/DCXENG/repos/dcx-qa-framework-core/browse
Link to Playwright Getting Started Guide: https://wiki.app.pconnect.biz/pages/viewpage.action?spaceKey=DCXATE&title=DCX+COP+QA+-+Playwright+Getting+Started+Guide

        ```typescript
          // pageobjects/header.component.ts
          import { POComponent, IPOLocators } from '@dcx/qa-taf-core';

          export class HeaderComponent extends POComponent {
              name = 'Header Component';
       
              get locators(): IPOLocators {
                  return {
                     'HeaderLogoIcon': '[data-testid="logo"]'
                  };
              }
          }
        ```
        - note: Don't use `@RegisterPage()` on component
     - **How to create a new `PO page`:**
        ```typescript
          // pagebbject/home.page.ts
          import { POPage, RegisterPage, IPOLocators } from "@dcx/qa-taf-core";
   
          @RegisterPage()
          class News extends POPage {              
              readonly name = 'News';
              readonly url = '/news';
       
              get locators(): IPOLocators {
                  return {
                      'NewsPageTitle': '[data-testid="news-pageTitle"]'
                  }
              }
          }
      - **How to use PO component inside PO pages:**
        ```typescript
          @RegisterPage()
          export class Home extends POPage {
             readonly name = 'Home';
             readonly url = '/home';
   
             constructor(private headerComponent: HeaderComponent) {
                super();
             }
   
             get locators(): IPOLocators {
               return {
                   ...this.headerComponent.locators,
                  'HomePageTitle': '[data-testid="home-pageTitle"]'
               };
             }
          }
4. Configurations
   - Initialization `PO` and connection to `cucumber`:   
    Add `require: ['src/{put-your-page-object-path-here}/*.ts'],` in your cucumber.js runner config file. 
   - _Note_:  `{put-your-page-object-path-here}` is your pages where you have used `@RegisterPage()` decorator.
   
    Your final cucumber.js runner should look similar to the below example: 
    ```typescript
      // cucumber.js
      module.exports = {
          default: {
              parallel: 1,
              dryRun: false,
              format: ['progress-bar', 'html:reports/cucumber-report.html', 'json:reports/cucumber-report.json'],
              runFeatures: [`src/features/**/*.feature`],
              paths: [`src/features/**/*.feature`],
              require: ['tsconfig.json', 'src/**/*.ts'],
              requireModule: ['ts-node/register'],
          },
      };
    ```
5. If `@dcx/qa-taf-core` is missing the step required for your test, implement step definitions in the `src/steps/` folder.
```typescript
       import { Element, Collection } from '@dcx/qa-taf-core';
       import { When, Then } from '@cucumber/cucumber';
       import { expect } from 'chai';
       import { memory } from '@dcx/qa-taf-core/build/core/utils/memory';
        
       // Actions
       
       When('I click outside to lose focus on elements', async function () {
         await Element.init('body').actions.click();
       });
       
       When('I click on each element in {collection}', async (collection: Collection) => {
         const allLocators: Locator[] = await collection.actions.getAll();
         for (let i = 0; i < allLocators.length; i++) {
           await allLocators[i].click();
           }
         }
       );

       // Assertions
       
        Then('{string} attribute of {element} should be equal to {string}',
        async (attribute: string, element: Element, expectedValue: string) => {
          const actualValue = await element.actions.getAttribute(attribute);
          expect(actualValue).to.equal(expectedValue);
          }
        );
       
        Then('Order in {element} should be {validation} to alphabetical order',
        async (element: Collection, validation: string) => {
          const actualResult = await element.actions.getAllTexts();
          const expectedResult = [...actualResult].sort();
          await element.expects.verifyText({
            actualResult,
            expectedResult,
            validation
          });
         }
       );
       
       // Memory
       
        When('I remember the text of {element} as {string}',
            async (element: Element, key: string) => {
                const texts: string[] = await element.actions.getAllTexts();
                memory.set(key, text);
            }
        );
```
6. Write feature files in the `src/features/` folder to describe test scenarios using Gherkin syntax.\
  Your `src/features/home.feature` file
  ``` gherkin
        Feature: Home page   
          
          Background:
            Given I navigate to Home page      
            // final url: process.env.BASE_URL/home
            // Will point to 'Home' page: 
            // This step is taken from '@dcx/qa-taf-core'
            // After this step is used, you can use elements of 'Home' page and its components ('HeaderComponent' as an example) directly in the steps below.
            // In case you don't want to navigate to the page, but you are already on that page and want to use that page's elements you should point to the page with the following step: `Given I am on Home page`
          
          Scenario: Header logo should redirect to Home page
            Then "HeaderLogoIcon" element should be visible
            Then "href" attribute of "HeaderLogoIcon" element should be equal to "/home"
         
  ```
7. Run tests: `npm run test` and review reports generated in the `reports/` folder.
8. Refer to the documentation on Confluence for guidance on using and extending the framework:
   - Link to the DCX Core Framework: https://source.app.pconnect.biz/projects/DCXENG/repos/dcx-qa-framework-core/browse
   - Link to Playwright Getting Started Guide: https://wiki.app.pconnect.biz/pages/viewpage.action?spaceKey=DCXATE&title=DCX+COP+QA+-+Playwright+Getting+Started+Guide

## Get started with Contract test (Consumer driven)
Demo Contract tests are based on the following interactive guide: https://killercoda.com/pactflow/scenario/pactflow-getting-started-js
### 1. Run consumer tests
1. Run consumer tests to create a consumer contract `npm run test:consumer`
  - At this point consumer contract is created in `pact` folder
### 2. Publish your contract to pact flow server
1. Create your own PactFlow account (its free) or use pmi one. How to create: 
2. Add PactFlow details to .env file variables
  - `PACT_BROKER_BASE_URL="<your or pmi PactFlow URL>"`
  - `PACT_BROKER_TOKEN="<token from PactFlow UI>"`
3. Publish contract to PactFlow server: `npm run publish:consumer:contract -- --versionNumber 1.0.0-someconsumersha`
  - At this point contract should be visible on PactFlow server
### 3. Verify the contract by the provider
1. Verify the consumer contract in PactFlow by the command `npm run test:provider`
  - At this point contract should be verified on PactFlow side 
### 4. Record deployment (Baseline)
Lets consider contract testing is just being introduced on the project, so we have to record first what is deployed on an environment.
1. Lets tell PactFlow that consumer with version `1.0.0-someconsumersha` is on production with command `npm run record-deployment:consumer`
  - At this point it should be visible on PactFlow that consumer with version `1.0.0-someconsumersha` is on production environment
3. Lets tell PactFlow that provider with version `1.0.0-someprovidersha` is on production with command `npm run record-deployment:provider`
  - At this point it should be visible on PactFlow that provider with version `1.0.0-someprovidersha` is on production environment
### 5. Lets break a contract with a new provider version
1. To see an example of a failing verification, change response of the dummy provider in file `./src/features/Contract_Consumer_Driven/providerSide/dummyProvider/provider` so it will not work as the contract in PactFlow expects. E.g. change "type" property from "pizza" to Hamburger
2. Update provider version in file `./src/features/Contract_Consumer_Driven/providerSide/provider.pact.spec.js` to `1.0.1-someprovidersha`
3. Run `npm run test:provider` again.
  - At this point you should see that you have a passed contract for provider version `1.0.0-someprovidersha` and a failing one for `1.0.1-someprovidersha`
### 6. Can I deploy
To tell if it is safe to deploy a provider version to an environment (e.g. in an automated CI/CD pipeline), we can check if a certain version is compatible or not with already deployed version of consumer(s) on the environment:
1. Check if you could deploy new provider version to production with command: `npm run can-i-deploy:provider -- --version 1.0.1-someprovidersha --to-environment production`˛
  - PactFlow will say not to deploy as provider with version `1.0.1-someprovidersha` has a breaking contract with consumer with version `1.0.0-someconsumersha`  
2. Check if you could deploy old provider version to production with command: `npm run can-i-deploy:provider -- --version 1.0.0-someprovidersha --to-environment production`˛
  - PactFlow will say its safe to deploy as provider with version `1.0.0-someprovidersha` has no breaking contract with consumer with version `1.0.0-someconsumersha`

## Get started with Visual test (with Percy)
Demo Percy test is based on the following guide: https://www.browserstack.com/docs/percy/get-started/first-percy-build

1. Set `PERCY_TOKEN` in `.env` file
   - token can be gathered from PMI Percy web interface (https://percy.io/93e32fa3)
   - New project can be created, or the already existing "Seed project" can be used
2. Run Percy test with `npm run test:percy` command
3. (Optional) As the guide above suggest, change index.html to observe how a test fail looks like in percy
   - Make the following changes to line no. 51 of index.html: `<li class="done">Exercise</li>`
   - Run Percy test again with `npm run test:percy` command
   - Observe result in the terminal and on PMI Percy web interface (https://percy.io/93e32fa3)

## Get started with FE Performance testing (Puppeteer with Lighthouse)
https://github.com/GoogleChrome/lighthouse/blob/main/docs/user-flows.md 
This guide provides an overview of setting up and running frontend (FE) performance tests using **Puppeteer** in combination with **Lighthouse**. It explains the choice of Puppeteer over Playwright, details the types of Lighthouse reports, and discusses the significance of device-specific flags for realistic performance analysis.
---

### **1. Why Lighthouse is Used with Puppeteer and Not Playwright**

Lighthouse is a powerful tool for measuring web performance, accessibility, SEO, and best practices. It integrates seamlessly with Puppeteer, a Node.js library for controlling Chromium-based browsers. While Playwright is an excellent automation tool with cross-browser capabilities, Lighthouse has stronger support for Puppeteer due to the following reasons:

- **Native Puppeteer Integration:** Lighthouse relies on Puppeteer as its default automation layer, ensuring smoother and more stable testing without compatibility issues.
- **Headless Chromium Testing:** Puppeteer focuses exclusively on Chromium, which aligns perfectly with Lighthouse's performance analysis capabilities.
- **Cross-Browser Limitations:** Playwright supports multiple browsers (e.g., Firefox, WebKit, and Chromium), but Lighthouse focuses primarily on Chromium-based environments, making Puppeteer a better fit.

By using Puppeteer, Lighthouse can fully utilize its features with minimal setup and maximum stability.

---
### **2. Types of Lighthouse Reports and When to Use Them**

Lighthouse offers three distinct types of reports, each serving a specific purpose:

#### **a) Navigation Report**
- **Description:** Measures the performance of a page during its initial load/navigation.
- **Use Case:** Ideal for analyzing first-load performance metrics like:
  - **First Contentful Paint (FCP):** Time to render the first visible content.
  - **Largest Contentful Paint (LCP):** Time to render the largest visible content.
  - **Time to Interactive (TTI):** Time until the page is fully interactive.
- **When to Use:** Use this report to evaluate the loading experience for users visiting your site for the first time.

#### **b) Timespan Report**
- **Description:** Tracks performance over a period of time, capturing metrics during user interactions or lifecycle events (e.g., page scrolling or button clicks).
- **Use Case:** 
  - Discover performance opportunities to improve the experience for long-lived pages and SPAs.
  - Measure layout shifts and JavaScript execution time over a timerange including interactions.
- **When to Use:** Use this report to analyze user interactions and long-running performance issues in dynamic applications.

#### **c) Snapshot Report**
- **Description:** Captures the performance of a page at a specific moment in time.
- **Use Case:** Measures the state of the page, focusing on metrics like:
  - Accessibility score.
  - Static layout rendering.
  - Performance diagnostics.
  - Evaluate best practices of menus and UI elements hidden behind interaction.
- **When to Use:** Use this report for a quick assessment of page health or to analyze a momentary visual state.

---

### **3. Device-Specific Flags: What They Mean and Why They Matter**

Lighthouse provides device-specific flags to simulate performance under different conditions. These flags allow you to mimic mobile and desktop environments for more realistic and actionable insights.

#### **Device-Specific Flags**
| Flag              | Description                                       |
|--------------------|---------------------------------------------------|
| `mobile: true`     | Simulates a mobile device environment.            |
| `mobile: false`    | Simulates a desktop device environment.           |
| `deviceScaleFactor`| Controls the pixel density of the simulated device.|
| `width` and `height`| Defines the screen resolution.                   |
| `throttling`       | Mimics network speed and CPU power (e.g., 3G).    |


#### **Throttling Properties**

The throttling settings control network and CPU performance during tests. Below are the key properties and their typical values:

### **1. `rttMs` (Round-Trip Time)**
- **Definition:** Simulates network latency, or the time it takes for a request to travel to a server and back.
- **Impact on Tests:**
  - Higher values mimic slower networks, increasing page load times.
  - Affects metrics such as **Time to First Byte (TTFB)** and **First Contentful Paint (FCP)**.
- **Typical Values:**
  - `40`: Fast broadband (desktop).
  - `150`: Average 4G network (mobile).
  - `300`: Slow 3G network.

### **2. `throughputKbps` (Network Bandwidth)**
- **Definition:** Simulates the maximum download/upload speed (in kilobits per second).
- **Impact on Tests:**
  - Lower values mimic slower networks, delaying resource loading.
  - Affects metrics like **Largest Contentful Paint (LCP)** and **Time to Interactive (TTI)**.
- **Typical Values:**
  - `10240`: High-speed broadband (~10 Mbps).
  - `1600`: Average 4G (~1.6 Mbps).
  - `750`: Slow 3G.

### **3. `cpuSlowdownMultiplier`**
- **Definition:** Simulates slower device CPUs by increasing the time required for each task.
- **Impact on Tests:**
  - Higher values mimic older or low-performing devices, increasing task durations.
  - Affects metrics such as **Time to Interactive (TTI)** and overall responsiveness.
- **Typical Values:**
  - `1`: No slowdown (desktop testing).
  - `4`: Mid-range mobile devices.
  - `6`: Low-end mobile devices.

---