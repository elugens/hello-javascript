const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to focus on an element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a user clicks on an element or presses the Tab key on the keyboard, it gains focus. An autofocus HTML property focuses on an element by default when the page loads, as well as other methods of gaining focus. Generally, focusing on an element signifies "prepared to take data here," at which point we may run the code to setup the appropriate functionality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does blur work concerning a focus event on an element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The moment of losing focus results in a blur. When a user clicks someplace else or presses Tab to go to the next form field, there are other means. Losing the focus generally means: “the data gets entered”, so we can run the code to check it or even save it to the server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how focus and blur events work in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the element loses focus, the blur event gets called. After the focus event, a popular solution uses a blur handler to verify if a field gets successfully typed. We can hide validation failures by using the handler. Many validations get implemented in modern HTML utilizing input element attributes such as required, pattern, and others. And they are sometimes just what we require. When we need greater flexibility, we may utilize JavaScript. Also, if the updated value is correct, we could transmit it to the server automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cause of JavaScript-initiated focus loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loss of focus can arise for various reasons. One of them is when the visitor navigates away from the page. However, JavaScript itself may be at blame. When an alert attracts attention to itself, the element loses focus (blur event), and when the alert gets dismissed, the focus returns (focus event). When an element gets deleted from the DOM, attention is lost, and if it reinserts, the attention does not return. These features can cause focus/blur handlers to misbehave, triggering when they are not required. The recommended recipe is to use these occurrences with caution. We should avoid generating user-initiated focus loss if we wish to track it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to focus/blur on any element in the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Many elements do not allow focusing by default. The list varies slightly between browsers, but one thing is always true: focus/blur support is assured for elements with which a visitor may interact: &#8249;button&#8250;, &#8249;input&#8250;, &#8249;select&#8250;, &#8249;a&#8250;, and others. Elements that exist to format something, such as &#8249;div&#8250;, &#8249;span&#8250;, and table>, on the other hand, are unfocusable by default. The method `elem.focus()` does not affect them, and focus/blur events are never triggered. If an element has a tabindex, it becomes focusable. The property's value is the element's order number when Tab (or anything similar) gets used to transition between them.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to focus/blur and ensure bubbling happens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, we may take two techniques to ensure bubbling. To begin, there is an amusing historical feature: focus/blur does not bubble up but rather propagates downward during the capture period. Second, there are focusin and focusout events, similar to focus/blur but bubble. It is important to note that they get allocated using 'elem.addEventListener' rather than on&#8249;event&#8250;.",
      },
    },
  ],
};

export default StructuredData;
