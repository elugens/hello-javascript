const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens when we submit a form in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a form is submitted, the submit event is triggered. It often gets used to verify the form (form validation) before sending it to the server or cancel the submission and process it in JavaScript. The function form.submit() enables us to transmit forms from JavaScript, and we may use it to construct and send forms to the server dynamically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two ways to allow a user to submit a form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two primary methods for submitting a form. The first step is to select either &#8249;input type="submit"&#8250; or &#8249;input type="image"&#8250;. The second method is to enter data into an input field by pressing Enter. Both activities result in the form\'s submit-event. The handler can inspect the data, display them, and call events if any issues appear. If you use `preventDefault()`, the form does not transmit to the server.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the relation between submit and click?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a form gets sent using Enter on an input field, a click event triggers on the &#8249;input type="submit"&#8250;. That is rather funny because there was no click at all.',
      },
    },
  ],
};

export default StructuredData;
