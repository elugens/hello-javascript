const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many bytes are Unicode characters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript uses Unicode encoding for strings. Most characters encode with 2 bytes, but that allows them to represent at most 65536 characters. That range is not big enough to encode all possible characters, so some rare characters are encoded with 4 bytes, for instance, like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs. So, the simple answer is 2 bytes for regular “old” characters and 4 bytes for special “surrogate pairs or new” characters. When the JavaScript language got created a long time ago, Unicode encoding was more straightforward; there were no 4-byte characters. So, some language features still mishandle them. By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are Unicode properties expressed in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In simple terms, Unicode properties are denoted or expressed as \\p&#123;\u2026&#125;. When we need to use \\p&#123;\u2026&#125;, a regular expression must have flag u. For instance, \\p&#123;Letter&#125; denotes a letter in any language. We can also use \\p&#123;L&#125;, as L is an alias of Letter. There are shorter aliases for almost every property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to denote Hexadecimal numbers in a regular expression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, A hex digit gets denoted as \\p&#123;Hex_Digit&#125; Unicode property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What approach should we use to handle script-based languages, like Chinese, in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When handling script-based languages like Cyrillic, Greek, Arabic, or Han (Chinese), we should use the Unicode property for the Scriptwriting system, which we achieve by using the Script=&#8249;value&#8250; syntax.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Unicode property should we use in regular expressions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Characters that denote a currency, such as $, \u20AC, \u00A5, have Unicode property \\p&#123;Currency_Symbol&#125;, the short alias: \\p&#123;Sc&#125;, that we should use.',
      },
    },
  ],
};

export default StructuredData;
