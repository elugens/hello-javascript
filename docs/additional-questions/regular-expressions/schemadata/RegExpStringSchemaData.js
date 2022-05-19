const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the match() string method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The match() method retrieves the result of matching a string against a regular expression. It has three standing modes: (1) If the regexp does not have flag g, then it returns the first match as an array with capturing groups and properties index (position of the match), input (input string, equals str). (2) If the regexp has flag g, it returns an array of all matches as strings without capturing groups and other details. (3) If there are no matches, no matter if there’s flag g or not, null returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the matchAll() string method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method str.matchAll(regexp) is a “newer, improved” variant of str.match. The str.matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups. The RegExp object must have the /g flag; otherwise, a TypeError gets thrown. The matchAll() method may require a polyfill in some browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between match() and matchAll() String methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three differences between str.match(regexp) and str.match(regexp) string methods. The matchAll method returns an iterable object with matches instead of an array. We can make a regular array from it using Array.from. Every match gets returned as an array with capturing groups (the same format as str.match without flag g). If there are no results, it returns not null but an empty iterable object. If we use the for..of to loop over matchAll matches, then the Array.from method is unnecessary because the matchall() method returns an iterable object as its result.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use the str.split() method with a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there are two ways to implement a string split. The string split method can use a regular expression or a substring as a delimiter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the search() string method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The search() method executes a search for a match between a regular expression and this String object. The critical limitation: the search only finds the first match. If we need the positions of other matches, we should use other means, such as finding them all with str.matchAll(regexp).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the str.replace() string method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression, and the replacement can be a string or a function to be called for each match. Using a function gives us the ultimate replacement power because it gets all the information about the match, has access to external variables, and can do everything. If a pattern is a string, only the first occurrence gets replaced.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the distinction between the replace() and replaceAll() methods?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This method is essentially the same as str.replace, with two significant differences. (1) If the first argument is a string, it replaces all occurrences of the string, while the replace method replaces only the first occurrence. (2) If the first argument is a regular expression without the g flag, an error occurs. With the g flag, it works the same as the replace method. The primary use case for replaceAll is replacing all occurrences of a string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the regexp.exec() object method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method regexp.exec(str) method returns a match for regexp in the string str. Unlike previous methods, it gets called on a regexp, but not on a string. Depending on whether the regexp includes flag g, it works differently. If no g option is used, regexp.exec(str) gives the first match precisely as str.match (regexp). This behavior does not bring anything new. But if there’s flag g, then a call to regexp.exec(str) returns the first match and saves the position immediately after it in the property regexp.lastIndex. The next such call starts the search from position regexp.lastIndex, returns the next match, and saves the position after it in regexp.lastIndex. If there are no matches, regexp.exec returns null and resets regexp.lastIndex to 0. So, repeated calls return all matches one after another, using property regexp.lastIndex to keep track of the current search position.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the regexp.test() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method regexp.test(str) looks for a match and returns true/false whether it exists. This expression is the most precise way to run a test on a string in our regular expressions. You should note that there are some drawbacks to using the regex.test method repeatedly on global tests (flag g).',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any ramifications when we run global regexp.tests repeatedly on different sources?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, executing the same global regexp check on many sources several times may result in failure. When we apply the same global regexp to different inputs, we could receive an incorrect result because the regexp.test function advances the regexp.lastIndex property, forcing the search in another string to start at a non-zero position. To avoid this, we may set regexp.lastIndex=0 before each search, or we can use string methods str.match/search/... without using regexp methods, which do not use lastIndex.',
      },
    },
  ],
};

export default StructuredData;
