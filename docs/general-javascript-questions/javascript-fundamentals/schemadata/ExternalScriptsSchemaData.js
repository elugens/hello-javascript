const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you access external script files in JavaScript development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Script files are attached to HTML with the src attribute, including the JS file's absolute path.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you access external script URLs in JavaScript development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can access external scripts by using the script-src attribute. Both secure and non-secure domains are permissible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rule for putting scripts into HTML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a rule, only the most straightforward scripts go into HTML pages. Complex scripts reside in separate files.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the benefit of using a separate script file in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The benefit of a separate file is that the browser downloads and stores it in its cache. Instead of downloading it on every load, other pages referencing the same script take it from the cache. That reduces traffic and makes pages faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What limitations exist in script tags using a source file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single script tag cannot have both the source attribute and code inside.',
      },
    },
  ],
};

export default StructuredData;
