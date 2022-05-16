const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is event delegation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a parent element provides event listeners to its children, this is known as event delegation. The event listener activates whenever an event fires on the child element due to event bubbling (event propagation).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the behavior pattern in terms of event delegation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In events, the behavior pattern has two parts. First, we add a custom attribute to an element that describes its behavior. Second, a document-wide handler tracks events and acts if an event happens on an attributed element.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly is event bubbling/event propagation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When an element triggers an event, the event handler/event listener associated with that event gets called. When an event fires on a parent element, it goes through a "bubbling" phase. The browser checks to determine if the element that caused the event has an event handler registered to it during the "bubbling" phase. If it does, the event handler executes. If it does not, it proceeds to the parent element and checks to see if it has an event handler assigned to it. The browser proceeds up the parent element chain, checking for and executing registered event handlers until it reaches the root element.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to prevent event bubbling in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can add the stopPropagation() method to the event in your event handler.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good use-case for event delegation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Event delegation can be pretty handy when you wish to set an event listener on child elements automatically. Assume you want to add an event listener to all the &#60;li&#62; components in an &#60;ul&#62;. On the other hand, the unordered list gets constructed dynamically based on data obtained from an API call. An event handler could not be attached to each &#60;li&#62; element individually, but it could be attached to the &#60;ul&#62; element and delegated to each of the child &#60;li&#62; elements.',
      },
    },
  ],
};

export default StructuredData;
