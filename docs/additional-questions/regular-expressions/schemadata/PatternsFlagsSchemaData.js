const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular expressions are patterns with optional flags that allow powerful text search and replacement. They are available in JavaScript via the RegExp object, and we can embed them into string functions and string methods combined with regular expressions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two syntaxes used to create a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use two syntaxes when creating a regular expression object, including the long and short syntaxes. The extended syntax uses the RegExp object with optional flags, and the short syntax uses forward slashes with optional flags. Slashes /.../ tell JavaScript that we are creating a regular expression, and they play the same role as quotes for strings. In both cases, regexp becomes an instance of the built-in RegExp class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you name the six flags used in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular expressions may have flags that affect the search. There are only 6 of them in JavaScript, including the i, g, m, s, u, and y regular expression flags:<br /><br />\r\n  <strong>Flag Descriptions:</strong><br />\r\n  <ul>\r\n    <li>With the <strong>i</strong> flag the search is set to case insensitive.</li>\r\n    <li>The <strong>g</strong> flag the search is set to global and looks for all matches, without it only the first search match is returned.</li>\r\n    <li>The <strong>m</strong> flag represents a query in multiline mode.</li>\r\n    <li>The <strong>s</strong> flag enables dot all mode allows a dot to match the newline character.</li>\r\n    <li>The <strong>u</strong> enables full Unicode support, the flag enables correct processing of surrogate pairs.</li>\r\n    <li>Sticky flag <strong>y</strong> sets the stick mode that allows search for the exact position of the text.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the match method work with Regular Expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method myString.match(regexp) finds all matches of regexp in the string myString.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the three regex modes of the match method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The match method has three working regex modes. First, if a regular expression has flag g, it returns an array of all matches. Second, if there is no such flag, it returns only the first match in the form of an array, with the whole match at index 0 and some additional details in properties. The array may have other indexes besides 0 if a part of the regular expression gets enclosed in parentheses. And finally, if there are no matches, null is returned (it does not matter if there’s flag g or not). This behavior is an essential nuance. If there are no matches, we do not receive an empty array but instead receive null. Forgetting about that may lead to errors, e.g.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to handle empty or null values in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when the result contains an empty or null value. We should subscribe to the match method by adding an empty array. If the length is empty or null, we should do a condition check and return a value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the string replace method work with Regular Expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method str.replace(regexp, replacement) replaces regexp matches in string str with replacement (all matches if flag g is present; otherwise, only the first one). The replacement string is the second parameter. We can utilize specific character combinations in it to insert match pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to test for a string fragment using a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basically, we should use the method regexp.test(str), which looks for at least one match, if found, returns true, otherwise false.',
      },
    },
  ],
};

export default StructuredData;
