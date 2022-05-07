const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the advantages of employing a Switch statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A switch statement can replace multiple checks, and it gives a more descriptive way to compare a value with multiple variants and is easier to read.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Switch statement work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The switch statement works by checking the initial value against the case values. If the initial value equals one of the case values, it stops. A default value gets used if the case does not equal one of the case values.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to use the break directive in the Switch statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, but we should proceed with caution because the execution continues to the proceeding cases without any checks. We should use the break statement according to the specification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use expressions in switch/case arguments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, both switch and case allow arbitrary expressions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you group switch cases as variant options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can group case variants into aggregated groups supplying them with a  return value. A break statement should follow all case groups to ensure proper behavior and favorable outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a switch statement have a strict equality check on value matching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the values must be of the same data type to match. The case value that does not, does not execute.',
      },
    },
  ],
};

export default StructuredData;
