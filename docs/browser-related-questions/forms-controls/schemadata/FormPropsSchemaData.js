const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Document forms are part of what unique collection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Document forms are part of the document.forms special collection. That\'s a "named collection": it\'s both named and ordered. To access the form, we may utilize both the name or index number from the document.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle multiple elements of a form collection with the same name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There might be several components with the same name, which is common when using radio buttons and checkboxes. The form.elements[name] is a collection in such a scenario, and these navigation features are independent of tag structure. Form.elements contain all control elements, no matter how deep they are in the form.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Fieldsets work as subforms inside of a form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A form may have one or many &#8249;fieldset&#8250; elements inside it. They also have elements property that lists form controls inside them. The HTML &#8249;fieldset&#8250; element gets used to group several controls as well as labels (&#8250;label&#8250;) within a web form. We can access the Fieldset properties via the form.elements property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a shorter notation other than the form.elements property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there is a shorter notation: we can access the element as form[index/name]. In other words, instead of form.elements.login, we can write form.login. That also works, but there is a minor issue: if we access an element and then change its name, it is still available under the old name (as well as under the new one). However, because we seldom modify the names of form components, this is typically not an issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what form backreferencing is in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The form is available as element.form for any element. So, the form references every element, and all elements reference the form.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you use JavaScript to access or extract the value of a textarea inside an input?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can access the value of a textarea using textarea.value. The specification does not recommend we utilize innerHTML to obtain the value since it only saves the HTML initially on the page, not the current value.',
      },
    },
    {
      '@type': 'Question',
      name: 'To select an option value, what are the three properties we can use to set the selected value(s)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A &#8249;select&#8250; element has 3 important properties including the select option, value, and selectedIndex properties. The select.options is a collection &#8249;option&#8250; sub-elements. The select.value property is the value of the current selected &#8249;option&#8250;. The select.selectedIndex is the number currently selected &#8249;option&#8250;. They provide three different ways of setting a value for a &#8249;select&#8250;. Find the corresponding &#8249;option&#8250; element (e.g. among select.options) and set its option.selected to true. If we know a new value: set, select.value to the new value. If we know the new option number: set select.selectedIndex to that number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the new Option constructor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A little-known feature of JavaScript allows you to build option elements with minimum effort. The Option() constructor is responsible for this functionality. The syntax is straightforward:<br/><br/>\r\n  <ul>\r\n  <li>Get a reference to a form element</li>\r\n  <li>Invoke the constructor and connect the resulting object to the form element.</li>\r\n  <li>Pass in the following parameters during instantiation: Step 1: the text displayed on the page [string], Step 2: the value of the control [string], Step 3: if it is the default option [true/false] and whether it is chosen [true/false].</li>\r\n  </ul>',
      },
    },
  ],
};

export default StructuredData;
