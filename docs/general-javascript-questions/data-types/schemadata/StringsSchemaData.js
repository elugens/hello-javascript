const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'In JavaScript, is there a data type for a single character?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, JavaScript represents all text as a string. There is no particular type for a single character.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of internal character encoding does JavaScript always use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The internal format for strings is always UTF-16, but it does not get tied to the page encoding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three types of quotes used to enclose strings in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strings get enclosed within either single quotes, double quotes, or backticks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the difference between single, double, and backticks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The meaning of single and double quotations is roughly the same. Backticks, on the other hand, allow us to embed any phrase inside the string by enclosing it in $&#123;…&#125;. Backticks have the additional benefit of allowing a string to span several lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can single or double quotes be used to generate a multiline string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as "\n", which denotes a line break.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the one thing that all special characters in JavaScript have in common?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All special characters start with a backslash character known as the escape character.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the length property or a function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, length is a property and results in an error if you try to invoke it as a function. People with a background in other languages sometimes mistype by calling str.length() instead of just str.length. Length is a numeric property, and it is not necessary to add the parentheses.',
      },
    },
    {
      '@type': 'Question',
      name: 'When you are accessing string characters at a specific position. What is the difference between accessing it with square brackets and the charAt() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The square brackets are a more contemporary method of obtaining a character, whereas charAt persists mainly for historical reasons. The only difference is that [] returns undefined if no character gets discovered, whereas charAt produces an empty string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are strings mutable or immutable in JavaScript, and why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strings are immutable in JavaScript and cannot be changed because they are primitive values. It is important not to confuse a primitive with a variable assigned a primitive value. The variable may get reassigned to a new value, but the current value cannot be changed in the ways that objects, arrays, and functions can get altered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Name the five primitive wrapper objects in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values. The five wrapper objects include string, number, BigInt, Boolean, and symbol primitive wrapper objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What two methods should we use to change the case of a string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two methods commonly used to change the case of a string. They include the toLowerCase() and toUpperCase() methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the string indexOf() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The string indexOf() method looks for the substring within a string, starting from the given position pos, and returns the position where the match resides or returns -1 otherwise. The optional second parameter allows us to start searching from a given position; otherwise, it defaults to the zero-index position.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the string indexOf and lastIndexOf methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most notable difference between indexOf and lastIndexOf methods is lastIndexOf starts at the end of the value getting evaluated to the front. It lists the occurrences in reverse order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the string indexOf and search methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Although indexOf and search methods are similar. They are not equal and have some notable differences. The search() method cannot take a second start position argument, but it does accept regular expressions. The indexOf() method cannot take powerful search values (regular expressions).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the potential negative outcome when using the indexOf method in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The potential negative outcome is relative to returning zero as the index occurrence. The if statement does not work correctly and return a false zero value. This behavior is inconvenient and gets fixed using an extended value check on the zero value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a common trick to convert a number to a 32-bit integer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bitwise NOT operator is a well-known trick. It converts the digit to a 32-bit integer (removing any decimal parts) then reverses all of the bits in its binary representation. In practice, that means simple: for 32-bit integers, ~n equals -(n+1).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use the Bitwise (~) Not to ensure that a call on the indexOf method acts in the intended fashion in an if statement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the bitwise not operator ensures that any occurrence at the zero-index returns true if that is the intended result because of a result of zero in an if statement returns false, and the if statement does not work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the string “includes” method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The string “includes” method tests for a match of a given value within a string. If a match gets found, it returns true. Otherwise, it returns false. The syntax provides an additional argument that specifies an index position where the search starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain, the function and syntax of both string startsWith() and endsWith() methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters and false if not. The startsWith() method accepts two arguments search value and start position, and by default, the start position gets set to zero (0).<br /><br />The endsWith() method determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the characters and false if not. The endsWith() method accepts two arguments search value and length. If omitted, the default value is the length of the string.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three methods used to get a substring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are 3 methods in JavaScript to get a substring, including the substring, substr, and slice methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the string slice() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The string slice() method returns part of the string from the starting point to (but not including) the end. It accepts two arguments, including the start (required) and end points. If there is no second argument, then the slice goes to the end of the string. You can use a negative number to select from the end of the string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the string substring() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The string substring() method returns the part of the string between start and end. It accepts two arguments, including the start (required) and end points. This process is almost the same as slice, but it allows the start to be greater than the end. If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1). The substring() method (unlike slice) does not support negative arguments. They get treated as 0. The start position is required, and the end point, if omitted, it extracts the rest of the string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the string substr() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters or length. To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minor drawback to using the string substr() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The substr() method may not work in some non-browser environments. It is described not in the core JavaScript specification but in Annex B, which covers browser-only features mainly for historical reasons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which one is the most flexible choice of the three substring methods (slice / substring / substr) in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of the three variants, the slice is slightly more flexible. It allows negative arguments and seems to be shorter to write. So, it is enough to remember a slice of these three methods solely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are strings compared in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript strings are compared character-by-character in alphabetical order. JavaScript also compares each character by their UTF-16 numeric code, resulting in some odd outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are lowercase letters greater than uppercase letters in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lowercase letters are greater than uppercase letters in JavaScript because their UTF-16 numeric code compares them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any special methods we can use to get the UTF-16 number code of a character?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several special methods can get the numeric code of a specific character. They include the charCodeAt and codePointAt methods. Notably, the codePointAt method may require a polyfill in older browsers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a built-in method to compare diacritical characters in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the localeCompare method gets used to compare string values using diacritical characters, and the outcome is proper sorting and filtering of string values. According to the language rules, the call localeCompare returns an integer indicating whether a string is less, equal, or greater than the comparative string. localCompare returns a negative number if the string is less than the comparative string. If the string is greater than the comparative string, it produces a positive number; otherwise, it returns 0.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the rare symbols encoded with a pair of 2-byte characters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "They are surrogate pairs because they have two 2-byte characters versus a normal or frequently used character that has a single 2-byte character. Since JavaScript's initial development pre-dates surrogate pairs, it was necessary to extend/encode rare symbols in two 2-byte forms. The length of such rare symbols is 2.",
      },
    },
    {
      '@type': 'Question',
      name: 'What modern method can return the numeric code of surrogate pairs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fromCodePoint and codePointAt methods can retrieve and display the numeric code of surrogate pairs.',
      },
    },
  ],
};

export default StructuredData;
