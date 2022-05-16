const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a default action considered in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several different default actions in the browser. For instance, a click on a link initiates the navigation to the specified URL. Another default action is highlighting text when pressing a mouse button as we glide over the text. As developers, we have control over many of these actions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a built-in function or method to prevent browser actions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use the preventDefault method to prevent specific browser actions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when you return a false value from a handler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The value returned by an event handler usually gets ignored. The only exception is returning false from a handler assigned on&#8249;event&#8249;. In all other circumstances, the return value gets disregarded, making no sense to return true.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the function of the defaultPrevented property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The defaultPrevented read-only property of the Event interface returns a Boolean indicating whether the call to Event.preventDefault() canceled the event. The property event.defaultPrevented is true if the default action was prevented and false otherwise.',
      },
    },
  ],
};

export default StructuredData;
