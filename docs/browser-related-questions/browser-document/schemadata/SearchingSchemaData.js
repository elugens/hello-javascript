const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do we gain access to an element by its id attribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If an element has the id attribute, we can access the element using the method document.getElementById(id), no matter where it is inside of our code. We can also act directly on the element id name (not a recommended approach). If the id is an existing variable, its value reference takes precedence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main rule for naming an element id attribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The id has to be unique. In the document, there can only be one element with the supplied id. When there are several elements with the same id, the behavior of methods that use it, such as documents, is unpredictable. getElementById may return an element at random from this list. Please abide by the rules and keep your id unique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you call getElementById on any object/element we choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the method getElementById can be called only on document objects. It looks for the given id in the whole document. We should use document.getElementById, and avoid using element.getElementById because it is not the proper use of the method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of querySelectorAll method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By far, the most versatile method document.querySelectorAll(css) returns all elements inside of a element matching the given CSS selector. This method is powerful because we can target any CSS selector. We can target groups of CSS selectors easily with querySelectorAll method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use pseudo-classes like hover and active in querySelectorAll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Pseudo-classes in the CSS selector like `:hover` and `:active` are also supported. For instance, document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now (in nesting order: from the outermost &#8249;html&#8250; to the most nested one).",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of querySelector method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Document method querySelector() returns the first element within the document that matches the specified selector or group of selectors. If no matches appear, we receive a null value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of element.matches method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The elem.matches(css) function does not search for anything; it determines if the element matches the provided CSS-selector. It either returns true or false. This method comes in handy when iterating through items (such as in an array) and seeking to filter results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of element.closest method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An element's ancestors include its parent, the parent of the parent, the parent of the parent, and down the ancestral tree. From the element to the top, the ancestors create a chain of parents. The method elem.closest(css) searches for the closest ancestor to the CSS-selector. The search also includes the element itself. In other words, the nearest method ascends from the element and checks each of the parents. If it matches the selector, the search is terminated, returning the ancestor.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of getElementsByTagName method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”. In modern code, we use querySelector because it is more powerful and shorter to write, but you may find it in older applications. Similarly, getElementsByClassName and getElementsByName are a few more of the relics you may find. It’s good to be familiar with these methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does getElementsByTagName return an element or a collection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The elem.getElementsByTagName(tag) looks for elements with the given tag and returns a collection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a live and static collection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All methods "getElementsBy*" return a live collection. Such collections always reflect the document\'s current state and “auto-update” when it changes. In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.',
      },
    },
  ],
};

export default StructuredData;
