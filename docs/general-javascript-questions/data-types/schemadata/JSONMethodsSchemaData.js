const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Explain what is JSON?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON is a simple and lightweight data exchange format used across multiple language platforms. JSON means JavaScript Object Notation, and it is language and platform-independent. JSON often gets used when data gets sent from a server to a web page, and it works both on the front and back end of development environments. Several built-in JavaScript methods convert JSON objects from and back to their original format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the role of the JSON.stringfy() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.<br /><br />\r\n  <strong>Syntax:</strong> JSON.stringify(value[, replacer[, space]])<br /><br />\r\n  <ul>\r\n    <li>The <strong>value</strong> to convert to a JSON string.</li>\r\n    <li>\u2022 The (optional) <strong>replacer</strong> is a function or array used to change the behavior of the stringification process.</li>\r\n    <li>\u2022 The (optional) <strong>space</strong> consists of a String or Number object that gets used to introduce white space into the output JSON string to improve readability. If this is a number, it denotes the number of white space characters to use, and the number is limited and defaults to 10 spaces.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What data types does JSON support in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON supports the following data types: Objects, Arrays, (primitive) strings, Boolean values, numbers, and null.',
      },
    },
    {
      '@type': 'Question',
      name: 'JSON is a data-only, language-independent specification. What are some JavaScript-specific object properties that JSON.stringify skips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON.stringify() ignores several JavaScript-specific object properties, including function properties, Symbolic keys and values, and properties that hold a value of undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the known differences between JSON and JSONP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The difference between JSON and JSONP is that JSON is a simple data format for communication between different systems, and JSONP is also known as JSON with Padding. JSONP is a methodology for using that format with cross-domain ajax requests while not being affected by same-origin policy issues. The critical thing to remember with JSONP is that it is not a protocol or data type, and it is just a way of loading a script on the fly and processing the script that gets introduced to the page. In the spirit of JSONP, this means introducing a new JavaScript object from the server into the client application/ script.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the third argument space used in the JSON.stringify() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting. Previously, all stringified objects had no indents and extra spaces. That is fine if we want to send an object over a network. The space argument is used exclusively for nice formatting. Remember that if you do not use the replacer, we should set it to null.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is known as the father and creator of JSON?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Douglas Crockford is widely regarded as the "Father of JSON." Douglas Crockford designed the JSON format for the first time in 2000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the extension that we use for JSON files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The extension of a JSON file is ".json." Because JSON files are text-based, we can change or view the file content using any text editor, such as notepad or notepad++.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a comment be added inside a JSON file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON does not support any comments. However, we can store comments in a Key or data object. We need to make sure that our application ignores the given data element during the processing of the JSON.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the JSON.parse() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. We can use an optional reviver function to perform a transformation on the resulting object before our code returns it. JSON parse is the opposite of the stringify method, and it returns an Object, Array, string, number, a boolean, or null value corresponding to the given JSON object text. You should note that JSON.parse() does not allow trailing commas.',
      },
    },
  ],
};

export default StructuredData;
