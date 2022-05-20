const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the bridge design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bridge pattern allows two components, a client, and a service, to work together, with each element having its interface. The Bridge Pattern is a high-level architectural pattern, and its primary goal is to write better code through two levels of abstraction. It facilitates the very loose coupling of objects and sometimes referred to as a double Adapter pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Bridge pattern belongs to which design pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In software engineering, we define the bridge pattern as a structural design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the use case for the Bridge Pattern in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bridge pattern is an excellent pattern for driver development but rarely seen in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the objects that participate in the Bridge Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bridge Pattern objects include the Client, Abstraction, Refined Abstraction, Implementor, and ConcreteImplementor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Bridge pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Bridge Pattern: Loosely coupled code - Because the bridge pattern decouples an abstraction from its implementation, changes to the implementation do not affect the client code. The client code does not need to be compiled when the implementation changes. Reduces code duplication while increasing code maintainability and reusability. Classes and applications that are platform agnostic can be created. Helps to promote the Open-Closed principle, new abstractions and implementations can be developed independently. Decoupling abstraction from implementation: bridge pattern can avoid the binding between abstraction and implementation and select the implementation at run time. Improved Extensibility \u2013 Abstraction and implementation can be extended independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Bridge pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Bridge Pattern: Bridge pattern implementation increases code complexity. Interfaces with only a single implementation. Using the technique in a highly cohesive class may cause the code to become more complicated.',
      },
    },
  ],
};

export default StructuredData;
