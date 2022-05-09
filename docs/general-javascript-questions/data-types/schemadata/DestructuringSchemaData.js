const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a de-structuring assignment, and what are two data structures commonly use it in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De-structuring assignment is a special syntax that allows us to “unpack” arrays or objects into many variables, which is sometimes more convenient. De-structuring also works great with complex functions with many parameters, default values, and more. We can use destructuring on both objects and arrays in JavaScript. It is a “destructuring assignment” because it “destructures” by copying items into variables. But the array itself is not modified.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to ignore or skip an array element to be destructured (on the right-hand side of the assignment), what delimiter can you use when destructuring an array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can skip unwanted elements of an array by adding extra space and a comma as a delimiting block.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of structures work with destructuring in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Destructuring works with any iterable structure, including arrays, objects, Sets, and strings on the right-hand side of the assignment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a method you can use to destructure and loop over an object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the Object.entries(object) method to loop over an object and a combination of [key, value] destructuring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the swapping of variables using destructuring in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is a trick for swapping. We have to create a temporary array of the variables on the left side and then swap the variables on the right side in another array. We can swap more than two variables this way in JavaScript.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to handle mismatched arrays that we need to destructure in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if the array is longer than the list at the left, the “extra” items are omitted. To access the extra variables on the right side, you can use the (...rest) operator to access the remaining variables. We can use any other variable name in place of the rest. Just make sure it has three dots before it and goes last in the destructuring assignment. If the array is shorter than the list of variables at the left, there are no errors, and missing values are considered undefined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rule regarding the naming convention of a rest operator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no restrictions on what you name your rest operator in general. You should use a relative name for the rest operator, such as (…title) with three preceding dots.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you implement destructuring on empty values, what gets returned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no errors if the array is shorter than the list of variables at the left. Missing values are considered undefined on return.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an excellent destructuring technique you can use to eliminate the return of undefined array values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setting default values to possibly missing values is the best technique to manage missing values during destructuring. This approach gets accomplished by assigning a new default using the equal (=) operator. More sophisticated phrases or function calls are used as default values, and they only get evaluated if the value is not supplied.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use destructing on objects in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use destructing on any iterable, including objects in JavaScript. There should be an existing object on the right side of the assignment operator, and the left side contains an object-like “pattern” for corresponding properties. In the simplest case, that is a list of variable names in &#123;...&#125;.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distinction between array destructuring and object destructuring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Object destructuring is like array destructuring, with one exception, instead of values getting pulled out of an array, object keys and values get pulled out of an object. In an array, the order of the elements is relevant, and it depends on your intent to handle the elements, such as swapping variables. However, the rule for arrays does not apply to objects, and order is insignificant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it feasible to use the destructuring procedure to modify the name of an object variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we want to assign a property to a variable with another name. We can set the new or shortened name by implementing a semi-colon in the destructing process. The colon shows what goes where and specifies the new or shortened name.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle potentially missing object properties using destructuring in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the object is missing object property, you can use destructuring to set a new property and value to reference the object. We can set default values using the assignment (=) operator. Default values, like arrays or function parameters, can be any expressions or function calls, and they get evaluated if no value is specified.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to shorten an object property and supply a value to that property, what is the process used to implement this in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you want to shorten a property and supply a value to a property, we can combine both with a colon and assign a shortened property name. The semi-colon sets the new shortened property name, and the assignment operator assigns a new value.',
      },
    },
    {
      '@type': 'Question',
      name: 'When working with an object, is there a way to extract only the properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we have a complex object with many properties, we can extract what we need by using destructuring to extract specific properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the object has more properties than we have variables? Can we take some and then assign the (rest) somewhere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use the rest pattern, just like we do with array destructuring. Using the rest pattern, we can assign properties and collect the rest if necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some of the issues you can run into with destructuring objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most significant issue is the curly brackets that encapsulate the properties. Since objects use block scoping, an issue can arise when you separate the variable initialization from the destructuring properties on a new line. The problem is that JavaScript treats &#123;...&#125; in the main code flow (not inside another expression) as a code block. We can wrap the expression in parentheses to show JavaScript that it is not a code block (...).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we use more complex left-side patterns to extract deeper portions if an object or an array contains other nested objects and arrays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can use more complex left-side patterns to extract deeper portions. You can build a generic object that references the original. Because JavaScript allows you to choose your properties, it is possible to build a generic object with properties referencing the original object.',
      },
    },
  ],
};

export default StructuredData;
