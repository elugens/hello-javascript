const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens to the HTML when the browser loads the page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a page gets loaded, the browser "reads" (also known as "parses") the HTML and builds DOM objects from it. Most standard HTML characteristics for element nodes are automatically converted to DOM object properties. If the element is &#8249;body id="page"&#8250;, the DOM object contains body.id="page." The attribute-property mapping, however, is not one-to-one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you modify or customize a DOM node?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because DOM nodes are ordinary JavaScript objects, we can modify them just like any other object. This object may change or add methods and attributes, as well as edit built-in prototypes such as Element.prototype and add new methods to all elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do different elements have different standard HTML attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, We should note that a standard attribute for one element can be unknown for another. An example is the input element with a standard type attribute used to specify the input type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to non-standard attributes when the browser loads the page? Does it become a DOM property like standard element attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them. In the case of non-standard attributes, DOM properties get created, and any invocation of those attributes returns undefined.<br /><br />\r\n The attribute exists, but it does not get defined as DOM property, which inevitably returns undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to access non-standard HTML attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, various JavaScript methods, such as hasAttribute, getAttribute, setAttribute, and removeAttribute, are used to access non-standard HTML attributes. These approaches work with precisely what is written in HTML. Additionally, elem.attributes may be used to read all attributes: a collection of objects that belong to the built-in Attr class, containing name and value properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two primary features of HTML attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All HTML attributes have two essential features. Their name is case-insensitive (id is the same as ID), and their values are always strings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to the related property when a standard attribute changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a standard attribute changes, the corresponding property is auto-updated, and vice versa, but there are some exceptions to the rule. This behavior gets defined as property-attribute synchronization in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name one exception to the rule of property-attribute synchronization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One exclusion or exception is input.value can only synchronize from attribute to property, but not back. Changing the attribute value updates the property, but the property change does not affect the attribute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are DOM properties always strings like HTML attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, DOM properties are not always strings because they have property types. For instance, the input.checked property (for checkboxes) is a Boolean (either checked or not checked). There are other examples. The style attribute is a string, but the style property is an object. Most properties are strings, however.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you describe a case for the use of non-standard attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use non-standard attributes to pass custom data from HTML to JavaScript or “mark” HTML elements for JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to style an element with non-standard HTML attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, we can use non-standard HTML attributes to style our elements. This change may be accomplished by acting on an element's class or id and modifying the styles. This approach works for both inline and external style sheets, and this is a much better way to handle the style based on the state of our elements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to avoid conflicts when creating custom attributes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we should prepend custom attributes with the “data-*” attribute to avoid conflicts in your code. All attributes starting with “data-” are reserved for programmers’ use and available in the dataset property. The main reason to use the data attribute is if the standard attribute specification is updated. You can avoid any conflicts in your code. Using data-* attributes is a proper, safe way to pass custom data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are multi-word attributes case sensitive in dataset properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, multi-word attributes are case-sensitive in dataset properties. We should use camel-cased styling when we are using dataset properties.',
      },
    },
  ],
};

export default StructuredData;
