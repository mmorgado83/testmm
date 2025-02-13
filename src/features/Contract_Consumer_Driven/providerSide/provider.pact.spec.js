
require('dotenv').config()
const { Verifier } = require("@pact-foundation/pact");
const { server } = require("./dummyProvider/provider");

describe("Pact Verification", () => {
  // (1) Starting the Provider API

  before((done) => server.listen(8080, done));

  it("validates the expectations of ProductService", () => {
    // (2) Telling Pact to use the contracts stored in PactFlow and where the Product API will be running
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: "http://localhost:8080",
      providerVersion: "1.0.0-someprovidersha",
      provider: "Demo Provider",
      providerBranch: "main",
      consumerVersionSelectors: [{ branch: "main" }],
      pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
      publishVerificationResult: true,
      enablePending: true,
      pactBrokerToken: process.env.PACT_BROKER_TOKEN
    };

    // (3) Running the Provider verification task
    return new Verifier(opts).verifyProvider().then((output) => {
      console.log("Pact Verification Complete!");
      console.log(output);
    });

  });
});
