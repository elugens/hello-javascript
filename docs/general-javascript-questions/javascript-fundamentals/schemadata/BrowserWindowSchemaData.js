const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the JavaScript alert window commonly called in the JavaScript community?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web developers refer to this type of window as a Modal Window.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the alert function work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It shows a message and waits for the user to press \u201COK\u201D and returns a string as a value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data type does the alert window method return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alert returns a string or object converted into a string and displayed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the prompt function work in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. The return value of the prompt function is a string value, which should be taken into account when used with numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many arguments does the prompt function accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prompt accepts two arguments the title and a default value. The default value is not required and acts as the initial value for the input field.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the prompt return when the prompt its escaped or canceled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It returns a null value when it's escaped or canceled.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it essential to provide a second argument (default) for the prompt function?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is a chance that the user is using a browser such as Internet Explorer, which returns undefined if there is no default. This action could have ramifications that could affect the application adversely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the confirm function work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The confirm function shows a modal window with a question and two buttons: OK and Cancel. The result is true if OK is pressed and false otherwise.',
      },
    },
    {
      '@type': 'Question',
      name: 'The alert, prompt, and confirm methods are part of what object model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The alert, prompt, and confirm methods belong to the Browser Object Model. It is commonly called the BOM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are two limitations shared by the alert, prompt, and confirm methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have no control over the position and look of the modal window.',
      },
    },
    {
      '@type': 'Question',
      name: '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '',
      },
    },
  ],
};

export default StructuredData;
