const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Could you please explain the decorator design pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decorators are a structural JS design pattern that aims to promote code reuse. Like Mixins, we can consider them as another viable alternative to object sub-classing. This pattern enables behavior that gets dynamically added to an individual object without affecting the behavior of other objects in the same class. Decorators can increase functionality in a more flexible way than sub-classing.',
      },
    },
    {
      '@type': 'Question',
      name: 'The Decorator pattern belongs to which pattern family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Decorator pattern is part of the Structural design pattern family.',
      },
    },
    {
      '@type': 'Question',
      name: "What are the Decorator Pattern's object participants?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Client, Component, and Decorator are the object participants in the Decorator Pattern. The Client object participant references the decorated Component. The object to which additional functionality gets added is a Component. By keeping a reference to the Component, defining an interface that conforms to the Component's interface, and implementing the additional functionality, the Decorator acts as a wrapper around it. In an application, there can be more than one Decorator.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the advantages of employing the Decorator pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Benefits of the Decorator Pattern include: You can change the behavior of an object without creating a new subclass. At runtime, you can add or remove responsibilities from an object. Wrapping an object in multiple decorators allows you to combine several behaviors. Single Responsibility Principle - The principle of single responsibility. A monolithic class that implements many possible behavior variants can get divided into several smaller classes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the disadvantages of employing the Decorator pattern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Drawbacks of the Decorator Pattern include: It's hard to remove a specific wrapper from the wrapper's stack. It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the Decorator's stack. The initial configuration code of layers might look pretty ugly.",
      },
    },
  ],
};

export default StructuredData;
