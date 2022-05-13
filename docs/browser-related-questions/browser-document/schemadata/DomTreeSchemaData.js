const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an HTML tag considered in the Document Object Model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every HTML tag is an object, according to the Document Object Model (DOM). Nested tags are "children" of the one that contains them, and the text included within a tag is also an object. These objects are available via JavaScript and may be used to alter the page. Document.body, for example, is the object that represents the &#8249;body&#8250; tag.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Document Object Model represent HTML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The DOM represents HTML as a tree structure of tags.',
      },
    },
    {
      '@type': 'Question',
      name: 'If the browser encounters malformed HTML, what happens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the browser creates the DOM, it immediately corrects any erroneous HTML. The top tag, for example, is always &#8249;html&#8250;. Even though it does not exist in the document, it exists in the DOM since it is created by the browser. The same is true for &#8249;body&#8250;. Browsers automatically process mistakes in the document and close tags when producing the DOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do HTML tables always have a `<tbody>` in the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, that is an intriguing "unique case" when we use tables. They must have the &#8249;tbody&#8250; element according to DOM specifications, however HTML content may omit it. The browser will then immediately generate &#8249;tbody&#8250; in the DOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the four most regularly utilized node types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There are 12 different types of nodes. We usually work with four of them in practice. The four major node types are document, element, text, and comment nodes. The document node is the DOM's starting point. The makeup of element nodes include all HTML tags, which we use as the tree's building blocks. We use the comment node to display information in our code, but it does not show in the browser, but JS can read it from the DOM.",
      },
    },
  ],
};

export default StructuredData;
