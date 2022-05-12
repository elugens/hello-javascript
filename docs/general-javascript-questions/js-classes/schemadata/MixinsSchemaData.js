const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Mixin in JavaScript, and why do you use them instead of a class inheritance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We can only inherit from a single object in JavaScript. An item can only have one [[Prototype]]. A class may only extend to one additional class. This behavior is a constraint in 'class' inheritance that may necessitate the employment of a mixin. A mixin is a class with methods that other classes can utilize without inheriting from it. In other words, a mixin provides methods for implementing a specific behavior, but we do not use it by itself. We use it to add the behavior to other classes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the simplest way to create a mixin in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most straightforward way to implement a mixin in JavaScript is to make an object with helpful methods so that we can easily merge them into a prototype of any class. There is no inheritance, but there is method copying.',
      },
    },
  ],
};

export default StructuredData;
