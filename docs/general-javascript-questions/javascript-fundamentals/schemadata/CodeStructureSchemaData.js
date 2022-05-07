const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you define what a statement is in JavaScript code structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Statements are syntax constructs and commands that perform actions. Usually, statements are written on separate lines to make the code more readable. Statements are used in JavaScript to control the flow of the program. In contrast to properties, methods, and events fundamentally tied to the object that owns them, statements behave independently of any JavaScript object.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are statements separated in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, we separate statements with a semi-colon. Although semi-colons are implicit in JavaScript, we should always explicitly add them to reduce the possibility of bugs in our code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can semi-colons be omitted in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it is not considered good code etiquette and should not be done. JavaScript interprets the line break as an “implicit” semi-colon, and this behavior is called an automatic semi-colon insertion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does JavaScript always interpret line breaks as the end of a statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are cases when a newline does not mean a semi-colon and may result in an error. The recommendation is to put semi-colons between statements even if newlines separate them. The JavaScript community widely adopts this rule.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are single-line comments created in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-line comments start with two forward slash characters //.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are multi-line comments created in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are nested comments supported in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'o, nested comments are not supported. It results in a syntax error.',
      },
    },
  ],
};

export default StructuredData;
