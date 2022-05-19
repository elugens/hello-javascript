const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you include CSS styles in a Shadow DOM template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Shadow DOM may include both &#8249;style&#8250; and &#8249;link rel="stylesheet" href="…"&#8250; tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use the same template. As a rule, local styles work only inside the shadow tree, and document styles work outside the shadow tree. But there are few exceptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the CSS :host psuedo-class does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ":host" CSS pseudo-class selector picks the shadow host of the shadow DOM containing the CSS.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the :host(selector) class function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ":host(selector)" CSS pseudo-class selector picks the shadow host of the shadow DOM containing the CSS. It is identical to the regular :host pseudo-class (allowing you to select a custom element from inside its shadow DOM) but only gets put in an application (applied) if the selector sent to the function matches the shadow host.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the CSS - :host-context(selector) work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It works the same as :host, but it is applied only if the shadow host or ancestors in the outer document matches the selector.',
      },
    },
    {
      '@type': 'Question',
      name: 'What approach can you use to style slotted content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two choices if we would like to style slotted elements in our component. First, we can style the &#8249;slot&#8250; itself and rely on CSS inheritance. Another option is to use:: slotted(selector) pseudo-class. It matches elements based on two conditions. First, it is a slotted element from the light DOM. Slot name does not matter. Any slotted element suffices, not its offspring, but just the element itself. Second, the element corresponds to the selection. We should notice that the "::slotted" selection cannot go farther inside the slot.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we style internal elements of a component from the main document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No selector can directly affect shadow DOM styles from the document. But just as we expose methods to interact with our component, we can expose CSS variables (custom CSS properties) to style it. Custom CSS properties exist on all levels, both in light and shadow.',
      },
    },
  ],
};

export default StructuredData;
