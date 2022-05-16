const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the event order of a mouse left-click in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The event order of a mouse left-click is mousedown, mouseup, and then click to complete the left-click with the mouse. The left button is considered the primary button that returns the event.button equaling zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'If a user is on a MAC, what is the event property key for their OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The `metaKey` is the property corresponding to a keypress of the CMD modifier key on a Mac device.',
      },
    },
    {
      '@type': 'Question',
      name: 'What differentiates window and document relative mouse positions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In summary, document-relative coordinates pageX/Y are numbered from the document's left top corner and do not change when the page begins to scroll. ClientX/Y, on the other hand, are counted from the upper left-hand corner of the current window and do not move or shift when the user navigates the website.",
      },
    },
    {
      '@type': 'Question',
      name: 'A double mouse click has the unintended consequence of selecting that text. Is there a method to disable this particular behavior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can turn off this side-effect using JavaScript or an element attribute by setting mousedown to false.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you block text or image copying in a browser document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, if we want to disable selection to protect our page content from copy-paste by the user, we can use oncopy event and set it to false. This approach doesn’t restrict the user from accessing the page's HTML source, but it does make it more difficult.",
      },
    },
  ],
};

export default StructuredData;
