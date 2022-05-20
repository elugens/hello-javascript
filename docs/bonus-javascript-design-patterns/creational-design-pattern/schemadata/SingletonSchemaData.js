const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the singleton pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Singleton pattern is a design principle restricting a class's instantiation to one object. That's also useful when just one object is required to coordinate system-wide actions. The Singleton pattern traditionally gets implemented by creating a class with a method that creates a new class instance even if one doesn't already exist. If an object's instance already exists, it simply returns a pointer to it.",
      },
    },
    {
      '@type': 'Question',
      name: 'What pattern family does the Singleton belong to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The singleton pattern is a type of Creational design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What distinguishes Singletons from static classes or objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Singletons vary from static classes (or objects). Their initialization delays, typically because they require information that may not be available at the time of initialization. They don't make it easy for code that isn't aware of a previous reference to them to find them. A Singleton returns a structure rather than an object or a \"class.\" Consider how closure variables aren't closures - the closure is the function scope that provides the closure.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of using the Singleton Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Singleton Pattern: You can be certain that a class only has one instance. You are granted global access to that instance. The singleton object only gets initialized the first time it is requested.',
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Singleton Pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Restricting the instantiation to just one instance could save a lot of memory space. Instead of setting up memory for a new instance each time, we only have to set up memory for that one instance referenced throughout the application. However, Singletons are considered an anti-pattern, and we should try to avoid using them in JavaScript. Infringes on the Single Responsibility Principle: At the same time, the pattern solves two problems. The Singleton pattern can hide lousy design, such as when application components know too much about each other. In a multithreaded environment, the pattern gets treated differently so that multiple threads do not create a singleton object multiple times. Unit testing the Singleton's client code may be complicated because many test frameworks rely on inheritance when producing mock objects. This reliance is relative to the constructor of the singleton class being private, and overriding static methods is impossible in most languages. You'll need to develop a unique way to mock the Singleton. Or don't write the tests at all. Alternatively, avoid using the Singleton pattern.",
      },
    },
  ],
};

export default StructuredData;
