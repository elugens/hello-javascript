const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'An object is a keyed collection of values. What is an array in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An array is a special data structure that we use to store an ordered collection of values. Arrays are ordered with numbered indexes starting at zero and encapsulated in square brackets. To access the values, you must use the variable and an assigned index number to extract the value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two syntaxes used to create an empty array in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use two syntaxes to create an array, including the Array() global object and an array literal using square brackets. The common practice is to use the square bracket representation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get the length of an array in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To extract the length of an array, you must use the array length property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of elements can you store in an array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arrays are classified as Homogeneous Data Structures because they store elements of the same type in programming languages like Java. However, JavaScript Arrays are considered objects and do not have the same technical specifications. Technically in JavaScript, arrays can have elements of different types without producing an error. Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations\u2014neither the length of a JavaScript array nor the types of its elements are fixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the benefit of using a trailing comma in an array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The trailing comma style makes it easier to insert and remove items because all lines become alike.',
      },
    },
    {
      '@type': 'Question',
      name: 'In JavaScript, what are the two data structures that arrays can mimic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript uses arrays can mimic both queues and stack data structures. An array can also act as a deque data structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array pop() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The array pop() method removes the last element of an array and returns the element. It also affects the array's length and returns undefined if the array is empty. The pop method is considered a generic method, and it can be called or applied to array-like objects. However, it may not work correctly with objects that have no length. The pop method has no parameters/arguments.",
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array push() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The array push() method appends one or more elements to the end of an array. The push method is generic by design and allows it to get used on array-like objects. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot convert into a number, the index used is 0. This outcome includes the possibility of length being nonexistent, in which case length gets created. Although strings are native, Array-like objects, they are not suitable in applications of the push method, as strings are immutable, similarly to the native, Array-like object arguments. The push syntax allows for single or multiple elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array shift() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The array shift() method removes the first element at the beginning of an array and returns the removed element. The shift method always changes the length of the array. If the array is empty, then the shift method returns undefined. The shift method is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner. The shift method has no additional parameters because of its generic design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array unshift() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The array shift() method removes the first element at the beginning array and returns the removed element. The shift method constantly changes the length of the collection. If the array is empty, then the shift method returns undefined. The shift method is generic; this method gets applied to objects that look like arrays. Objects that do not contain a length property mirroring the last in a series of consecutive, zero-based numerical properties may not behave properly. The shift method has no additional parameters because of its generic design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain why is an array a special kind of object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An array is a special object because the square brackets used to access a property arr[0] come from the object syntax. That is essentially the same as obj[key], where arr is the object, while numbers get used as keys. An array-like object typically has the length property within its structure, like regular arrays. They extend objects by providing special methods to work with ordered collections of data and the length property. But at the core, it is still an object. Unlike array-like objects, arrays get optimized for fast performance and handling of internal components.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when you try to utilize an array in JavaScript as an object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An array is a specialized object with internal optimized components. When you attempt to use an array as an object, it loses all its optimizations and benefits. It is good to think of arrays as special structures to work with the ordered data, and they provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data; please use them this way. And if you need arbitrary keys, the chances are high that you require a regular object &#123; &#125;.<br /><br />\r\n  <strong>Examples: Misusing an array.</strong><br /><br />\r\n  <ol>\r\n    <li>Add a non-numeric property like arr.test = 5.</li>\r\n    <li>Make holes, like add arr[0] and then arr[1000] (and nothing between them).</li>\r\n    <li>Fill the array in the reverse order, like arr[1000], and arr[999].</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it faster to work with the end of an array than with its beginning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The performance difference between working at the end of the array versus the beginning is tangible. Anytime an element must be removed or pushed onto the front of an array, the other elements should get reindexed. This performance difference means the engine (affecting performance and memory usage) must work harder to re-index all the elements. In contrast, when you push or remove an element from the end of an element, there is no need to re-index the remaining elements because their index position remains the same.<br /><br />\r\n  <strong>Examples: The shift operation must do 3 things.</strong><br /><br />\r\n  <ol>\r\n    <li>Remove the element with the index 0.</li>\r\n    <li>Move all elements to the left, renumber them in the index 1 to 0, from 2 to 1, and on to completion.</li>\r\n    <li>Update the length property.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two common ways to loop over an array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The two common ways to loop an array are using the for and for…of loops. Both looping structures get optimized for performance with arrays. In addition, the array forEach method is available to these two loops, but it is known to cause bottlenecks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain some of the drawbacks of using a for…in loop on arrays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Although it is possible to use a for\u2026in loop on an array, but not recommended. Several problems make it a bad idea.<br /><br />\r\n  <strong>Examples:</strong><br /><br />\r\n  <ol>\r\n    <li>The for..in loop iterates across all attributes, not just the numerical ones. In the browser and other contexts, there exist so-called "array-like" objects that resemble arrays. They have length and index features, but they may also include non-numeric attributes and techniques that we do not typically require. The for..in loop, on the other hand, displays a list of them. As a result, if we need to deal with array-like objects, these "extra" properties may cause problems.</li>\r\n    <li>The for..in loop gets optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it is still speedy, and the speed may only matter in bottlenecks. But still, we should be aware of the difference.</li>\r\n  </ol>',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain some of the limitations related to the length property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the MDN, the range limitation for the length property must be lower than 2<sup>32</sup>. Another limitation is the length property\u2019s inability to return the correct number of elements. For example, if there is no element in one of the indices, the length property still counts that position, and length returns the highest index, not the number of elements. A less common issue is array mutation when an element is deleted (delete colors[0]) from an array. (Note: You should never use the delete method to clear an array or remove elements.) The length is not updated with the new number of elements and returns the highest index.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the significant difference between an Array and an array literal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several differences in the behaviors of the Array constructor and array literal. The constructor is rarely used in modern JavaScript because array literals use the square bracket [] syntax, which is shorter. Array constructors (new Array(2)) also have glitchy features that can produce adverse effects. When a new Array function gets invoked with a single argument, a number, it returns an array with no items but the specified length.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any rules governing the equality comparison of two Arrays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The basic rule is always to use the strict equality operator because the equality operator can produce some adverse effects, like 0 == [] returns True when it should return false.',
      },
    },
  ],
};

export default StructuredData;
