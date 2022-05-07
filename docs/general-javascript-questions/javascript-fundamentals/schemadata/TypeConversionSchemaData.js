const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the two types of type conversion in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two types of type conversion in JavaScript: implicit and explicit type conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distinction between explicit and implicit JavaScript type conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript translates one data type to another automatically (to the right type). This behavior is known as implicit type conversion or automated type conversion. Explicit type conversion is the sort of conversion that you perform manually.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is explicit type conversion implemented in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can implement Explicit type conversion by using built-in methods and objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Name one method that automatically converts a value to a string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The alert method returns a string value; this is automatic type conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'What built-in object do we use to explicitly convert values to a string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the String(value) object to convert values to strings explicitly. For primitive values, the conversion to string is typically apparent.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do numeric conversions happen in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Numeric conversion happens in mathematical functions and expressions automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Object do we use to convert values to a number explicitly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the Number() object to explicitly convert values to a number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the result of an explicit attempt to convert a non-number to a number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the string is not a valid number, the return value is NaN (Not a Number).',
      },
    },
    {
      '@type': 'Question',
      name: 'If there is an attempt to convert an undefined value. What is the return result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Numeric conversions on undefined values returns NaN (Not-a-Number).',
      },
    },
    {
      '@type': 'Question',
      name: 'If there is an attempt to convert a NULL value to a number. What is the return result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we attempt a numeric conversion on Null values it returns zero (0).',
      },
    },
    {
      '@type': 'Question',
      name: 'What value returns when you attempt a numeric conversion of true and false?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'True returns 1, and False returns 0.',
      },
    },
    {
      '@type': 'Question',
      name: 'Give a brief description of the potential outcomes when converting a string to a number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We trim whitespace at the beginning and the end of the string. Zero returns if the remaining string contains no characters. Otherwise, the string\'s number is "read". If an error occurs, it returns NaN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Boolean conversions happen implicitly, explicitly, or both?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. Logic operations do this automatically, but you can also do it explicitly by using the Boolean() native object.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any objects we can use for explicit Boolean conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Boolean object converts strings and numerical values to Boolean true or false.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two basic Boolean conversion rules in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Values that are intuitively empty are false. All other values are true. Conversion Rules: Intuitively empty values, like 0, an empty string, null, undefined, and NaN, become false.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Boolean return value for the string zero in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, a non-empty string always returns true. Zero is considered empty and returns false.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three widely used type conversions in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'String, number, and Boolean conversions are the most widely used type conversions in JavaScript.',
      },
    },
  ],
};

export default StructuredData;
