const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the instanceof operator do in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instanceof operator allows us to check whether an object belongs to a certain class. It also takes inheritance into account. Such a check may be necessary in many cases, and it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an Array an instance of an Object, in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, an Array belongs to the Object class, because Array prototypically inherits from Object. At the base of JavaScript, all native objects like Array and even Function inherit from the Object class. The instanceof operator examines the prototype chain to render a result as true or false.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to make a custom obj instanceof Class algorithm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can create a rough representation of the algorithm using a static method of Symbol.hasInstance, then just call it. It should return true or false as a result, by default it should be set to true. Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.',
      },
    },
    {
      '@type': 'Question',
      name: 'In plain words, can you explain what happens with an instanceof class check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain. If any answer is true, return true. If it does not reach true as a result and reaches the end of the chain, return false. The Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'We already know that plain objects are converted to string as [object Object]. Is there a way to create a custom toString result for our custom objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the behavior of Object toString can be customized using a special object property Symbol.toStringTag. The Symbol.toStringTag also works for environment-specific objects like the window and XMLHttpRequest objects.',
      },
    },
  ],
};

export default StructuredData;
