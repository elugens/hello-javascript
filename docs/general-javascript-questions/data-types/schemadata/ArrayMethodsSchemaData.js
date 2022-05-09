const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array splice() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The splice method is a swiss army knife for arrays; it can do everything. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The basic syntax of the splice method includes modifying arrays starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN in their place. Then it returns the array of removed elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do negative array indexes work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most array methods allow negative indexes. A negative index begins at the end of an array and steps back towards the front of the array, such as -1 being one index step from the end. There is no zero-index position at the end of the array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Please explain the function and syntax of the array slice() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The method arr.slice is significantly more straightforward than the similarly named arr.splice. It returns a new array with all entries from index start to finish copied to it (not including end). When both start and end are negative, the position from the array end is assumed. It works similarly to the string function str.slice, except instead of substrings, it creates subarrays. We can also use it without arguments: arr.slice() which duplicates arr. This process frequently obtains a duplicate for subsequent changes that should not affect the original array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the fundamental difference between the array splice and slice methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The fundamental difference between slice and splice is that splice() changes the original array on which it is called and returns it. The slice() method doesn't change the original array, but returns a new array.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the function and syntax of the array concat method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use the concat() method to merge two or more arrays. This method does not change the existing arrays but returns a new array. It accepts any number of arguments using either arrays or values. Typically, it only copies elements from arrays. Other objects, even if they look like arrays, are added. But if an array-like object has a special Symbol.isConcatSpreadable property, it is treated as an array by concat its elements get added instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array forEach() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The arr.forEach method allows us to run a function for every element of an array and returns undefined. The function does not get executed for array elements without values. The forEach method accepts the current value and a callback with an optional item, index, and array. A forEach() loop is a function that runs another function (callback) on each item in an array. We define what happens in that callback function. You should note that forEach expects a synchronous function and does not wait for promises. The forEach should not get used like a for or for..of loop on large data sets. It can cause bottlenecks because you cannot directly break out of the loop using a break statement other than throwing an exception. The forEach() method is the wrong tool if you need such behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can’t you use a return statement in a forEach loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The foreEach runs a callback function on every array item. Even if you attempt to write a return statement, it only returns on that specific instance of the function. Additionally, break and continue statements are not valid statements, resulting in a Syntax error.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the array indexOf, lastIndexOf, and includes methods and their string counterparts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The methods array indexOf, lastIndexOf, and includes method have the same syntax and do essentially the same as their string counterparts but operate on items instead of characters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Please explain the function and syntax of the array indexOf() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The indexOf() method returns the first index at which a given element is found in the array, or -1 if it is not present. It accepts two arguments, including the searchElement and fromIndex. The searchElement is the element located in the array. The fromIndex is the starting index in the array you want to start the element search from. indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array lastIndexOf() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lastIndexOf() method returns the last index at which a given element gets found in the array, or -1 if it is not present. The array gets traversed backwards, beginning at fromIndex. There are two parameters to the lastIndexOf method, and the searchElement is the array element, and the second parameter is the optional fromIndex, which searches from the supplied index.',
      },
    },
    {
      '@type': 'Question',
      name: 'Please explain the function and syntax of the array includes() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The includes() method determines whether an array includes a specific value among its entries, returning true or false as appropriate. Returns a Boolean, which is true if the value valueToFind gets found within the array (or the part of the array indicated by the index fromIndex, if specified). Values of zero are all considered to be equal, regardless of sign. (You should not consider -0 to be equal to both 0 and +0), but false is not considered to be the same as 0. The include method also has an optional fromIndex position as a starting point in the index forward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key distinctions between includes and indexOf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are notable differences between the includes() and indexOf() methods. The includes method returns a Boolean, and the indexOf method returns a subscript. The includes method finds NaN and undefined, whereas the indexOf method does not. The includes() method does not distinguish between -0 and +0 (This is not a bug, but clearly how JavaScript works. From a performance standpoint, the only difference is that it includes checks if you have passed it a regular expression instead of a string and throws an exception if you have. indexOf accepts a regular expression but always returns -1. So, while includes is a tiny amount slower because it must check if you passed it a regex, this makes no difference in how fast your code runs. You should use indexOf if you care about where the substring is in the original string. If you do not care, just call includes because it makes the intent of your code clearer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array find() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The find method accepts a callback function on elements in an array where the item is the element index, and the array is the array itself. If it returns true, the search stops, and the item returns. If nothing gets found, undefined returns. It's good to keep in mind that index 0 is interpreted as a Falsy value in conditional statement checks on the find method.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array findIndex() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The findIndex method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array filter() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The filter method creates a new array with all elements that pass the test implemented by the provided function. The filter method calls a provided callback function once for each element in an array and constructs a new array of values for which the callback returns a value that coerces to true. The callback invokes only for indexes of the array that have assigned values; it does not invoke for indexes that have been deleted or assigned values. Array elements that do not pass the callback test are skipped and not included in the new array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array sort(fn) method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The indexOf() method returns the first index at which a given element is found in the array, or -1 if it is not present. It accepts two arguments, including the searchElement and fromIndex. The searchElement is the element located in the array. The fromIndex is the starting index in the array you want to start the element search from. indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array lastIndexOf() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lastIndexOf() method returns the last index at which a given element gets found in the array, or -1 if it is not present. The array gets traversed backwards, beginning at fromIndex. There are two parameters to the lastIndexOf method, and the searchElement is the array element, and the second parameter is the optional fromIndex, which searches from the supplied index.',
      },
    },
    {
      '@type': 'Question',
      name: 'Please explain the function and syntax of the array includes() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The includes() method determines whether an array includes a specific value among its entries, returning true or false as appropriate. Returns a Boolean, which is true if the value valueToFind gets found within the array (or the part of the array indicated by the index fromIndex, if specified). Values of zero are all considered to be equal, regardless of sign. (You should not consider -0 to be equal to both 0 and +0), but false is not considered to be the same as 0. The include method also has an optional fromIndex position as a starting point in the index forward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key distinctions between includes and indexOf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are notable differences between the includes() and indexOf() methods. The includes method returns a Boolean, and the indexOf method returns a subscript. The includes method finds NaN and undefined, whereas the indexOf method does not. The includes() method does not distinguish between -0 and +0 (This is not a bug, but clearly how JavaScript works. From a performance standpoint, the only difference is that it includes checks if you have passed it a regular expression instead of a string and throws an exception if you have. indexOf accepts a regular expression but always returns -1. So, while includes is a tiny amount slower because it must check if you passed it a regex, this makes no difference in how fast your code runs. You should use indexOf if you care about where the substring is in the original string. If you do not care, just call includes because it makes the intent of your code clearer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array find() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The find method accepts a callback function on elements in an array where the item is the element index, and the array is the array itself. If it returns true, the search stops, and the item returns. If nothing gets found, undefined returns. It's good to keep in mind that index 0 is interpreted as a Falsy value in conditional statement checks on the find method.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array findIndex() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The findIndex method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array filter() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The filter method creates a new array with all elements that pass the test implemented by the provided function. The filter method calls a provided callback function once for each element in an array and constructs a new array of values for which the callback returns a value that coerces to true. The callback invokes only for indexes of the array that have assigned values; it does not invoke for indexes that have been deleted or assigned values. Array elements that do not pass the callback test are skipped and not included in the new array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array sort(fn) method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The sort() method sorts the elements of an array in place (not copied) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units’ values. The sort method uses a comparative analysis of two elements where the first element gets compared against the second element. Because of Unicode comparison, numbers do not get appropriately compared by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you please explain the function and syntax of the array map() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The arr.map method is one of the most useful and often used. It calls the method for each array element and returns the resulting array. It accepts a callback function that gets called for every element of arr. Each time callback executes, the returned value gets added to newArray. The callback accepts three arguments: item, index, and array. The item is the current item getting called. Index and array are optional, where the index is the current item's index getting processed in the array. The array is the array that the map method is getting called.",
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array reverse() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reverse method reverses the order of elements in an array. The first array element becomes the last, and the last array element becomes the first. It also returns the array after the reversal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array split method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array of strings. The division completes by searching for a specific pattern, where the pattern gets provided as the first parameter in the method\'s call. The split method has an optional second numeric argument, limiting the array length. If it gets provided, then the extra elements are ignored. In practice, it rarely gets used, in any case. When the empty string ("") gets used as a separator, the string is not split by user-perceived characters (grapheme clusters) or Unicode characters (codepoints) but by UTF-16 code units. This process destroys surrogate pairs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array join() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The join() method creates and returns a new string by concatenating all elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, that item returns without using the separator. The call arr.join(glue) does the reverse of a split. If an element is undefined, null, or an empty array [], it is converted to an empty string.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the array reduce() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The reduce() method executes a reducer function (that you provide) on each array element, resulting in a single output value. The reducer function takes four arguments: an accumulator, current value, current index, and the source array. The reducer function's returned value gets assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value. The method arr.reduceRight does the same but goes from right to left.",
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the array reduceRight() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reduceRight method applies a function against an accumulator and each value of the array, from right to left, to reduce it to a single value. The reduce method does the same but goes from left to right.',
      },
    },
    {
      '@type': 'Question',
      name: 'Please explain the function and syntax of the array isArray() method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Array.isArray() method determines whether the passed value is an Array. It returns true if it is an array; otherwise false. It is better to use the typeof operator to determine the object type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain what typed arrays are in JavaScript and their primary use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. As you may already know, Array objects grow and shrink dynamically and can have any JavaScript value, and JavaScript engines perform optimizations so that these arrays are fast.<br /><br /> Web applications become more powerful, adding features like audio and video manipulation, and access to raw data using WebSockets. It becomes clear that there are times when it would be helpful for JavaScript code to manipulate raw binary data easily. This point is the time where typed arrays come in. Each entry in a JavaScript typed array is a raw binary value in one of several supported formats, from 8-bit integers to 64-bit floating-point numbers.<br /><br /> However, typed arrays are not to be confused with standard arrays, as calling Array.isArray() on a typed array returns false. Moreover, not all methods available for standard arrays get supported by typed arrays (e.g., push and pop).<br /><br /> JavaScript typed arrays divide the implementation into buffers and views for optimal flexibility and efficiency. A buffer (implemented by the ArrayBuffer object) is an object that represents a block of data; it has no format and no way to retrieve its contents. A view is required to access the memory contained in a buffer. A view, which turns the data into a typed array, provides a context: a data type, beginning offset, and the number of elements.',
      },
    },
  ],
};

export default StructuredData;
