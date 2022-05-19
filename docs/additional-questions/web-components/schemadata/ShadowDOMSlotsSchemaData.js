const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the HTML named `<slot>` element used for in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HTML &#8249;slot&#8250; element is part of the Web Components technology suite, which acts as a placeholder inside a web component that you can fill with your markup. It lets you create separate DOM trees and present them together.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the definition of a flattened DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The combination of the Light DOM and the shadow DOM is considered the flattened DOM result. The flattened DOM is viewable in the developer tools for inspection but unavailable in the source.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the slot attribute's principal limitation?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The slot="..." attribute is only valid for direct children of the shadow host. For nested elements, it gets ignored. If there are multiple elements in light DOM with the same slot name, they append into the slot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what slot fallback content is in browser rendering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we put something inside a &#8249;slot&#8250;, it becomes the fallback, “default” content. The browser shows it if there is no corresponding filler in light DOM. If the slot is in the shadow DOM it renders if there is no slot available in the light DOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'In the Shadow DOM, what is the default slot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first &#8249;slot&#8250; in shadow DOM that does not have a name is a “default” slot. The default slot gets all nodes from the light DOM that are not slotted elsewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three methods that handle HTML slot element assignment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The HTML slot element has three main methods, including assignedSlot, assignedNodes, and assignedElements used to handle or assess element node assignment. The assignedSlot method returns the &#8249;slot&#8250; element that the node gets assigned. The assignedElements() method returns a sequence of the nodes assigned to this slot, and if the flatten option sets to true, the assigned nodes of any other slots are descendants of this slot. If no assigned nodes return, the slot's fallback content returns. The assignedSlot method returns an HTMLSlotElement representing the &#8249;slot&#8250; element the node is inserted in. These methods are useful when we need to show the slotted content and track it in JavaScript.",
      },
    },
  ],
};

export default StructuredData;
