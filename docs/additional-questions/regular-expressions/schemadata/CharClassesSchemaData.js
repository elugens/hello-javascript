const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a character class used for in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A character class is a special notation that matches any symbol from a particular set. The most common character classes are \\d, \\s, and \\w used to add additional parameters for regular expressions to manipulate strings. A RegExp may contain both regular symbols and character classes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to use multiple character classes in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use multiple character classes in regular expressions to manipulate string queries.',
      },
    },
    {
      '@type': 'Question',
      name: 'In the context of regular expressions, what is an inverse class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is a "inverse class" for each character class, represented by the same letter but in uppercase. We may use \\D as the inverse class for \\d, which has certain advantages in reducing reliance on methods like str.match(/\\d/g).join(\'\').',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the dot represent in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dot (.) is a unique character class that matches any character except a new line. We should note that a dot means \u201Cany character\u201D, but not the \u201Cabsence of a character\u201D. There must be a character to match it. By default, a dot does not match the newline character \\n.',
      },
    },
    {
      '@type': 'Question',
      name: 'What character class should you use with dot to accept all characters, like the (\\n) newline character?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, a dot does not match the newline character \\n. There are many situations when we would like a dot to mean literally \u201Cany character\u201D, newline included. To include all characters, we must use the "s" flag. We should note that Internet Explorer does not support the \u201Cs\u201D flag.',
      },
    },
    {
      '@type': 'Question',
      name: 'When we need to use the “s” flag, is there a way to ensure it works in all browsers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because IE does not support the s flag. We can use a regular expression [\\s\\S] to match any character as an alternative that works everywhere. [\\s\\S]  means "a space character OR not a space character." In other words, "everything." It doesn\'t matter whether we use another pair of complimentary classes, such as [\\d\\D]. Or even [^] - which means "match any character except nothing." Also, we may use this approach if we want two types of "dots" in the same pattern: the usual dot acting normally ("without containing a newline") and a way to match "any character" with [\\s\\S] or something similar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it important to pay attention to spaces for regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a regular expression does not take spaces into account, it may fail to work. We can fix it by adding spaces into the regular expression. Space is a character and equal in importance to any other character. We cannot add or remove spaces from a regular expression and expect it to work the same. In other words, all characters matter spaces in a regular expression.',
      },
    },
  ],
};

export default StructuredData;
