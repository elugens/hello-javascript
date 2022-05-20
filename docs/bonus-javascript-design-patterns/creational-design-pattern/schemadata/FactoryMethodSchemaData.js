const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the factory method/design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Factory Method creates new objects as instructed by the client. One way to create new objects in JavaScript is by invoking a constructor function with the new operator. There are times when the client should not or does not know which of numerous candidates objects to instantiate. The Factory Method enables the client to delegate object creation while maintaining control over the type to be instantiated. Though the definition particularly mentions that an interface needs to be defined, we do not have interfaces in JavaScript. Therefore, we must implement it so that JavaScript translates into an interface.',
      },
    },
    {
      '@type': 'Question',
      name: 'In what pattern category does the factory pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The factory pattern belongs to the creational design pattern group.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the primary goal of the factory method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Factory Method's primary goal is extensibility. We commonly use factory methods in applications that manage, maintain, or manipulate groups of distinct but similar objects (i.e., methods and properties).",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the object participants in the factory pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three participants in the factory pattern, including the Creator, AbstractProduct, and ConcreteProduct. The Creator is the factory object that creates new products and implements “factoryMethod” which returns newly manufactured products. The AbstractProduct declares an interface for the products, except in JavaScript. The ConcreteProduct is the product getting created, and all ConcreteProducts support the same interface.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name a use case for the factory pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Cases and Applicability of the Factory Pattern: <ul>\r\n<li>You should use the Factory Method when you don\u2019t know the exact types and dependencies of the objects your code should work within your application.</li>\r\n<li>When you want to give users of your library or framework the ability to extend its internal components, we use the Factory Method to meet this specification.</li>\r\n<li>The Factory Method may be used to save system resources by reusing existing objects rather than constructing them each time.</li>\r\n</ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the factory pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Factory Pattern. <ul>\r\n<li>You avoid a close relationship between the Creator and the concrete products.</li>\r\n<li>Single Responsibility Principle (S.R.P.): The principle of single responsibility. You can consolidate the product creation code into a single location in the program, making it easier to support.</li>\r\n<li>Open/Closed Principle: You can integrate new products into the system without busting the current client code.</li>\r\n</ul>',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the factory pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The code may become more complicated as you introduce large numbers of new subclasses to implement the pattern. The best-case scenario is incorporating the design into an existing creator class hierarchy.',
      },
    },
  ],
};

export default StructuredData;
