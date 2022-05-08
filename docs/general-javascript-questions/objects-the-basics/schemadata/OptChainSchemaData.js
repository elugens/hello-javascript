const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Explain what JavaScript's optional chaining operator (?.) does?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The optional chaining operator (?.) allows you to read the value of property deep inside a chain of related objects without explicitly validating each reference in the chain. If the value preceding (?.) is undefined or null, optional chaining (?.) terminates the evaluation and returns undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What will the optional chaining operator (?.) return if an object does not exist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The optional chaining operator returns undefined if the object does not exist (equals null). We will see this outcome when an object gets set to null. If the object is not defined, it results in a reference error.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should the optional chaining (?.) operator be used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should use the option chaining operator with the intent to handle object properties that are already known to be optional. If it is not optional, it can result in a false scenario that goes unchecked. This behavior could result in silent coding errors and become more challenging to debug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is optional chaining (?.) merely an operator or a syntax construct?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is technically a syntactic construct. However, it generally gets referred to as an operator. It is more than simply an operator, though, and may get used with functions (?.()) and square brackets (?.[]). For instance, ?.() is used to invoke a function that may or may not exist. If we want to utilize brackets [] instead of dot to access properties, we may use the?.[] syntax (.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the optional chaining (syntax construct) operator be used to store or write values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use the optional chaining operator (?.) for safe reading and deleting, but not writing. The optional chaining operator (?.) has no use on the left side of an assignment.',
      },
    },
  ],
};

export default StructuredData;
