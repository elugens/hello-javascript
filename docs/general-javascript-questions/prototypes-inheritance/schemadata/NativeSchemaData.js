const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can you give me a high-level overview of JavaScript's native prototypes and objects?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The prototype property is present in all custom and built-in native objects, and we can improve their usefulness by adding additional attributes and methods. Native prototypes may only be changed or new ones added, but we cannot remove them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What future issues can happen with native prototype extensions (custom property) in web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If future browser versions implement Array.prototype.myExtension (either as part of an upgrade to the EcmaScript standard or on their initiative), their implementation gets overridden by the custom one, which will not only be less productive (we can't change browser engine internals in the service of method optimization), but may also produce a different, nonstandard result. However, there is a technique to reduce the danger by testing for the presence of the native property. This choice might result in varying results between browser versions and device platforms. Whether internal or external, conflicts between libraries are another issue that emerges.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a specific case for native prototype extensions in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should only use a native prototype extension when you need to create a Polyfill for a method that exists in the JavaScript standard but is not yet supported by a particular JavaScript engine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you borrow functionality from native prototypes in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you may borrow a native prototype method if you require the same functionality. The basic concept is to copy and paste a method from one object into another. We should note that some native prototype approaches often get copied.',
      },
    },
  ],
};

export default StructuredData;
