const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the script type attribute used in Modern JavaScript development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the script type attribute in Modern JavaScript development to create JavaScript Modules. The old HTML standard, HTML4, required a script to have a type. Usually, it was type="text/javascript", but we no longer use that implementation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the script language attribute used for in web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the language attribute to mention the scripting language. Typically, its value equates to JavaScript. Although recent versions of HTML (and XHTML, its successor) have phased out using this attribute. You may still find this in older applications on the web, and we should use it in Modern web applications.',
      },
    },
  ],
};

export default StructuredData;
