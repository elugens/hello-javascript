const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the two types of custom elements in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We classify custom elements into two groups: autonomous custom elements and modified built-in components. Autonomous custom elements — elements that are "all-new" and extend the abstract HTMLElement class. Customized built-in elements — extending built-in components, such as a customized button based on HTMLButtonElement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the requirements needed to create a custom element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To create a custom element, we need a class extension, like HTMLElement, and a customElement defined to register the new element. These requirements cover both the customized and autonomous elements. In addition, there are several methods that we can use that are optional, like connectedCallBack, for custom elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What naming standard should be used for custom elements in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom element names must have a hyphen (-) e.g., my-element and super-button are valid names, but myelement is not. That is to ensure no name conflicts between built-in and custom HTML elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the five methods in the lifecycle callbacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five methods included in the lifecycle callbacks are the connectedCallback, disconnected, adoptedCallback, attributeChangedCallback, and the observedAttributes methods.',
      },
    },
    {
      '@type': 'Question',
      name: "Can you describe the connectedCallBack method's purpose?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The connectedCallBack invokes each time the custom element appends into a document-connected element. This action happens each time the node moves and before the element's contents completely propagates.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a base element, the one we are customizing, loads before the customized element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the browser encounters any elements we are trying to customize before customElements.define, that is not an error. But the element is yet unknown, just like any non-standard tag.<br /><br /> Such \u201Cundefined\u201D elements can be styled with CSS selector :not(:defined).<br /><br /> When customElement.define is called, they are \u201Cupgraded\u201D: a new instance of the element we are trying to customize gets created for each, and connectedCallback gets called. They become :defined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the reasoning for not utilizing the constructor and instead relying on connectedCallBack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reason is simple: it is too early when the constructor gets called. The element gets created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So, we cannot render there. Besides, if you think about it, it is better to delay the work until needed.<br /><br />When the element gets added to the document, the connectedCallback is triggered. It is not just attached to another element as a child but instead becomes a part of the page. As a result, we may construct detached DOM, create elements, and prepare them for subsequent usage. They do not render until they get included on the page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how observedAttribute works in conjunction with attributeChangedCallback?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When one of the custom element's attributes gets added, deleted, or updated, the attributeChangedCallback gets called. We may observe attributes by passing a list of them to the observedAttributes() static getter. When such attributes are adjusted, attributeChangedCallback invokes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the rendering order when the HTML parser builds the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the HTML parser builds the DOM, elements are processed and parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to ensure that custom-element returns a value on a nested element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the HTML parser builds the DOM, elements are processed and parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code. To handle inner elements, we can delay actions using setTimeout to ensure that the DOM has completed loading our document. If we want to pass information to custom-element, we can use attributes. They are available immediately, or if we need the children, we can defer access to them with zero-delay setTimeout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any issues with new or autonomous elements relative to search engines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a new or autonomous element like &#8249;my-element&#8250; does not give a search engine enough information, like associated semantics. The elements are unknown to search engines, and accessibility devices cannot translate them. We can extend and customize built-in HTML elements by inheriting them from their classes to fix this.',
      },
    },
  ],
};

export default StructuredData;
