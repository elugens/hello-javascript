const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between the Light DOM and the Shadow DOM in event retargeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Retargeting means that events that originate in the shadow DOM look like they come from the element itself. Event retargeting is excellent because the outer document does not have to know about component internals. You should note that retargeting does not occur if the event occurs on a slotted element that physically lives in the light DOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'In the case of event bubbling, does it happen in the Shadow or Flattened DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We use the flattened DOM for purposes of event bubbling. So, if we have a slotted element, and an event occurs somewhere inside it, it bubbles up to the &#8249;slot&#8250; and upwards. With all the shadow elements, the full path to the original event target gets extracted using event.composedPath(). As we can see from the method's name, the path gets taken after the composition.",
      },
    },
    {
      '@type': 'Question',
      name: 'When the attachShadow method mode is set to closed, what happens to the shadow tree details?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If the shadow tree gets created with &#123;mode: 'closed'&#125;, then the composed path starts from the host and upwards. That is similar to other methods that work with shadow DOM, and the Internals of the closed tree are hidden.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the flattened DOM, relative to the shadow DOM, used for event bubbling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We use the flattened DOM, giving us access to the full path necessary for event targeting. With all the shadow elements, the full path to the original event target gets extracted using event.composedPath(). As we can see from the method's name, the path gets taken after the composition.",
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the Event.composedPath() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The composedPath() method returns the event's path, an array of the objects on which listeners invoke. This process does not include nodes in shadow trees if the shadow root gets created with its ShadowRoot.mode closed.",
      },
    },
    {
      '@type': 'Question',
      name: 'The majority of events pass across a shadow DOM boundary. In UI events, what attribute do we utilize to open the composition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The composed event object property governs this process. If it is true, then the event crosses the boundary. Otherwise, it only can be caught from inside the shadow DOM. The read-only composed property returns a Boolean, which indicates whether the event propagates across the shadow DOM boundary into the standard DOM. Most UI Events have the composed property set to true in most cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What steps are needed to dispatch custom events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When we dispatch custom events, we need to set both bubbles and composed properties to true for it to bubble up and out of the component.',
      },
    },
  ],
};

export default StructuredData;
