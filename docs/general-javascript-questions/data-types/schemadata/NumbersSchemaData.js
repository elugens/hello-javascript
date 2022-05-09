const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the two primitive number data types in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, the two number data types include numbers and BigInts.',
      },
    },
    {
      '@type': 'Question',
      name: 'In what format are regular numbers stored in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular numbers in JavaScript get stored in 64-bit format IEEE-754, also known as double-precision floating-point numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the limitations of BigInts in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigInt is a built-in object that provides a way to represent whole numbers larger than 2<sup>53-1</sup> (max safe number) or be less than -2<sup>53-1</sup> (min. safe number), which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt gets used for arbitrarily large integers.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, there are several ways to write a number. Is there a safe way to separate large number groups like 1,000,000,000 and maintain a formal format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common way to safely separate number groups without using a comma (which would cause an error) and keep its primitive format. We use an underscore (syntactic sugar) to ensure that the number maintains its primitive format. However, there are easier ways to propagate large numbers in most programming languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'As programmers, we are constantly looking for methods to decrease the amount of code we write. What is the most straightforward approach to avoid writing large numerical sequences like 1,000,000,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can shorten a number by appending the letter (e) to the number and specifying the zeroes count.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a difference in the position of the subtraction operator when numbers are using (e) notation to shorten your numerical syntax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if the minus sign is preceding the number, it returns the number as a negative. A number like -1e9 equals negative 1 billion (-1000000000.0 – minus sign applies to itself), and 1e-9 results in a floating-point number where the minus sign applies to the exponent (result: 0.000000001).',
      },
    },
    {
      '@type': 'Question',
      name: 'What numeral systems get used to represent colors, encode characters, and base representation in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'exadecimal numbers are the most used number to represent colors, encode characters, and more. Furthermore, hexadecimal, binary, and octal numeral systems are employed, albeit less frequently than hexadecimal numbers. For other numeral systems, we should use the function parseInt, which parses a string argument and returns an integer of the specified radix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a method in JavaScript that returns a string representation of a number within a given base?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The toString(base) method returns a string representation of a number value with a given base.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the default base in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript is base 10 by default, but the base can vary from 2 to 36 based on your use case.',
      },
    },
  ],
};

export default StructuredData;
