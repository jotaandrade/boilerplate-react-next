module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'criar um componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do seu component?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ] // array of actions
  })
}
