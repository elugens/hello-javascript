const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an event change function or work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The change event triggers when the element has finished changing. The behavior depends on the kind of element getting changed and how the user interacts with the element. The change event fires at a different moment. For text inputs, the event occurs when it loses focus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how an input event functions when triggered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The input event triggers whenever the user changes a value. It initiates any value change, even ones that do not require keyboard activities, such as copying with a mouse or using speech recognition to dictate the text. This event is the ideal solution if we want to handle every change to an &#8249;input&#8250;. In contrast, the input event does not trigger through a keyboard input or other activities that do not require a value change, such as hitting the right or left arrow keys when in the input.',
      },
    },
    {
      '@type': 'Question',
      name: 'What class do the cut, copy, and paste events belong to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They belong to ClipboardEvent class and provide access to the data that is copied/pasted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how the cut, copy, and paste events work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These events occur when you cut, copy, or paste a value. They are members of the ClipboardEvent class and offer access to copied/pasted data. We may alternatively use event.preventDefault() to cancel the operation, which means nothing is copied or pasted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any user-related safety restrictions concerning the ClipboardAPI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the clipboard is a “global” OS-level application program interface. So, most browsers allow read/write access to the clipboard only in the scope of specific user actions for security, e.g., an onclick event handlers. Also, it is forbidden to generate “custom” clipboard events with dispatchEvent in all browsers except Firefox.',
      },
    },
  ],
};

export default StructuredData;
