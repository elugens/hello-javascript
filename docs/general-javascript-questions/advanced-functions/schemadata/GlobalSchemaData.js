const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain what the global object is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A global object is an object that always exists in the global scope. There is always a global object defined in JavaScript; when scripts create global variables defined with the var keyword in a web browser, JavaScript creates them as members of the global object.',
      },
    },
    {
      '@type': 'Question',
      name: "How should you use JavaScript's global (window) object?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is typically discouraged to use global variables, which gets kept to a minimum. The code design in which a function receives "input" variables and generates a specific "result" is more straightforward, less prone to mistakes, and simpler to verify than the code design in which external or global variables get used. The global object gets used to test for support of contemporary language features. This approach is typical in Polyfills to guarantee that user interaction results in an equitable response.',
      },
    },
  ],
};

export default StructuredData;
