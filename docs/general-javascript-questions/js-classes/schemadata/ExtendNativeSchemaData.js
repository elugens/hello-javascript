const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When extending built-in classes, what is used in their internal implementation to extend the built-in class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Built-in methods like an array, filter, map, and others return new objects of the inherited type. Their internal implementation uses the object’s constructor property for that. If you test the strict equality between the newly created object and child class on the constructor, it returns true.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Symbol.species accessor property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The symbol Symbol.species specifies a function-valued property that the constructor function uses to create derived objects. Subclasses can override the default constructor for objects using the species accessor attribute. Symbol.species gets used when you may want to return Array objects in your derived array class. When utilizing methods that return the default constructor, such as map(), you want these methods to return a parent Array object rather than the extending object.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does static inheritance work between native built-in classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normally, static and non-static methods are inherited when one class extends another. But built-in classes are an exception, and they do not inherit statics from each other.',
      },
    },
  ],
};

export default StructuredData;
