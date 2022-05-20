const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the strategy design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Strategy pattern encapsulates various algorithms (or strategies) for a specific task. It enables a method to be replaced at runtime with another method (Strategy) without the client knowing it. The Strategy pattern is essentially a collection of interchangeable algorithms.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Strategy pattern belongs to which pattern group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'he Strategy pattern is part of the Behavioral design pattern set.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should the JavaScript Strategy Pattern be used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strategy Pattern Use-Cases: When you need to employ several algorithms with varying versions, you must construct a concrete class (this may include one or more functions) to implement your algorithm. When there are conditional statements around by several connected algorithms. When the majority of your classes exhibit similar behaviors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Strategy pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Benefits of the Strategy Pattern: At runtime, you can alter the algorithms utilized within an object. You can separate an algorithm's implementation specifics from the code that utilizes it. It use the composition in place of inheritance. The principle of open/closed. You may implement new tactics without changing the context.",
      },
    },
    {
      '@type': 'Question',
      name: "What are some of the Strategy pattern's drawbacks?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Drawbacks of the Strategy Pattern: If you only have a few algorithms that seldom change, there's no point in complicating the program with new classes and interfaces that come with the pattern. Clients must understand the distinctions between tactics to choose the best one. Many current programming languages feature functional types, which allow you to implement different variants of an algorithm within a collection of anonymous functions. You may then utilize these methods the same way you used Strategy objects, but without cluttering your code with unnecessary classes and interfaces.",
      },
    },
  ],
};

export default StructuredData;
