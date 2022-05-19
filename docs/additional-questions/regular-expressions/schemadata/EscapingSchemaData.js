const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you escape a special character in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To match a character having a special meaning in regex, you need to use an escape sequence prefix with a backslash (\\). E.g., \\. matches "."; regex \\+ matches "+"; and regex \\( matches "(". You also need to use regex \\\\ to match "\\" (back-slash). Regex recognizes common escape sequences such as \\n for newline, \\t for tab, \\r for carriage-return, \\nnn for a up to 3-digit octal number, \\xhh for a two-digit hex code, \\uhhhh for a 4-digit Unicode, \\uhhhhhhhh for a 8-digit Unicode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a forward slash “/” a special character in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A slash symbol `/` is not a special character, but in JavaScript, you use it to open and close the regexp: /...pattern.../, so we should escape it too when attempting to match it. On the other hand, if we are not using /.../, but create a regexp using the new RegExp, we do not need to escape it.',
      },
    },
    {
      '@type': 'Question',
      name: 'When we are calling the new RegExp object, do we have to use the escape character in our regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we create a regular expression with the new RegExp, we do not have to escape /, but need to do other escaping like the `\\d` flag. The reason that this happens is that strings consume backslashes when we use the RegExp object constructor. The approach we should use is an additional backslash to escape special flags like \\d. Instead of \\d, we need to use `\\\\d`.',
      },
    },
  ],
};

export default StructuredData;
