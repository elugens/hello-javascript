const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the builder design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Builders allow us to construct complex objects by only specifying the type and content of the object, shielding us from the process of creating or representing the object explicitly.',
      },
    },
    {
      '@type': 'Question',
      name: 'In what pattern category does the Builder Pattern belong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Builder Pattern belongs to the Creational design pattern category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most common reason to use the Builder Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common reason for using Builder is to make client code that creates complex objects that are simpler to comprehend. The client can still direct the Builder's actions without knowing how the actual work gets completed. Because the procedures involved are frequently repetitive and complex, builders frequently encapsulate the construction of Composite objects (another GoF design pattern).<br/><br/>It is usually the last step that returns the newly created object, making it simple for a Builder to participate in fluent interfaces where multiple method calls separated by dot operators get chained next to each other.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name the objects participating in the Builder Pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The objects participating in the Builder Pattern include the Director, Builder, ConcreteBuilder, and Products objects. The director object constructs products by using the Builder’s multi-step interface. The Builder object, not used in JavaScript, declares a multi-step interface for creating a complex product. The ConcreteBuilder implements the multi-component Builder interface, keeps the product in position during the assembly process, and enables you to retrieve the newly created product. The Products object represents the complex objects getting assembled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the AbstractBuilder Object participant not used in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AbstractBuilder does not get used because JavaScript does not support abstract classes. However, the different Builders must implement the same multi-step interface for the Director to be able to step through the assembly process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the benefits of using the Builder pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The builder pattern has several advantages, which can be summarized as follows. You may build items step by step, defer building phases, or perform them recursively. When creating different product representations, you can reuse the same construction code. Single Responsibility Principle. You may separate sophisticated building of code from the product's business logic.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the primary disadvantage of employing the Builder pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main disadvantage of the builder pattern is the increased code complexity and the number of classes required. This complexity is a well-known drawback of using design patterns — the cost of gaining abstraction in the code.',
      },
    },
  ],
};

export default StructuredData;
