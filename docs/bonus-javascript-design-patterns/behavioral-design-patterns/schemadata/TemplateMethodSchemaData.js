const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the template method design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Template Method pattern defines a set of stages in an algorithm. Objects that implement these steps keep the algorithm's original structure but have the option to redefine or alter specific steps. This pattern intends to provide the client developer with extensibility.",
      },
    },
    {
      '@type': 'Question',
      name: 'What pattern category does the template method pattern belong to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Template Method pattern is a behavioral design pattern.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the use case for the template method design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When to Use the Template Method Pattern: The template method pattern solves the problem by employing an algorithm with various versions. You need to divide your method into additional steps implemented in the abstract class when the different implementations share them. On the other hand, we implement the various steps in the concrete classes. Another compelling use case for this approach is when you have copied and pasted code (private functions) between various classes. Finally, you can employ this strategy if most of your classes exhibit similar tendencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Template Method pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Benefits of the Template Method Pattern: It's relatively easy to create a concrete implementation of an algorithm because you're removing common parts of the problem domain using an abstract class. Clean code because you avoid duplicate code. Ever cleaner code because you separate the algorithm into private methods or functions that are simpler and easier to test.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some disadvantages of employing the Template Method design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drawbacks of the Template Method Pattern: You may violate the Liskov Substitution Principle by suppressing a default step implementation through a subclass. Some clients may be the only reason the template pattern imposes a specific design. The template design is more adaptable than other patterns, and modifications at the high or low level might disrupt implementation, making maintenance difficult.',
      },
    },
  ],
};

export default StructuredData;
