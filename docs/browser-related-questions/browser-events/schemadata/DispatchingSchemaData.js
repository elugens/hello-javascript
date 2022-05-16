const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Event constructor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Built-in event classes form a hierarchy, like DOM element classes. The root is the built-in Event class, and the Event() constructor creates a new Event. We can create custom events or act on built-in events, such as click, mousedown, etc. There are two arguments the event type (custom or built-in) and the options. The type is a DOMString representing the name of the event. The second argument is the option that includes the bubble, cancelable, and composes option properties. Bubbles is a Boolean value that indicates whether the event bubbles; the default value is false. Cancelable is a Boolean that indicates whether or not the event cancels out. Composed is a Boolean that indicates whether the event triggers listeners outside of a shadow root, set to false by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the dispatchEvent() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After an event object gets created, we should “run” it on an element using the call elem.dispatchEvent(event). Then handlers react to it as if it were a regular browser event. If the event was created with the bubbles flag, it bubbles up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to tell a “real” user event from a script-generated one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the isTrusted read-only property of the Event interface is a Boolean that is true when a user action generates the event and false when the event was created or modified by a script or dispatched via dispatchEvent() method.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distinction between creating a new Event and creating a new CustomEvent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, CustomEvent is the same as Event, with one exception. In the second argument (object), we can add property details for any custom information we want to pass with the event. The detail property can have any data. Technically we could live without it because we can assign any properties to a regular new Event object after its creation. But CustomEvent provides the unique detail field to evade conflicts with other event properties. In this case, it is the recommended approach. Besides, the event class describes “what kind of event” it is, and if the event is custom, we should use CustomEvent to be clear about it.',
      },
    },
    {
      '@type': 'Question',
      name: "Is it possible to override a CustomEvent's default behavior?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use event.preventDefault as you would with a regular Event. By calling event.preventDefault(), an event handler may signal that those actions should get canceled. In that case, the call to elem.dispatchEvent(event) returns false. And the code that dispatched it knows that it should not continue. Please note: the event must have the flag cancelable: true, otherwise the call event.preventDefault() is ignored.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are nested events handled synchronously or asynchronously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nested events are handled synchronously by default. Usually, events get processed in a queue. If the browser is processing onclick and a new event occurs, e.g., the mouse moved, then handling is queued up, corresponding mousemove handlers call after onclick processing finishes. The notable exception is when one event is initiated from within another, e.g., using dispatchEvent. Such events are processed immediately: new event handlers get called, and the current handling is resumed. However, you can implement asynchronous behavior explicitly by using setTimeout method.',
      },
    },
  ],
};

export default StructuredData;
