const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the export keyword work with declarations in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can label any declaration as exported by placing export before it, a variable, function, or class.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the recommendation for exports before functions and class declarations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Export before a class or a function does not make it a function expression, and it is still a function declaration, albeit exported. Most JavaScript style guides do not recommend semicolons after function and class declarations. A semicolon does not need implementation at the end of the export class and export function.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there another way to export on declarations instead of an explicit export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can export separately using a list of exported variables or function/ class names that we choose to export.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to import all declarations from a module, what syntax should you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If there is a lot to import, we can import everything as an object using import * as &#8249;obj &#8250;. In contrast, this may seem an excellent way to access everything collectively. (It is not a recommended approach).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rationale for explicitly listing all module imports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Well, there are a few reasons. Modern build tools (webpack and others) bundle modules together and optimize them to speed up loading and remove unused stuff. Explicitly listing what to import, gives shorter names: sayHi() instead of say.sayHi(). An explicit list of imports gives a better overview of the code structure: what gets used and where. It makes code support and refactoring easier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to edit or abbreviate the names of our module imports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can change or shorten the names of our imports. We can use the import “as” syntax to change the import name to a local variable name. You can also use this behavior for exports using the export as syntax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the two main kinds of modules in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In practice, there are mainly two kinds of modules, modules that contain a library, a pack of functions, and modules that declare a single entity, e.g., a module user.js exports only class User.',
      },
    },
    {
      '@type': 'Question',
      name: 'What differentiates default and named module exports and imports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Named imports use the standard imports with bracket syntax, while default imports can be imported without brackets. Default exports must use the export default syntax to denote that the object is the default export. Technically, we may have both default and named exports in a single module, but people usually do not mix them in practice. A module has either named exports or the default one. Another critical difference is that default exports do not require an entity name (function, class, variable). Not giving a name is fine because there is only one export default per file, so import without curly braces knows what to import.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to specify the default export without explicitly utilizing it on the default entity (function, class, variable)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some situations, we can use the default keyword to reference the default export. For example, to export a function separately from its definition.',
      },
    },
    {
      '@type': 'Question',
      name: 'If there is one main default export and a few named ones in your module. How do you import both exported entities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To import both the default and named exports, you must use the import &#123;default as &#8249;obj&#8250;, &#8249;otherObject&#8250;&#125; syntax. The imports must be enclosed in brackets and separated by a comma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any issues with using default exports in JavaScript? Are named exports better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Named exports are explicit. Named exports name what exports, so we have that information from them; that is good. Named exports force us to use exactly the right name to import. While for a default export, we always choose the name when importing. This approach is not good because some team members may use different names to import the same thing, which is not good.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the purpose of re-exporting a module in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Re-exporting a module allows access to specific functionality without giving outsiders access to the internal structure. The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure and search for files inside our package folder. We export what is necessary and keep the rest hidden from prying eyes.',
      },
    },
  ],
};

export default StructuredData;
