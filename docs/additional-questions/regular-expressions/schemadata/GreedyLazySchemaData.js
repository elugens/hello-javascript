const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Can you explain the difference between greedy and lazy quantifiers?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: "Quantifiers are Greedy by default. Greedy quantifiers seek the longest text that meets a particular pattern. Greedy quantifiers scan the whole string before attempting any match. If the full text does not match, delete the last character and try again until a match gets discovered. A lazy (also known as non-greedy or hesitant) quantifier always tries to repeat the sub-pattern as few times as feasible before expanding to longer matches. In general, a lazy pattern matches the smallest feasible string. To make quantifiers lazy, attach (?) to the current quantifier, for example, +?, &#123;0,5&#125;? We should emphasize that lazy quantifiers are capable of failing.<br /><br />The notion of greedy/lazy quantifiers only exists in backtracking regex engines. In non-backtracking regex engines or POSIX-compliant regex engines, quantifiers only specify the repetition's upper and lower bound without specifying how to find the match.",
    },
  },
};

export default StructuredData;
