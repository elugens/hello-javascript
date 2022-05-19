const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a capturing group relative to a match method in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A capturing group is a pattern enclosed in parentheses. It has two effects: getting part of the match as a separate or isolated item in an array of items. When we put a quantifier after the parenthesis, it merges as a group on the string.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the regex engine memorize the matches in parentheses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The regular expression numbers the parentheses from left to right. The engine memorizes the content matched by each and allows it to return the result. The RegExp engine indexes them in an array structure and the order they are matched. The method str.match(regexp), if regexp has no flag g, looks for the first match and returns it as an array.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a nested group of parentheses work in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When parentheses are nested in regular expressions, it uses an outward in and left to right behavior (algorithm). The outer bounds of the parentheses are collected and pushed into an array structure. Then each parenthesis with the parent is collected and pushed to the array in order from left to right.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when an option group does not exist in a regex match?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Even if a group is optional and does not exist in the match (e.g., has the quantifier (...)?), the corresponding result array item is present and equals undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the outcome on parentheses when we use regex.matchAll()?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The outcome is a deep search for all matches within the regex pattern. The return values include both the inner and outer values, including the capturing group. We should note that the matchAll method returns an iterable object, and it may require a Polyfill because it is relatively new.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are named groups in capturing used for in regex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Named groups are the process of capturing the text matched by \u201Cregex\u201D into the group \u201Cname\u201D. The name can contain letters and numbers but must start with a letter, and these get achieved by putting `?&#8249;name&#8250;` immediately after the opening parentheses. Named groups are perfect for highly complex patterns that need to split hairs (filter) amongst a group of names.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do capturing groups work in a replacement string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Method str.replace(regexp, replacement) that replaces all matches with regexp in str allows using parentheses contents in the replacement string. We can do this by using $n, where n is the group number (Example: $2 would be the second value we are targeting, like index[1]).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do non-capturing groups work in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We may require parentheses to apply a quantifier appropriately, but we don't want the contents of those parentheses to appear in the results. By commencing with ( ?: ), we cannot omit the group. For example, if we want to locate (go)+ but don't want the contents of the parenthesis (go) as a specific array item, we may use: (?:go)+.",
      },
    },
  ],
};

export default StructuredData;
