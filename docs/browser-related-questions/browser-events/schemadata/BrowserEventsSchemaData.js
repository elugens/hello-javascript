const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an event concerning the DOM, Browser, and JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name at least three DOM events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several DOM events, including mouse, keyboard, form element, document, and CSS events. The most common is mouse and keyboard events, like mouse click and keyboard `keydown` events.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a JavaScript event handler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A JavaScript event handler is a function that runs in the case of an event. Handlers are a way to run JavaScript code in case of user actions. There are several ways to assign a handler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you execute an event in an HTML attribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can set an event handler in HTML with an attribute named on&#8249;event&#8250;. The onevent handlers are properties on particular DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and more.) or non-interactive (such as the base &#8249;body&#8250; element). The onevent handler usually gets named with the event it reacts to, like onclick, onkeypress, and onfocus. You can specify an on&#8249;…&#8250; event handler for a particular event (such as click) for a given object differently. An HTML attribute is not a convenient place to write tons of code. So, it gets recommended to us that we write an event handler. As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually, attributes are lowercased: onclick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is connecting a handler with a DOM `on<event>` property possible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can assign a handler using a DOM property on&#8249;event&#8250;. If the handler is assigned using an HTML attribute, the browser reads it, creates a new function from the attribute content, and writes it to the DOM property. This action is similar to using a function as an event handler, but it’s less direct.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to utilize an event on a DOM element more than once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, not directly; the second event gets overwritten, and the current event returns the second value. We have to implement an event listener if we intend to add more than one handler.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the reason for not using setAttribute for handlers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reason behind not using setAttribute for handlers is that attributes are always a string so that the function becomes a string instead of a function.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are DOM properties names case-sensitive or case-insensitive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DOM property names are case-sensitive. We should assign a handler to elem.onclick, not elem.ONCLICK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the EventTarget addEventListener method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EventTarget method addEventListener(event, target, options) sets up a function call whenever the specified event gets delivered to the target. Typical targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).',
      },
    },
    {
      '@type': 'Question',
      name: 'How should you remove a previously added event listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To remove an event that gets added, use the removeEventListener(event, handler) function. We should pass the same function that we previously allocated to delete a handler. We cannot remove the function if it does not get stored in a variable. There are no techniques available for "reading back" handlers given by addEventListener.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any event that you cannot assign using a DOM property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are events that a DOM property cannot assign. Only when using addEventListener. The DOMContentLoaded event, for example, is triggered when the page is loaded and the DOM gets created, and the addEventListener method is more adaptive in this case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the event object used for in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web developers use the event object for various actions, including getting the event type, current target, and window relative coordinates of the current during point events. The event object can be called directly in HTML attributes or inside our scripts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are we limited to just function handler in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can assign not just a function but also an object as an event handler using addEventListener. When an event occurs, the object handler method gets invoked, and we could also use a class as another approach.',
      },
    },
  ],
};

export default StructuredData;
