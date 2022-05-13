const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can we import a module dynamically, on-demand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can implement dynamic imports by using the import expression. The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It gets called from any place in our code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a process for importing dynamic JS modules to manage issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In simple terms, we can handle errors in dynamic imports the same way we handle errors in promises by using the then and catch methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'hat are the benefits of the dynamic import expression in JS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main benefit of dynamic imports is that they allow you to load JavaScript modules dynamically. This implementation makes it useful for lazy-loading or computed module specifier strings. In addition, dynamic imports provide us with a promise, allowing access to the .then and .catch methods for handling (catch error). Dynamic imports work in regular scripts; they don’t require script type="module".',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the dynamic import expression a JavaScript function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, although import() looks like a function call, it’s a special syntax that happens to use parentheses (similar to super()). So, we cannot copy import to a variable or use call/apply with it. It is not a function.',
      },
    },
  ],
};

export default StructuredData;
