const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain how static properties and methods function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The static keyword defines a static method or property for a class. Neither static methods nor static properties get called on class instances, and instead, they get called on the class itself. Static methods are often utility functions, such as functions to create or clone objects. In contrast, static properties are helpful for caches, fixed-configuration, or any other data you do not need to get replicated across instances. To call a static method or property within another static method of the same class, you can use the “this” keyword.',
      },
    },
    {
      '@type': 'Question',
      name: 'When inheriting a base class, are static properties and methods inherited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, both static properties and methods get inherited by default.',
      },
    },
  ],
};

export default StructuredData;
