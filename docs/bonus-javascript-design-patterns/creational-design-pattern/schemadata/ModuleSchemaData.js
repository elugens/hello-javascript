const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the Module design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Another popular JavaScript design pattern for keeping our code tidy, segregated, and organized is the Module Pattern. A module is a standalone code that may modify objects without impacting other components. In JavaScript does not support the concept of an access modifier, the aid of the module in mimicking the behavior of private/public access, thereby ensures encapsulation.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Module pattern belongs to which design pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Module pattern in JavaScript belongs to the Creational design pattern family. It provides a way to encapsulate and organize code into self-contained modules with private and public interfaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good use case for the Module Design Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Module Pattern in JavaScript is useful when you want to encapsulate related code into a single, reusable module with a clear interface, preventing naming collisions and global namespace pollution.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Module pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some advantages of using the Module pattern in JavaScript are encapsulation of code, prevention of naming collisions, clear interface, and modularity, making code more maintainable and reusable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Module pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some disadvantages of the Module pattern in JavaScript are increased complexity, reduced flexibility, and difficulties with unit testing and dependency management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any alternatives to using the Module Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, some alternatives to the Module pattern in JavaScript are the Revealing Module pattern, Prototype pattern, Singleton pattern, and Factory pattern.',
      },
    },
  ],
};

export default StructuredData;
