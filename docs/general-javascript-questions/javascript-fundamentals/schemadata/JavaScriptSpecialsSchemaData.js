const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does JavaScript see, view, or treat line breaks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript treats line breaks as delimiters and uses automatic semicolon insertion to close individual statements. Most code style guides agree that we should put a semicolon after each statement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Describe the proper way to enforce strict mode in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, to enforce strict mode, we must use the \u201Cuse strict;\u201D directive placed at the top of our code or function body. The directive must appear at the beginning of a script or at the start of a function body. Everything still works without "use strict", but some features behave in the old fashion, \u201Ccompatible\u201D way. We would generally prefer modern behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can a variable name include in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Variables can contain letters and numbers, but the first character must be a letter. In some cases, the characters $ and _ are regular and acceptable. Non-Latin alphabets and hieroglyphs are also permitted but rarely utilized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are JavaScript variables statically or dynamically typed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike statically typed languages, JavaScript variables are dynamically typed and do not require type declaration. This behavior in JavaScript means that variable data types in JavaScript are unknown at run-time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the only operator with three parameters (arguments)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The only operator with three parameters is the ternary ( ? ) conditional operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Name three types of JavaScript functions commonly used in application development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three primary functions commonly used in JavaScript application development include a declaration, expression, and arrow functions.',
      },
    },
  ],
};

export default StructuredData;
