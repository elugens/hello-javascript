const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the constructor design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The constructor pattern is a design pattern that uses a class or function to create unique types of objects. A constructor is a one-of-a-kind method for initializing a newly created object after allocated memory.<br/><br/>Constructor patterns are among the most fundamental, extensively used, and modern JavaScript patterns. The objective of this pattern, as hinted by the name, is to facilitate constructor creation.',
      },
    },
    {
      '@type': 'Question',
      name: 'In the constructor pattern, what kinds of objects can we implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The two types of objects used in the constructor pattern include classes and traditional functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'In what pattern category does the Constructor pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Constructor pattern belongs to the creational design pattern category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ES6 object do we use in the constructor pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ES6 object used in the constructor pattern is a class object.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you use the constructor pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use the Constructor Pattern when you want to create multiple instances of the same object. The constructor pattern is typical in libraries and plugins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the constructor pattern and methods issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When building constructors, you should be aware of object duplication resulting in a new instance. The repetition can be caused by using methods when building prototypes and returning false results when checking instance equality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What differentiates the constructor pattern from the prototype pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary difference between the constructor and prototype pattern is the reusability of components. Constructor Pattern: When you create a new constructor, it creates a new instance of everything, and any changes made to the instantiated object do not affect the others. Prototype Pattern: Creating a new object using the prototype reuses the logic, and any change to the prototype chain affects everyone else.',
      },
    },
  ],
};

export default StructuredData;
