const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does the scroll event allow in terms of a page or element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scroll event seeks to respond to the scrolling of a page or element. We have a lot of nice things we can do here. For example, based on where the user is in the document, reveal or conceal extra controls or information—load extra info when the user scrolls down to the bottom of the page (lazy load).',
      },
    },
    {
      '@type': 'Question',
      name: 'How can we block scrolling on a web page in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cannot use event.preventDefault() in the onscroll listener to prevent scrolling because it fires after the scroll has already occurred. We may, however, disable event-based scrolling by using preventDefault() which invokes on a scroll-triggering event, such as the keydown event for pageUp and pageDown. The scroll does not begin if we add an event handler to these events and use event.preventDefault().',
      },
    },
  ],
};

export default StructuredData;
