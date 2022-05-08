const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the rule for objects in a Boolean context?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All objects are true in a Boolean context.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three variants of type conversion in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three variants of type conversion include string, number, and default conversions. String conversion can happen explicitly when an object expects a string, and mathematical operations use explicit number conversion on primitives. In rare circumstances where the operator is unclear about what type to anticipate, the default gets used.',
      },
    },
    {
      '@type': 'Question',
      name: 'To implement conversions, what are the three object methods JavaScript tries to find and call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three object methods include Symbol.toPrimtive (system symbol) if it exists. Otherwise, if the hint is a string, it will try Obj.toString() or Obj.valueOf(). Finally, if the hint is a number or default it will try Obj.valueOf() and Obj.toString().',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain what Symbol.toPrimitive() is and what it does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Symbol.toPrimitive is a symbol that specifies a function valued property called to convert an object to a corresponding primitive value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the outcome when you try to use a for…loop to expose the properties of an object using Symbol.toPrimitive()?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The result returns all properties except for the Symbol.toPrimitive because JavaScript does not expose Symbols in the global symbol registry in this fashion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Methods toString and valueOf come from ancient times. Are these two methods considered Symbols?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, because toString and valueOf came before Symbols debuted in the JavaScript codebase. They are regular string-name methods. If there is no Symbol.toPrimitive, JavaScript tries to find them.',
      },
    },
    {
      '@type': 'Question',
      name: 'By default, a plain object has the following toString and valueOf methods. What does each of these object methods return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The toString method returns a string "[object Object]", and the valueOf method returns the object itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if toString or valueOf returns an object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For historical reasons, if toString or valueOf returns an object, there is no error, but such value is ignored (like if the method did not exist). That is because, in ancient times, there was no good "error" concept in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'As you pass an object as an argument, what are the stages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The object gets converted to a primitive. If the resulting primitive is not the right type, it gets converted.',
      },
    },
  ],
};

export default StructuredData;
