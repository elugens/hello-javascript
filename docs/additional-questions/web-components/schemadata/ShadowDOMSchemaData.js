const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Shadow DOM, and how does it relate to the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Encapsulation gets provided via the Shadow DOM. It enables a component to have its own "shadow" DOM tree that cannot unintentionally get accessed from the main page and local style rules and other features.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are complex browser controls parsed into the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Internally, the browser draws or parses them using DOM/CSS. Usually, that DOM structure gets hidden from us, but we may view it in developer tools. In Chrome, for example, we must enable the "Show user agent shadow DOM" option in Dev Tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Shadow DOM elements accessible via JavaScript calls or selectors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, we cannot retrieve built-in shadow DOM elements by regular JavaScript calls or selectors. These are not regular children but rather a powerful encapsulation technique. However, we can access their pseudo attributes via the CSS styles. This behavior exists for historical reasons to ensure that the CSS styles access the sub-elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Regarding the DOM, what are the two types of subtrees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regarding the DOM, there are two subtrees: light trees and shadow trees. The light tree is a standard DOM subtree made-up of standard HTML children, and the Shadow tree is a hidden DOM subtree that is not mirrored in HTML and is hence invisible to inquisitive eyes. If an element has both, the browser only draws the shadow tree. But we may also create a scene with shadow and light trees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to hide custom element component internals using the shadow DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a shadow tree can be used in Custom Elements to hide component internals and apply component-local styles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the limitations to creating a shadow root on a custom element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two restrictions for creating a root on a custom element. We can only have one shadow root per element. The element must be either a custom element or one of the following: "article," "aside," "blockquote," "body," "div," "footer," "h1 to h6," "header," "main," "nav," "p," "section," or "span." Other elements, such as &#8249;img&#8250;, cannot host shadow-tree.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the attachShadow() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The attachShadow() function connects the shadow DOM tree to a specific element and returns a reference to its ShadowRoot. To initiate the Shadow Root, we must use the mode argument with the open parameter. The open parameter makes the element of the shadow root accessible outside of the root. The second parameter, closed, denies access to the nodes of the closed shadow root from JavaScript outside it. An additional argument delegatesFocus rarely gets used, delegatesFocus is a Boolean; when set to true, it specifies behavior that mitigates custom element issues around focus-ability. Note: You cannot attach a shadow root to every type of element, and some cannot have a shadow DOM for security reasons (for example, `<a>`) and more besides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the delimitation of the shadow DOM from the main document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The shadow DOM gets separated from the original content. From the light DOM, querySelector does not see shadow DOM items. Ids in the shadow DOM may clash with those in the light DOM, and they must be one-of-a-kind exclusively within the shadow tree. Shadow DOM comes with its private stylesheet; style rules from the outside DOM get ignored.',
      },
    },
  ],
};

export default StructuredData;
