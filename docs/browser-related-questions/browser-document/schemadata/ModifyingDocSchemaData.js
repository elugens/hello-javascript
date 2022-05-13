const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you create new DOM nodes in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two methods, including the createElement and createTextNode methods, are used to create DOM nodes. The document.createElement(tag) creates a new element node. The document.createTextNode(‘text’) creates a new text node with the give ‘text’. We need to create element nodes, such as a div, most of the time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you place a DOM node into an HTML document using JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the special append method to insert a new DOM node into an HTML document. We can use additional methods such as the prepend, before, after, and replaceWith to place the new DOM node into a specific place in the document.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you insert HTML into a document using JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you want to insert HTML into a document, we use the insertAdjacentHTML(where, HTML). We use two parameters to specify where and the second parameter of what or the HTML (it must be a string type, you need to add quotes) that we want to insert.<br /><br />\r\n  <strong>Additional Information:</strong> We can also use insertAdjacentText and insertAdjacentElement in a similar fashion. <br /><br />\r\n  <ol>\r\n    <li>The insertAdjacentText(where, text) has the same syntax, but a string of text is inserted \u201Cas text\u201D instead of HTML.</li>\r\n    <li>The insertAdjacentElement(where, element) has the same syntax but inserts an element.</li>\r\n    <li>They exist primarily to make syntax "consistent." In practice, insertAdjacentHTML is the sole method utilized most of the time. Because we have methods append/prepend/before/after for elements and text - they are easy to create and may incorporate nodes/text fragments.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to remove a DOM node using JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, to remove a node, there’s a method node.remove(). Please note: if we want to move an element to another place – there is no need to remove it from the old one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you swap elements using JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there is a simple approach to doing this in JavaScript. For example, if we want to swap adjacent elements, we can use the after method by specifying what we want to go after a specific element node.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you clone an element node in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can clone an element node using the cloneNode method in JavaScript. The cloneNode() method creates a node copy and returns the clone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the DocumentFragment Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DocumentFragment is a special DOM node that serves as a wrapper to pass around lists of nodes. We can append other nodes to it, but its content gets inserted instead when we insert it somewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'At some point in your career, you run across older methods of inserting and removing elements. Can you explain what these methods are and why you should know them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several methods were used before the more modern methods for inserting and removing nodes. They include appendChild, insertBefore, replaceChild, and removeChild. Although they aren’t getting used in modern code, we should be aware of their function, use, and syntax, because we may run across them in older applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the document.write method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The document.write() method writes a string of text to a document stream opened by document.open().',
      },
    },
  ],
};

export default StructuredData;
