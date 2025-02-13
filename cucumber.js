module.exports = {
    default: {
      parallel: 1,
      dryRun: false,
      format: [
        'progress-bar',
        'html:reports/cucumber-report.html',
        'json:reports/cucumber-report.json'
      ],
      runFeatures: ['src/features/**/*.feature'],
      paths: ['src/features/**/*.feature'],
      require: [
        'tsconfig.json',
        'src/**/*.ts'
      ],
      requireModule: ['ts-node/register']
    }
  };