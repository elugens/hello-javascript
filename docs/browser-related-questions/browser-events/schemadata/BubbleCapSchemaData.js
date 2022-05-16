const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the bubble-up principle concerning events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bubbling-up principle is self-explanatory based on its name. In principle, when an event happens on an element, it first runs its handlers, then on its parent, and back up to the other ancestors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the event target is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most deeply nesting element that created the event is known as a target element, and it may be accessed using event.target. The event target does not change through the bubbling process; JavaScript views it as the initial point of the event. The current target is the precise target at which the current action takes place, where "this = event.currentTarget." It is conceivable that event.target equals either this or the current target.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to stop an event from bubbling up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'f necessary, we can use two methods to explicitly stop the bubbling up process, including the stopPropagation and stopImmediatePropagation. Using these two approaches should be limited because of some drawbacks, such as click event failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the event stopPropagation and stopImmediatePropagation methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but all other handlers run on the current element. To stop the bubbling and prevent handlers on the current element from running, we use event.stopImmediatePropagation(). After it, no other handlers execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three phases of event propagation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three phases of event propagation, including the capturing, targeting, and bubbling phases. The capturing phase is the process of the event traveling down to the target element ( &#123;capture: true&#125; ). The targeting phase is when we reach our target element, and the bubbling phase is the process of bubbling up from the target element.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a straightforward way to invoke capturing an event in the capturing phase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we need to set the handler capture option to true to catch an event on the capturing phase. There are two possible values of the capture option true and false. If it is false (default), the handler is set to the bubbling phase. If it is true, then the handler is set on the capturing phase.',
      },
    },
  ],
};

export default StructuredData;
