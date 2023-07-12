---
title: JavaScript Array Methods
description: Explain the function and syntax of the array splice() method? How do negative
  array indexes work? Why can’t you use a return statement in a forEach loop?
sidebar_position: 5
sidebar_label: Array Methods
keywords:
  - function object
  - nfe
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
lastmod: 2022-05-01T20:48:00.922Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ArrayMethodsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JavaScript Array Methods | Frontend Phone Interview Response</title>
</head>

**Data Types: Array Methods**

<CloseAllAnswers />

### Can you explain the function of the array splice() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The splice() method is used to add, remove, or replace elements in an array. It has three arguments including the start index, delete count, and items to add.</div><br />
  <div><strong>Technical Response:</strong> The splice method is a swiss army knife for arrays; it can do everything. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The basic syntax of the splice method includes modifying arrays starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN in their place. Then it returns the array of removed elements.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.splice(start[, deleteCount, elem1, ..., elemN]);<br /><br />

  <div></div>

```js
let arr = ['I', 'study', 'JavaScript'];
arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

months.splice(4, 1, 'May');
// replaces 1 element at index 4

console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

  </div>
  </div>
</details>

---

### How do negative array indexes work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Negative array indexes count from the end of the array, with -1 representing the last element, -2 representing the second-to-last, and so on.</div><br />
  <div><strong>Technical Response:</strong> Most array methods allow negative indexes. A negative index begins at the end of an array and steps back towards the front of the array, such as -1 being one index step from the end. There is no zero-index position at the end of the array.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log(arr); // 1,2,3,4,5
```

  </div>
  </div>
</details>

---

### What methods are available in JavaScript to add elements to an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, elements can be added to an array using push() (to the end), unshift() (to the beginning), and splice() (at a specific index).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. Using `push()` to add elements to the end of the array:

```javascript
let arr = ['a', 'b', 'c'];
arr.push('d');
console.log(arr);  // Logs: ['a', 'b', 'c', 'd']
```

2. Using `unshift()` to add elements to the beginning of the array:

```javascript
let arr = ['a', 'b', 'c'];
arr.unshift('0');
console.log(arr);  // Logs: ['0', 'a', 'b', 'c']
```

3. Using `splice()` to add elements at a specific index in the array:

```javascript
let arr = ['a', 'b', 'c'];
arr.splice(1, 0, '1.5');
console.log(arr);  // Logs: ['a', '1.5', 'b', 'c']
```

In the `splice()` example, the first parameter is the index where new elements should be added, the second parameter is the number of elements to remove (0 in this case, since we're only adding), and the rest are the elements to add.

  </div>
  </div>
</details>

---

### Can you explain the function of the array slice() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The slice() method in JavaScript creates a new array by copying a portion of an existing array and returns it, with the option to specify the start and end (not including end) indexes of the elements to be copied..</div><br />
  <div><strong>Technical Response:</strong> The method arr.slice is significantly more straightforward than the similarly named arr.splice. It returns a new array with all entries from index start to finish copied to it (not including end). When both start and end are negative, the position from the array end is assumed. It works similarly to the string function str.slice, except instead of substrings, it creates subarrays. We can also use it without arguments: arr.slice() which duplicates arr. This process frequently obtains a duplicate for subsequent changes that should not affect the original array.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> slice(start, end);<br /><br />

  <div></div>

```js
let arr = ['t', 'e', 's', 't'];

console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
```

  </div>
  </div>
</details>

---

### What is the key difference between the array splice and slice methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between the splice() and slice() methods in JavaScript is that splice() changes the original array by adding or removing elements, while slice() creates a new array.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Array Slice Method *
let arr = ['t', 'e', 's', 't'];

console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(arr.slice(-2)); // s,t (copy from -2 till the end)

console.log(arr); // ['t', 'e', 's', 't']; no change to the original array

// Array Splice Method **
let arr2 = [1, 2, 5];

console.log(arr2.splice(-1, 0, 3, 4)); // returns []

// returns an empty array because it was ran before it was created

console.log(arr2); // 1,2,3,4,5 – modified the original array
```

  </div>
  </div>
</details>

---

### Can you please explain the function of the array concat() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The concat() method creates a new array by merging two or more arrays, without modifying the original arrays.</div><br />
  <div><strong>Technical Response:</strong> You can use the concat() method to merge two or more arrays. This method does not change the existing arrays but returns a new array. It accepts any number of arguments using either arrays or values. Typically, it only copies elements from arrays. Other objects, even if they look like arrays, are added. But if an array-like object has a special Symbol.isConcatSpreadable property, it is treated as an array by concat its elements get added instead.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.concat(arg1, arg2...);<br /><br />

  <div></div>

```js
let arr = [1, 2];

// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

///////////////////////////////

let arr = [1, 2];

let arrayLike = {
  0: 'something',
  length: 1,
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object]

///////////////////////////////

let arr = [1, 2];

let arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr.concat(arrayLike)); // 1,2,something,else
```

  </div>
  </div>
</details>

---

### Can you explain the function of the array forEach() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The forEach() method executes a provided function once for each array element, allowing you to perform an operation on each element of an array.</div><br />
  <div><strong>Technical Response:</strong> The arr.forEach method allows us to run a function for every element of an array and returns undefined. The function does not get executed for array elements without values. The forEach method accepts the current value and a callback with an optional item, index, and array. A forEach() loop is a function that runs another function (callback) on each item in an array. We define what happens in that callback function. You should note that forEach expects a synchronous function and does not wait for promises. The forEach should not get used like a for or for..of loop on large data sets. It can cause bottlenecks because you cannot directly break out of the loop using a break statement other than throwing an exception. The forEach() method is the wrong tool if you need such behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.forEach(callback function(item, index, array) {});<br /><br />

  <div></div>

```js
// Using an Arrow Function
let myFunction = (item, index) => {
  console.log(index + ':' + item);
};

const fruits = ['apple', 'orange', 'cherry'];
fruits.forEach(myFunction);

// Using an Function Declaration
const fruits2 = ['apple', 'orange', 'cherry'];
fruits2.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ':' + item);
}
```

  </div>
  </div>
</details>

---

### Why can’t you use a return statement in a forEach loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a return statement inside a forEach loop only exits the current iteration and not the entire loop.
</div><br />
  <div><strong>Technical Response:</strong> The reason you cannot use a return statement within a forEach loop is that the loop itself does not listen or respond to the return value of the callback function. The forEach loop simply calls the provided callback function for each element in the array, but it does not use or propagate the return value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const array = [1, 2, 3, 4, 5];
let sum = 0;

array.forEach((element) => {
  sum += element;
  return; // This return statement has no effect
});

console.log(sum); // Output: 15
```

  </div>

:::note

Additionally, break and continue statements are not valid statements, resulting in a Syntax error.

:::

  </div>
</details>

---

### How do the array methods `indexOf()`, `lastIndexOf()`, and `includes()` differ from their string counterparts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> The methods array indexOf, lastIndexOf, and includes method have the same syntax and do essentially the same as their string counterparts but operate on items instead of characters.
  </div>
  </div>
</details>

---

### How does the array indexOf() method work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The indexOf() method in JavaScript searches for the first occurrence of an element in an array and returns its first index. If the element is not found, it returns -1. It accepts two arguments, including the searchElement and fromIndex.</div><br />
  <div><strong>Technical Response:</strong> The indexOf() method returns the first index at which a given element is found in the array, or -1 if it is not present. It accepts two arguments, including the searchElement and fromIndex. The searchElement is the element located in the array. The fromIndex is the starting index in the array you want to start the element search from. indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.indexOf(searchElement[, fromIndex]);<br /><br />

  <div></div>

```js
let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
```

  </div>
  </div>
</details>

---

### Can you explain the function of the array lastIndexOf() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The lastIndexOf() method in JavaScript searches for the last occurrence of an element in an array and returns its index. If the element is not found, it returns -1.</div><br />
  <div><strong>Technical Response:</strong> The lastIndexOf() method returns the last index at which a given element gets found in the array, or -1 if it is not present. The array gets traversed backwards, beginning at fromIndex. There are two parameters to the lastIndexOf method, and the searchElement is the array element, and the second parameter is the optional fromIndex, which searches from the supplied index.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.lastIndexOf(searchElement[, fromIndex]);<br /><br />

  <div></div>

```js
let numbers = [2, 5, 9, 2];

console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(7)); // -1
console.log(numbers.lastIndexOf(2, 3)); // 3
console.log(numbers.lastIndexOf(2, 2)); // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3
```

  </div>
  </div>
</details>

---

### How does the array includes() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array `includes()` method checks if an array contains a specified element, returning a boolean value: true if present, false if absent.</div><br />
  <div><strong>Technical Response:</strong> The includes() method determines whether an array includes a specific value among its entries, returning true or false as appropriate. Returns a Boolean, which is true if the value valueToFind gets found within the array (or the part of the array indicated by the index fromIndex, if specified). Values of zero are all considered to be equal, regardless of sign. (You should not consider -0 to be equal to both 0 and +0), but false is not considered to be the same as 0. The include method also has an optional fromIndex position as a starting point in the index forward.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.includes(valueToFind[, fromIndex]);<br /><br />

  <div></div>

```js
[1, 2, 3]
  .includes(2) // true

  [(1, 2, 3)].includes(4) // false

  [(1, 2, 3)].includes(3, 3) // false

  [(1, 2, 3)].includes(3, -1) // true

  [(1, 2, NaN)].includes(NaN); // true
```

  </div>
  </div>
</details>

---

### What are the key differences between array includes() and indexOf() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key difference between includes() and indexOf() methods is that includes() returns a boolean (true/false) indicating if the element is present, while indexOf() returns the index of the first occurrence or -1 if not found.</div><br />
  <div><strong>Technical Response:</strong> There are notable differences between the includes() and indexOf() methods. The includes method returns a Boolean, and the indexOf method returns a subscript. The includes method finds NaN and undefined, whereas the indexOf method does not. The includes() method does not distinguish between -0 and +0 (This is not a bug, but clearly how JavaScript works. From a performance standpoint, the only difference is that it includes checks if you have passed it a regular expression instead of a string and throws an exception if you have. indexOf accepts a regular expression but always returns -1. So, while includes is a tiny amount slower because it must check if you passed it a regex, this makes no difference in how fast your code runs. You should use indexOf if you care about where the substring is in the original string. If you do not care, just call includes because it makes the intent of your code clearer.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using includes() method to check for NaN
const array1 = [NaN];

if (array1.includes(NaN)) {
  console.log('true. NAN was found in the array'); // true. NAN was found in the array
}

// Using indexOf() method to check for NaN
const array2 = [NaN];

if (array2.indexOf(NaN) == -1) {
  console.log('NaN not found in the array'); // NaN not found in the array
}
```

  </div>
  </div>
</details>

---

### How does the array find() method work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array find() method takes a callback function, iterating through array elements and returning the first element that satisfies the callback's condition, or undefined if not found.</div><br />
  <div><strong>Technical Response:</strong> The find method accepts a callback function on elements in an array where the item is the element index, and the array is the array itself. If it returns true, the search stops, and the item returns. If nothing gets found, undefined returns. It's good to keep in mind that index 0 is interpreted as a Falsy value in conditional statement checks on the find method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.find[callback(element[, index[, array]]](, thisArg));<br /><br />

  <div></div>

```js
// Simple Implementation
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

// Implementation on Array Objects
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // expected output: John
```

:::note

You should remember that index 0 gets interpreted as a falsie value in conditional statement checks on the find method.

:::

  </div>
  </div>
</details>

---

### Can you explain the function of the array findIndex() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array findIndex() method takes a callback function, iterating through array elements and returning the first element's index that satisfies the callback's condition. If no element satisfies the test, it returns -1.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.findIndex[callback( element[, index[, array]] ](, thisArg));<br /><br />

  <div></div>

```js
// Simple Implementation
const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex((element) => element > 10);

console.log(found);
// expected output: 1

// Implementation on Array Objects
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

let user = users.findIndex((item) => item.id == 1);

console.log(user); // expected output: 0
```

  </div>
  </div>
</details>

---

### How does the array filter() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The filter method calls a provided callback function once for each element in an array and constructs a new array of all the values for which the callback returns a value that coerces to true.</div><br />
  <div><strong>Technical Response:</strong> The filter method creates a new array with all elements that pass the test implemented by the provided function. The filter method calls a provided callback function once for each element in an array and constructs a new array of values for which the callback returns a value that coerces to true. The callback invokes only for indexes of the array that have assigned values; it does not invoke for indexes that have been deleted or assigned values. Array elements that do not pass the callback test are skipped and not included in the new array.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.filter(callback(item, index, array);<br /><br />

  <div></div>

```js
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length); // 2

// filter method with a callback function
function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

  </div>
  </div>
</details>

---

### Can you explain the function of the array sort(fn) method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array sort(fn) method sorts an array in place by comparing its elements using an optional compare function (fn), altering the original array.</div><br />
  <div><strong>Technical Response:</strong> The sort() method sorts the elements of an array in place (not copied) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units’ values. The sort method uses a comparative analysis of two elements where the first element gets compared against the second element. Because of Unicode comparison, numbers do not get appropriately compared by default.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.sort([compareFunction]);<br /><br />

  <div></div>

```js
let arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();

console.log(arr); // 1, 15, 2

// The FIX for sorting numbers

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr); // 1, 2, 15
```

  </div>
  </div>
</details>

---

### How does the array map() method work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The array map method accepts a callback function that gets called for every array element. Each time callback executes, the returned value gets added to newArray. The callback accepts three arguments: item, index, and array.</div><br />
  <div><strong>Technical Response:</strong> The arr.map method is one of the most useful and often used. It calls the method for each array element and returns the resulting array. It accepts a callback function that gets called for every element of arr. Each time callback executes, the returned value gets added to newArray. The callback accepts three arguments: item, index, and array. The item is the current item getting called. Index and array are optional, where the index is the current item's index getting processed in the array. The array is the array that the map method is getting called.
  </div><br />
  <div><strong className="codeExample">Syntax Example:</strong><br /><br />

  <div></div>

```js
let result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let lengths = arr.map((item) => item.length);
console.log(lengths); // 5,7,6
```

  </div>
  </div>
</details>

---

### Can you explain the function of the array reverse() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reverse() method in JavaScript reverses the order of elements in an array in place, meaning it modifies the original array.</div><br />
  <div><strong>Technical Response:</strong> The reverse method reverses the order of elements in an array. The first array element becomes the last, and the last array element becomes the first. It also returns the array after the reversal.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.reverse();<br /><br />

  <div></div>

```js
const nums = [1, 2, 3];

console.log(nums); // [1, 2, 3]

// Now in reverse

nums.reverse();

console.log(nums); // [3, 2, 1]

// This is how you reverse string using the reverse method

let word = 'Hello';

// turn word to an array ['H', 'e', 'l', 'l', 'o']
let wordArr = Array.from(word);

wordArr.reverse(); // reverse ['H', 'e', 'l', 'l', 'o']

console.log(wordArr); // wordArr = ["o", "l", "l", "e", "H"]
```

:::note

We should note that you cannot use the reverse method to reverse a string. Its strictly used for arrays, but this can give insight into the reverse method's first step to reversing string. Simply (It’s not that simple), it turns the string into an array.

:::

  </div>
  </div>
</details>

---

### Can you explain the function of the array split() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A split method divides a string into an ordered list of substrings, places them in an array, and returns that array of substrings. The split method accepts two arguments, including a delimiter and an optional number. The optional number sets the number of values returned in the array.</div><br />
  <div><strong>Technical Response:</strong> The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array of strings. The division completes by searching for a specific pattern, where the pattern gets provided as the first parameter in the method's call. The split method has an optional second numeric argument, limiting the array length. If it gets provided, then the extra elements are ignored. In practice, it rarely gets used, in any case. When the empty string ("") gets used as a separator, the string is not split by user-perceived characters (grapheme clusters) or Unicode characters (codepoints) but by UTF-16 code units. This process destroys surrogate pairs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> string.split(delimiter[, optional: number]);<br /><br />

  <div></div>

```js
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

console.log(arr);

for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// Using optional second parameter to return the first two strings to the array
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr); // return Bilbo, Gandalf
```

  </div>
  </div>
</details>

---

### How does the array join() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array join() method combines array elements into a single string, using a specified separator (default: comma) between each element, without modifying the original array.
</div><br />
  <div><strong>Technical Response:</strong> The join() method creates and returns a new string by concatenating all elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, that item returns without using the separator. The call arr.join(glue) does the reverse of a split. If an element is undefined, null, or an empty array [], it is converted to an empty string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.join([separator]);<br /><br />

  <div></div>

```js
let arr = ['Wind', 'Water', 'Fire'];
arr.join(); // 'Wind,Water,Fire'
arr.join(', '); // 'Wind, Water, Fire'
arr.join(' + '); // 'Wind + Water + Fire'
arr.join(''); // 'WindWaterFire'
```

  </div>
  </div>
</details>

---

### Can you explain the function of the array reduce() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array reduce() method takes a callback function and an optional initial value, reducing the array to a single output by iteratively applying the callback to each element, left to right.</div><br />
  <div><strong>Technical Response:</strong> The reduce() method executes a reducer function (that you provide) on each array element, resulting in a single output value. The reducer function takes four arguments: an accumulator, current value, current index, and the source array. The reducer function's returned value gets assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value. The method arr.reduceRight does the same but goes from right to left.
  </div><br />
  <div><strong className="codeExample">Syntax Example:</strong><br /><br />

  <div></div>

```js
let value = arr.reduce(
  function (accumulator, item, index, array) {
    // ...
  },
  [initial]
);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15
```

:::note

The reduce method does not execute the function for array elements without values or change the original array.

:::

  </div>
  </div>
</details>

---

### How does the array reduceRight() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript array reduceRight() method takes a callback function and an optional initial value, reducing the array to a single output by iteratively applying the callback to each element, right to left.
</div><br />
  <div><strong className="codeExample">Syntax Example:</strong><br /><br />

  <div></div>

```js
let value = arr.reduceRight(
  function (accumulator, item, index, array) {
    // ...
  },
  [initial]
);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduceRight((sum, current) => sum + current, 0);

console.log(result); // 15
```

:::note
Conversely, the reduce() method does the same thing but from left to right.
:::

  </div>
  </div>
</details>

---

### Can you explain how the array isArray() method functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript Array.isArray() method is a static function that checks if a given value is an array, returning true if it is, or false if it's not.
</div><br />
  <div><strong className="codeExample">Syntax Example:</strong><br /><br />

  <div></div>

```js
Array.isArray(value);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype); // returns true

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

:::note

It is better to use the typeof operator to determine the object type.

:::

  </div>
  </div>
</details>

---

### What are typed arrays in JavaScript and how are they primarily used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Typed arrays in JavaScript are array-like objects that store raw binary data, primarily used for efficient handling of large numerical data sets in WebGL, Web Audio API, and binary manipulation.</div><br />
  <div><strong>Technical Response:</strong> JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. As you may already know, Array objects grow and shrink dynamically and can have any JavaScript value, and JavaScript engines perform optimizations so that these arrays are fast.<br /><br /> Web applications become more powerful, adding features like audio and video manipulation, and access to raw data using WebSockets. It becomes clear that there are times when it would be helpful for JavaScript code to manipulate raw binary data easily. This point is the time where typed arrays come in. Each entry in a JavaScript typed array is a raw binary value in one of several supported formats, from 8-bit integers to 64-bit floating-point numbers.<br /><br /> However, typed arrays are not to be confused with standard arrays, as calling Array.isArray() on a typed array returns false. Moreover, not all methods available for standard arrays get supported by typed arrays (e.g., push and pop).<br /><br /> JavaScript typed arrays divide the implementation into buffers and views for optimal flexibility and efficiency. A buffer (implemented by the ArrayBuffer object) is an object that represents a block of data; it has no format and no way to retrieve its contents. A view is required to access the memory contained in a buffer. A view, which turns the data into a typed array, provides a context: a data type, beginning offset, and the number of elements.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Creating a typed array
const buffer = new ArrayBuffer(8); // Create an 8-byte buffer
const typedArray = new Int32Array(buffer); // Create a typed array with 32-bit integers

// Manipulating the typed array
typedArray[0] = 42;
typedArray[1] = 10;

// Accessing values from the typed array
console.log(typedArray[0]); // Output: 42
console.log(typedArray[1]); // Output: 10
```

  </div>
  </div>
</details>

---

### What is the difference between Array push() and unshift() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Array push() method adds elements to the end of an array, while the unshift() method inserts elements at the beginning, both altering the original array and returning its new length.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const array = [1, 2, 3];

// Using push() to add elements to the end of the array
array.push(4);
console.log(array); // Output: [1, 2, 3, 4]

// Using unshift() to add elements to the beginning of the array
array.unshift(0);
console.log(array); // Output: [0, 1, 2, 3, 4]
```

  </div>
  </div>
</details>

---

### How do you remove an element from an array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To remove an element from an array in JavaScript, use splice() to remove and/or add elements, pop() to remove the last element, or shift() to remove the first element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const array = [1, 2, 3, 4, 5];

// Remove element at index 2
array.splice(2, 1);

console.log(array); // Output: [1, 2, 4, 5]
```

  </div>
  </div>
</details>

---
