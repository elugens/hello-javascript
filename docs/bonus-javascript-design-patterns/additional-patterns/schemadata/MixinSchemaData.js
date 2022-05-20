const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Could you please describe the mixin design pattern?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: "A mixin is a JavaScript object with methods that other classes can use without inheriting it. In other words, a mixin provides methods for implementing a specific behavior, but we don't use it on its own; instead, we use it to add the behavior to other classes. In JavaScript, we can look at inheriting from Mixins to collect functionality through extension. Each new class we define can have a superclass from which it can inherit methods and properties. Classes can also determine their properties and methods, and we can leverage this fact to promote function re-use.",
    },
  },
};

export default StructuredData;
