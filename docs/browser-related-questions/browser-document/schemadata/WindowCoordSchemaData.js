const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'To be able to move components, we must first comprehend coordinates. What are the two coordinate systems you should be familiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most JavaScript methods work with one of two coordinate systems: relative to the window and document coordinate systems. We indicate these coordinates as clientX/clientY relative to the window — similar to position:fixed, derived from the window top/left edge. We identify them as pageX/pageY relative to the document — analogous to position:absolute in the document root, derived from the document top/left edge. When the page scrolls to the bottom, these coordinates equal each other, thus the top/left corner of the window matches the top/left corner of the content.However, as the document moves, the window-relative coordinates of elements change as they travel across the window, but the document-relative coordinates remain constant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the element getBoundingClientRect method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Element.getBoundingClientRect() function produces a DOMRect object with information about an element's size and location in relation to the viewport. The result returned is a DOMRect object, which is the smallest rectangle that contains the whole element, including padding and border-width.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why are derived attributes required? Why do top/left exist if x/y exists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A rectangle gets mathematically defined by its beginning point (x,y) and direction vector (width, height). As a result, the extra derived properties get provided as a convenience. Technically, width/height can be negative, allowing for a "directed" rectangle, such as a mouse selection with correctly indicated start and end points. Negative width/height values indicate that the rectangle begins at the bottom-right corner and subsequently "grows" leftwards; in this situation, left/top do not equal x/y. However, elem.getBoundingClientRect() always returns positive width/height; we mention negative width/height to explain why these seemingly redundant values do not end in duplication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Internet Explorer provide support for x/y coordinates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For historical reasons, Internet Explorer does not support x/y attributes. So we can either create a polyfill (add getters to DomRect.prototype) or just use top/left, which remain the same as x/y for positive width/height, especially in the result elem. getBoundingClientRect().',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the method elementFromPoint(x,y) do in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Document object's elementFromPoint() function returns the topmost Element at the supplied coordinates (relative to the viewport). If the element at the provided location belongs to another document (for example, the document of an &#8249;iframe&#8250;), the parent element of that document (the &#8249;iframe&#8250; itself) is returned. If the element at the provided location contains anonymous or XBL produced content, such as scroll bars in a textbox, the first non-anonymous ancestral element (the textbox) is returned.",
      },
    },
    {
      '@type': 'Question',
      name: 'For out-of-window coordinates, what does the elementFromPoint return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method document. elementFromPoint(x,y) is only useful if (x,y) are within the viewable region. It returns null if any of the coordinates is negative or exceeds the window width/height.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do document relative coordinates start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Document-relative coordinates begin at the upper-left corner of the document rather than the window. Window coordinates are equivalent to position:fixed in CSS, but document coordinates are equivalent to position:absolute on top.',
      },
    },
  ],
};

export default StructuredData;
