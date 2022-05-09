const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What three data structures use generic methods of obj.keys, obj.values, and obj.entries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three data structures that use the obj.keys, obj.values, and obj.entries generic methods include Map, Set, and Array structures. Plain objects also support similar methods, but the syntax is slightly different.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.keys method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Object.keys() function produces an array containing the names of a given object's enumerable properties, iterated in the same manner as a regular loop.",
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the Object.values method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Object.values() return an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the object's property values manually.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please Explain the function and syntax of the Object.entries method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Object.entries() method returns an array of a given object's enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between map.keys() and Object.keys(obj) in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest difference is that we must use Object.keys(obj) rather than obj.keys (). The primary factor is adaptability. Remember that in JavaScript, objects are the foundation of all complicated structures. As a result, we may have our object, such as data, that implements its data.values() function. We may still use Object.values(data) on it. The second distinction is that Object.* methods return "actual" array objects rather than merely iterables. This difference is primarily due to historical considerations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Object.keys/values/entries methods access symbolic properties in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys. Usually, that is convenient. But if we want symbolic keys too, there is a separate method Object.getOwnPropertySymbols() that returns an array of only symbolic keys. Also, a method exists, Reflect.ownKeys(obj), that returns all keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Since, Objects lack the methods for arrays, e.g., map, filter, and others. What Object methods can you use to access those methods (map or filter) on an Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we would like to apply them, we can use Object.entries followed by Object.fromEntries. First, we extract an array of [key, value] pairs from the obj by invoking Object.entries(obj). Call map on the resulting array. Then, we have to call Object.fromEntries(array) on the resulting array to turn it back into an object.',
      },
    },
  ],
};

export default StructuredData;
