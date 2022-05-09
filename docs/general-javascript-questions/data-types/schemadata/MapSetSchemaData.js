const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Map and Object in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Map object holds key-value pairs (Just like Objects) and remembers the original insertion order of the keys. We may use any value (both objects and primitive values) as a key or a value. But the main difference is that Map allows keys of any type. Objects also convert keys to strings, which is another known difference. The keys of an Object must be either a String or a Symbol. As you look at Objects and Maps, another apparent difference is that Objects cannot use another object as a key.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are some methods and properties that the Map Object implements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are several built-in methods and properties of the Map Object, including new Map(), set, get, has, delete, clear, and size.<br /><br />\r\n  <strong>Methods and properties are as follows:</strong><br /><br />\r\n  <ul>\r\n    <li>new Map() \u2013 constructs the map.</li>\r\n    <li>map.set(key, value) \u2014 saves the value as a function of the key.</li>\r\n    <li>map.get(key) \u2013 returns the value specified by the key or undefined if the key does not exist in the map.</li>\r\n    <li>map.has(key) \u2013 If the key exists, it returns true; otherwise, it returns false.</li>\r\n    <li>map.delete(key) - deletes the value specified by the key.</li>\r\n    <li>map.clear() \u2014 clears the map completely.</li>\r\n    <li>map.size \u2013 The number of elements currently on the map gets returned.</li>\r\n  </ul>',
      },
    },
    {
      '@type': 'Question',
      name: 'What is one of the most notable and vital Map features in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Using objects as keys is one of the most notable and vital Map features. The same does not count for objects, We should note that using a string as a key in an object is fine, but we cannot use another object as a key.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Map Object compare keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So, NaN can be used as the key as well. This algorithm cannot be changed or customized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which map methods can you use to iterate over a Map Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three Map methods that you can use to iterate over a map, including the key, values, and entries methods. The keys method returns the keys within the Map. The entries method returns an iterable for entries [key, value]. At the same time, the Object.values method returns an iterable for values. Notable, by default entries, is used in the for…of loop. So, it is not necessary to invoke it explicitly. The iteration goes in the same order as the value insertion, and the map preserves this order, unlike regular Objects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Besides the key, values, and entries methods, is there another method you can use to iterate over a Map Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ou can use forEach method to iterate over the Map Object. The forEach() method executes a provided function once for each Map entry. You should note that instead of producing a [key, value], as a result, it creates the opposite [value, key]. You can choose the format of your choice to meet the proposed outcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you set properties for Map the same way you add properties for a regular object-literal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, yes, but it is not recommended because it uses the feature of a generic object. There is a significant loss of built-in Map methods like set and delete when it we transform it into a generic object.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you convert a plain object into a Map in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if we have a plain object and would like to create a Map from it, we can use the built-in method Object.entries(obj) that returns an array of key/value pairs for an object precisely in that format.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main difference between Object.entries and Object.fromEntries methods regarding the Map Object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we have a plain object, and we would like to create a Map from it, then we can use the built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format. The Object.fromEntries() method transforms a list of key-value (Map Object) pairs into an object. So, both have conversion components that are the opposite of one another.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain how does the Set Object function in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Set object is a special object that lets you store unique values of any type, whether primitive values or object references. The Set() constructor creates the base structure of the object. The main feature is that repeated calls of set.add(value) with the same value do not do anything, and that is why each value appears in a Set only once.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the obvious differences between a Set and Array objects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Well, in general, Array is a type of structure representing a block of data (numbers, objects) allocated in consecutive memory. Set, more familiar as a Math concept, is an abstract data type that contains only distinct elements/objects without the need of being allocated orderly by index. Array and Set are technically different concepts in JavaScript. One of the most significant differences here, you may notice, is that elements in Array can be duplicated (unless you tell it not to be), and in Set, they just cannot (regardless of what you decide). In addition, Array is an “indexed collection” type of data structure, while Set is considered a “keyed collection”.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to loop/iterate over a Set in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'here are two ways to iterate over a Set() in JavaScript. The for..of and forEach loops. You can also use a traditional iterative for loop, but it is much more complex and not recommended (Ninja Code).',
      },
    },
  ],
};

export default StructuredData;
