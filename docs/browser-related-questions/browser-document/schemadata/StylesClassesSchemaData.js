const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the essential rule to remember when deciding how to layout your page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It would be best if you always prefer to use CSS classes over the style property method. The latter should get used only when classes "can\'t handle it." For example, if we compute an element\'s coordinates dynamically and wish to set them from JavaScript, style is permitted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you return the name of a class in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The process of exposing or returning the name of a class can get achieved by using the className property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a property or special object used to modify a class list in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the elem.classList is a special object with methods to add/remove/toggle a single class. So, we can operate both on the whole class string using className or on individual classes using classList.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the elem.style object property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The object elem.style corresponds to what is expressed in the "style" attribute. Setting elem.style.width="100px" works the same as if we had a string width:100px in the attribute style.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rule for prefixed browser properties in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browser-prefixed properties like -moz-border-radius, -webkit-border-radius also follow the same rule; a dash means uppercase. For instance, the Mozilla border-radius property would look like this: MozBorderRadius.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the proper approach to resetting an element style property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two approaches to resetting a style property. The novice approach involves using the “delete elem.style.display”, but the specification does not recommend this approach. We should use elem.style.display and set the value to an empty string. If we set style.display to an empty string, then the browser generally applies CSS classes and its built-in styles as if there were no such style.display property at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to do a full-style rewrite on the DOM element node?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There’s a special property style.cssText to do a full rewrite and set the full style as a string. We rarely use this property because such assignment removes all existing styles: it does not add but replaces them. The same can be accomplished by setting an attribute: div.setAttribute('style', 'color: red...').",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it important to mind your CSS units in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is essential to set our CSS style sizes, including units, to ensure proper parsing or outcomes that we present to the end-user.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how to read computed values in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since the style property operates only on the value of the "style" attribute, without any CSS cascade. We can’t read anything that comes from CSS classes using elem.style. We would have to find a built-in method to handle that procedure. The getComputedStyle() method extracts all the actual (computed) CSS properties and values of the specified element. The returned style is a live CSSStyleDeclaration object, which updates automatically when the element\'s styles are changed. Style sources can include: internal style sheets, external style sheets, inherited styles, and browser default styles. The element and the pseudo-element are the two arguments of the getComputedStyle method. The pseudo-element is a string that specifies which pseudo-element gets matched— omitted (or null) for real elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a computed and resolved value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We can obtain a computed style value after all CSS rules and CSS inheritance due to the CSS cascade. It may appear as height:1em or font-size:125 percent. The style value that eventually gets applied to the element is a resolved style value. Values like 1em and 125 percent are relative. The browser uses the calculated value and makes all units constant and absolute, such as height:20px or font-size:16px. Resolved values for geometry attributes may have a floating-point value, such as width:50.5px. Originally, getComputedStyle was intended to yield calculated values, but a discovery revealed that resolved values are significantly more helpful. As a result, the standard got revised. As a result, getComputedStyles returns a property's resolved value.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain how the getComputedStyle method interacts with property names?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We should always ask for the exact (full property name) property that we want, like paddingLeft or marginTop or borderTopWidth. Otherwise, the correct result is not guaranteed. If there are properties paddingLeft/paddingTop, then what should we get for getComputedStyle(elem).padding? Nothing, or maybe a “generated” value from known paddings? There is no standard rule here, but we should always ask for the full property name.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are styles applied to :visited links always hidden by getComputedStyles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Developers use the :visited CSS pseudo-class to color visited links. However, getComputedStyle does not provide access to that color; otherwise, an arbitrary page may determine if a user clicked a link by creating it on the page and inspecting the styles. JavaScript may not recognize the styles used by :visited. Furthermore, a CSS constraint prevents the use of geometry-changing styles in :visited. That is to ensure that there is no way for a malicious page to verify if a link was visited and violated a user's privacy.",
      },
    },
  ],
};

export default StructuredData;
