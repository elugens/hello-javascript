const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the abstract factory design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's also a good idea to be familiar with the Abstract Factory design. Which seeks to encapsulate a set of independent factories with a similar purpose, and it separates the details of implementing a set of objects from their general usage. Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in Vanilla JavaScript. Therefore, we must implement it in a way that JavaScript translates into an interface.",
      },
    },
    {
      '@type': 'Question',
      name: 'The Abstract Factory pattern belongs to which pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The abstract factory pattern belongs to the creational design pattern category.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would you want to delegate the responsibility of object construction to others rather than directly calling a constructor function with the new keyword?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is because constructor functions have little control over the complete construction process. You may need to delegate authority to a factory with broader knowledge. This method encompasses cases where the creation process incorporates object caching, object sharing or re-use, complicated logic, applications that keep object and type counts, and objects that interact with various resources or devices. If your application requires additional control over the object creation process, we recommend the Factory Pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the objects participants used in the Abstract Factory Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The objects participants used in the Abstract Factory Pattern include the AbstractFactory, ConcreteFactory, Products, and AbstractProduct. The AbstractFactory, not used in JavaScript, declares an interface for creating products. The ConcreteFactory is a factory object that manufactures new products, and products are simply instances created by the factory. The AbstractFactory participant, not used in JavaScript, declares an interface for the produced products.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Abstract factory pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The abstract factory pattern offers various advantages, which we can describe in the following fashion. <ul>\r\n<li>We ensure the compatibility of items produced by the same factory class.</li>\r\n<li>Open-closed Concept: Clean code, since we introduce new product families without affecting the current code structure, ensuring the open-closed concept.</li>\r\n<li>Cleaner code since the single responsibility principle (SRP) gets followed because the obligation for generating the concrete product gets passed to the concrete creator class rather than the client class.</li>\r\n</ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of implementing the Abstract Factory pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main drawback of the abstract factory pattern, like most design patterns, is an increase in complexity in the code and an increase in the number of classes required for the code. However, this disadvantage is well known when applying design patterns, for it is the price to pay for gaining abstraction in the code.',
      },
    },
  ],
};

export default StructuredData;
