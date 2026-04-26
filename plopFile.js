module.exports = function (plop) {
    // Controller generator
    plop.setGenerator('controller', {
        description: 'Create a new controller',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Controller name (without "Controller" suffix):'
        }],
        actions: [{
            type: 'add',
            path: 'src/controllers/{{pascalCase name}}.controller.js',
            templateFile: 'plop-templates/controller.hbs'
        }]
    });

    // Route generator
    plop.setGenerator('route', {
        description: 'Create a new route file',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Route name (plural):'
        }],
        actions: [{
            type: 'add',
            path: 'src/routes/{{lowerCase name}}.route.js',
            templateFile: 'plop-templates/route.hbs'
        }]
    });
};