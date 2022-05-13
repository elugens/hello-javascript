const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the hierarchy in classes of DOM nodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each DOM node belongs to the corresponding built-in class. The root of the hierarchy is EventTarget, inherited by the node, and other DOM nodes inherit from it, such as text, element, and comment nodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you briefly explain the purpose of the EventTarget abstract class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EventTarget is the root “abstract” class. Objects of that class do not adhere to an abstract creation process; it serves as a base so that all DOM nodes support so-called “events”.',
      },
    },
    {
      '@type': 'Question',
      name: "Can you describe the Node abstract class's function?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Node is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree functionality: parentNode, nextSibling, childNodes, and more (they are getters). Objects of the node class get created. But concrete node classes inherit from it: Text nodes for text nodes, Element nodes for element nodes, and more exotic ones like Comment nodes for comment nodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the purpose of the Element base class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Element is a base class for DOM elements. It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector. A browser supports not only HTML, but also XML and SVG. The Element class serves as a base for more specific classes: SVGElement, XMLElement and HTMLElement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the purpose of the HTMLElement base class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HTMLElement is the base class for all HTML elements. It is inherited by concrete HTML elements such as the HTMLInputElement, HTMLBodyElement, and HTMLAnchorElement classes.<br /><br />\r\n  <strong>Additional Information:</strong><br /><br />\r\n  <ul>\r\n    <li>HTMLInputElement is the class for &#8249;input&#8250; elements.</li>\r\n    <li>HTMLBodyElement is the class for &#8249;body&#8250; elements.</li>\r\n    <li>HTMLAnchorElement is the class for &#8249;a&#8250; elements.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you expose the DOM node class name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To see the DOM node class name, we recall that an object usually has the constructor property. It references the class constructor and constructor.name is its name, or we can toString it. We also can use instanceof to check the inheritance, which returns a Boolean value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between console.dir and console.log when returning objects in the console?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most browsers allow two commonly used commands in their development tools: console.log and console.dir. Their arguments get printed on the console. These instructions typically have the same effect on JavaScript objects. However, console.log(elem) displays the element's DOM tree for DOM elements. The element gets shown as a DOM object using console.dir(elem), allowing you to examine its properties.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is an interface description language or IDL in programming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An interface description language or interface definition language (IDL), is a specification language used to describe a software component's application programming interface (API). IDLs describe an interface in a language-independent way, enabling communication between software components that do not share one language, such as those written in C++ and those written in Java.",
      },
    },
    {
      '@type': 'Question',
      name: 'How are DOM classes described in the specification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the specification, DOM classes don’t get described by using JavaScript but a unique Interface description language (IDL) that is easy to understand. In IDL, all properties get prepended with their types. For instance, DOMString, boolean, and so on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the nodeType property return in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It has a numeric value that reflects the type of node you are returning. For element nodes, it is 1; for text nodes, it is 3; and for the document object 9. There are others listed in the specification: https://dom.spec.whatwg.org/#node',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the nodeName and tagName properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The contrast gets mirrored in their names, but it is slight. Only Element nodes have the tagName attribute. For each Node, the nodeName gets specified, but elements have the same meaning as tagName, and for other node kinds (text, comment, and more), it has a string with the node type. In other words, tagName only gets used to describe element nodes (since it gets inherited from the Element class), whereas nodeName may be used to describe other node types.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a difference between what gets returned when the tagName attribute gets used on HTML and XML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Although this may seem trivial, the answer is YES. The browser has two modes of processing documents: HTML and XML. Usually, the HTML-mode gets used for web pages. XML-mode is enabled when the browser receives an XML-document with the header: Content-Type: application/xml+xhtml. In HTML mode tagName/nodeName is always uppercased: it is BODY either for &#8249;body&#8250; or &#8249;BoDy&#8250;. In XML mode, the case gets kept “as is”. Nowadays, XML mode rarely gets used, but you may encounter it in older applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the innerHTML property does in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The innerHTML property allows us to insert data/HTML inside an element as a string. We can also modify it. So, it is one of the most powerful ways to change the page dynamically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when you attempt to insert the script tag using the innerHTML property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If innerHTML inserts a &#8249;script&#8250; tag into the document – it becomes a part of HTML but does not execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main thing you should know when using “innerHTML+=” syntax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When using the “innerHTML+=” we should know the property is not an addition but a full overwrite. We can append HTML to an element by using elem.innerHTML+="more HTML". But we should be careful about doing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the outerHTML property does in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The element's full HTML gets stored in the outerHTML attribute. This structure is equivalent to innerHTML plus the element itself. Be aware that, unlike innerHTML, writing to outerHTML does not affect the element. Instead, it substitutes it in the DOM. We can write to elem.outerHTML, but this does not modify the element we're writing to ('elem'). Instead, it replaces it with the new HTML. By accessing the DOM, we may obtain pointers to the new items.",
      },
    },
    {
      '@type': 'Question',
      name: 'For element nodes, we can use innerHTML, but what is the recommended for use with the other node types like text nodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The innerHTML attribute applies exclusively to element nodes. Other node kinds, such as text nodes, have an equivalent: nodeValue and data properties. These two are nearly identical in terms of practical usage, with just minor specification changes. As a result, we should utilize the data property because it is easier to implement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good use case for reading data from comments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use comments to embed information or template instructions into HTML. Then JavaScript can read it from data property and process embedded instructions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the textContent property does in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The textContent provides access to the text inside the element: only text, minus all &#8249;tags&#8250;. In practice, reading such text is rarely needed. Writing to textContent is much more helpful because it allows us to write text the “secure way”.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain what the hidden attribute and DOM property does in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The “hidden” attribute and the DOM property specifies whether the element is visible or not. Technically, hidden works the same as style="display:none". But it’s shorter to write.',
      },
    },
  ],
};

export default StructuredData;
