const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it possible to cancel or abort an ongoing Fetch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there is a special built-in object for such purposes: AbortController. We can use it to abort, fetch, and do other asynchronous tasks. The usage is very straightforward. The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired. You can create a new AbortController object using the AbortController.AbortController() constructor. Communicating with a DOM request is done using an AbortSignal object (calling abort()).',
      },
    },
    {
      '@type': 'Question',
      name: 'Could you perhaps clarify the purpose of the AbortController Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We must create a new AbortController constructor to implement the AbortController object. The controller is an object with a single abort method and a property signal that allows us to put event listeners on it. When abort() gets called, the controller invokes. The abort event transmits by controller.signal, and the attribute "controller. signal. aborted" becomes true. When abort() invokes on it, AbortController passes abort events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to cancel an event without using the AbortController?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we could implement the same kind of event listening in our code independently, without the AbortController object. But what is valuable is that fetch knows how to work with the AbortController object, and it is integrated into it and optimized for its use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you cancel an ongoing fetch with the AbortController?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, to be able to cancel fetch, we must pass the signal property of an AbortController as a fetch option. The fetch method knows how to work with AbortController. It listens to abort events on a signal. Now, to abort, we call controller.abort(). At that point, fetch extracts the event from the signal and aborts the request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AbortController cancel or abort multiple fetches at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AbortController is scalable by default. It allows us to cancel multiple fetches at once, which can be exceptionally helpful when dealing with an array.',
      },
    },
  ],
};

export default StructuredData;
