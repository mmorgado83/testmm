import axios from 'axios';
import 'dotenv/config';
import path from 'path';
import fs from 'fs';

const getPactFileInBase64Format = (fileName) => {
  const json = fs.readFileSync(path.join('./pact/', fileName));
  return Buffer.from(json).toString('base64');
};

const getVersionNumberParameter = () => {
  const customIndex = process.argv.indexOf('--versionNumber');
  let customValue;
  if (customIndex > -1) {
    customValue = process.argv[customIndex + 1];
  }
  return customValue;
};

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/hal+json, application/json, */*; q=0.01',
  'X-Interface': 'HAL Browser',
  Authorization: `Bearer ${process.env.PACT_BROKER_TOKEN}`
};

const getBody = () => ({
  pacticipantName: 'Demo Consumer',
  pacticipantVersionNumber: getVersionNumberParameter(),
  branch: 'main',
  tags: [],
  contracts: [
    {
      consumerName: 'Demo Consumer',
      providerName: 'Demo Provider',
      specification: 'pact',
      contentType: 'application/json',
      content: getPactFileInBase64Format('Demo Consumer-Demo Provider.json')
    }
  ]
});

const uploadContracts = async () => {
  const body = getBody();
  console.log(process.env.PACT_BROKER_BASE_URL)
  try {
    const response = await axios.post(`${process.env.PACT_BROKER_BASE_URL}contracts/publish` as string, body, {
      headers
    });

    console.log('Pacts are successfully published!');
    console.log(response.data);
  } catch (error) {
    console.log('Error publishing pacts:');
    console.log(error.message);
    console.log(error.response && error.response.data);
  }
};

uploadContracts();
