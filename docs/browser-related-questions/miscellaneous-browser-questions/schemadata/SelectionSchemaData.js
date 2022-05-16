const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you describe the fundamentals of selection in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript may access a current selection, select and deselect DOM nodes whole or partially, delete the selected content from the document, and encapsulate it in a tag. Range is the primary selection idea, and it is just a pair of "border points": range start and range end.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the function and syntax of the Range Object/interface?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Range interface represents a document fragment that can contain nodes and parts of text nodes. The `Range()` constructor returns a newly created Range object whose start and the end are the global Document object. A Range object gets created without parameters in its initial state. Then we can set the selection boundaries using `range.setStart(node, offset)` and `range.setEnd(node, offset)`. Surprisingly, the first parameter node in both systems can be either a text node or an element node, and the meaning of the second argument is dependent on this.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the Window.getSelection() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The `window.getSelection()` method returns a Selection object representing the range of text selected by the user or the caret's current position. The document selection is represented as a Selection object, which may be accessed by `window.getSelection()` or `document.getSelection()`. A selection may contain 0 or more ranges.",
      },
    },
  ],
};

export default StructuredData;
