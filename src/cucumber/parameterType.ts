import { defineParameterType } from '@cucumber/cucumber';


defineParameterType({
  name: 'condition',
  regexp: /with|without/,

  transformer: (condition: string) => condition,

  useForSnippets: false
});

