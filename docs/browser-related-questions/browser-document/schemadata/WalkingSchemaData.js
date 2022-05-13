const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean in JavaScript to walk the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can do anything with elements and their contents thanks to the DOM, but first, we must locate the proper DOM object. This step-by-step procedure is known as walking the DOM. All DOM actions begin with the document object. This point is the primary "entry point" into DOM, and we can reach any node from it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the topmost tree nodes available direct as document properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The topmost tree nodes, including the HTML, body, and head nodes, are accessible as document properties right away. document.documentElement The uppermost document node is called an element. That is the DOM node for the &#8249;HTML&#8250; element. Another often used DOM component is the &#8249;body&#8250; element — document.body. The &#8249;head&#8250; tag is also known as document.head. Any node that extends beyond this point is a part of the body node.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does null mean or equate to in the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The null value in the DOM implies "doesn\'t exist" or "no such node". A script can\'t access an element that doesn\'t exist when it runs. If we include a script within &#8249;head&#8250;, document.body is inaccessible since the browser has not yet read it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Child nodes and Descendants in the DOM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A child node in the DOM is a direct child of the provided parent. Descendants include all components nested within the provided one, such as children and their children.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what the firstChild and lastChild properties do on elements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The first and last child element characteristics provide quick access to a parent element's first and last children. The firstChild and lastChild attributes are considered shorthand. We utilize the childNodes property to communicate with nodes using brackets. There is also a specific function elem.hasChildNodes() that we can determine whether or not there are any child nodes.",
      },
    },
    {
      '@type': 'Question',
      name: 'What type of object structure are childNodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The childNodes looks like an array, but it is not an array but rather a collection (a particular array-like iterable object). This object allows us to iterate over the childNodes using a for…of loop, which is consequential. That is because it is iterable (provides the Symbol.iterator property, as required). Since it's an array-like object we do not get all the benefits of arrays like the filter and map methods. However, there is a solution that we can use by invoking Array.from() and turning the childNodes into an array.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to loop over node collections with a for…in loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Theoretically, you may use a for...in loop to cycle across collections. However, it is not advised—the for..in loop loops over all enumerable attributes. And collections include several "additional" attributes that seldomly get used, and we usually do not want, such as entries, forEach, and keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you define what a sibling is in the DOM structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Siblings are nodes that are the same parent\'s children. The head and body nodes, siblings, and both offspring of the HTML node are an example. The &#8249;body&#8250; is the "next" or "right" sibling of the &#8249;head&#8250;, while the &#8249;head&#8250; is the "previous" or "left" sibling of the &#8249;body&#8250;.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there properties that we can use to access any of the following and previous node siblings (Note: including text and comment nodes)? How do you access the parent node?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can access the next sibling via the nextSibling property, and the previous sibling node gets accessed via the previousSibling property. We can access the parent node via the parentNode property. We should note that using these properties allows direct access to all nodes, including the text and comment nodes.',
      },
    },
    {
      '@type': 'Question',
      name: 'There are times when we do not want to access the text and comment nodes. Is there a property we can use to access the next sibling element node?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when we are interested in only accessing element nodes. Some properties serve that purpose for the previous and the next sibling element nodes. For the next sibling element node, we can use nextElementSibling property, and for the previous element node, we use previousElementSibling property. Web developers commonly referred to this feature as element-only navigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why parentElement? Can the parent be not an element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ParentElement returns the "element" parent, whereas parentNode returns the "any node" parent. These characteristics are often the same: they both receive the parent. Except for the document.documentElement refers to the document\'s initial node without a parent element. This characteristic is because of the root node document.documentElement (&#8249;html&#8250;) is the child of the document. However, because the document is not an element node, parentNode does not return it, and parentElement does not.',
      },
    },
    {
      '@type': 'Question',
      name: 'Besides the essential DOM elements, do elements provide additional properties based on their specific type?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Certain types of DOM elements may provide additional properties specific to their type for convenience. An excellent example of this is table elements that provide table.rows, table.caption, table.tBodies, and additional properties that we can access. The table.rows property is a collection of &#8249;tr&#8250; elements of a table that we can modify via the DOM and highlight or change the text as an example. There are also additional navigation properties for HTML forms.',
      },
    },
  ],
};

export default StructuredData;
