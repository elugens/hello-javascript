const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Is there a way to resume an upload after a lost connection?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'There is no built-in option for such approach, but we have the components. Because if we anticipate large files, resumable uploads should include an upload progress indicator (if we may need to resume). We may use XMLHttpRequest instead of fetch because fetch does not allow us to track upload progress.',
    },
  },
};

export default StructuredData;
