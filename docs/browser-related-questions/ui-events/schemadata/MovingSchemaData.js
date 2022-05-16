const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the read-only property relatedTarget in a mouseover and mouseout event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During mouseover and mouseout events the relatedTarget property is relative to the element where the mouse entered and left the target element. For instance, a div is inside a body, and the mouse enters the div and back into the body. The body is the relatedTarget in this case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the relatedTarget be null during a mouseover/mouseout event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the relatedTarget property is nullable. That is normal because it implies that the mouse originated from outside the window rather than another element. Or that it walked out the window. When utilizing event.relatedTarget in our code, we should keep that option in mind. There are issues if we try to access event.relatedTarget.tagName.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the mouse trigger an event for every element it crosses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the mousemove event triggers when the mouse moves. But that does not guarantee that every pixel leads to an event. The browser checks the mouse position from time to time. And if it notices changes then it triggers the events. Some DOM elements may get skipped if the visitor is moving the mouse extremely fast. That is good for performance because there may be many intermediate elements. We do not want to process in and out of each one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between mouseenter/mouseleave and mouseover/mouseout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Events mouseenter/mouseleave are like mouseover/mouseout. They trigger when the mouse pointer enters/leaves the element. But there are two crucial differences. Transitions inside the element, to/from descendants, are not counted. Events mouseenter/mouseleave do not bubble.',
      },
    },
  ],
};

export default StructuredData;
