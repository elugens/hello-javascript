const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain one of the essential principles of object-oriented programming (OOP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One of the essential principles of object-oriented programming is delimiting (separating) the internal interface from the external one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two interfaces into which properties and methods get divided in object-oriented programming (OOP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In object-oriented programming, properties and methods get split into internal and external interfaces. The internal interface has methods and properties accessible within the class but not outside it, and the external interfaces are properties and methods outside the class but are still accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the key distinction between private and protected JavaScript fields?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference between private and protected fields is that private fields get supported at the language level, and protected fields are not. Protected properties usually get prefixed with an underscore _. That does not get enforced at the language level, but it is a well-known convention among programmers that such properties and methods should not be accessible from the outside. Privates should start with hash symbol #. They are only accessible from inside the class and currently have language-level support (almost a standard). The hash sign (#) is a special sign that the field is private on the language level. We cannot access it from outside or from inheriting classes. We should note that private fields may require a Polyfill to account for older browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to make a class property read-only in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This implementation is possible by creating a getter and withdrawing the setter from the equation. This approach allows access to the value created at creation time, but we cannot override it after that point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are protected fields inherited by sub-classes in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if we inherit from parent classes, the inheriting class has access to protected fields. The same rules apply in the inheriting class as they do in the parent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you perhaps briefly describe private properties and methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private methods and properties with the private hash # indicator are only accessible within a class. The hash sign # is a special sign that the field is private on the language level, and it is not accessible from the outside or inherited classes. Private and public fields are not incompatible, and it is possible to have both private and public fields simultaneously. Unlike protected ones, private fields get enforced by the JavaScript language.',
      },
    },
  ],
};

export default StructuredData;
