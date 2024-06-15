// sourceType default value is 'script', which is for ES5 syntax
// sourceType: 'module' is required for ES6 import/export syntax, otherwise it will throw error
let ast = parser.parse(code, {sourceType: 'module'}); // Ensure to set sourceType

// more details check https://babeljs.io/docs/babel-generator
let code = generator(ast, {
    retainLines: true, // Keep the line number of the original code
    comments: true,
    compact: false, // minified / concise
}).code;