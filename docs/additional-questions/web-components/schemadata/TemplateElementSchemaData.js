const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a built-in HTML template element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A built-in &#8249;template&#8250; element is used to store HTML markup templates. Although the browser ignores its contents and checks for syntactic validity, we may access and utilize it in JavaScript to build additional components. We could build an invisible element anywhere in HTML to store HTML markup. The &#8249;template&#8250; element\'s content may be any good HTML, even though it ordinarily requires an enclosing tag. We may also utilize styles and scripts within our templates without influencing the document\'s load time. The browser considers &#8249;template&#8250; content to be "out of the document": styles are not applied, scripts do not execute, and &#8249;video autoplay&#8250; is not activated. When we enter the content into the document, it becomes live (styles get applied, scripts execute, and so on).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when we insert template content into the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When we insert template content into the DOM, it is available in its content property as a DocumentFragment, a special DOM node. We can treat it as any other DOM node, except for one unique property; its children insert instead when we insert it somewhere in the document. We can also insert the template content into the Shadow DOM in the same fashion.',
      },
    },
  ],
};

export default StructuredData;
