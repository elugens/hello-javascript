---
title: Array Methods
sidebar_position: 5
---

# Arrays Methods in JavaScript - Q&A

**Data Types: ARRAY METHODS**

**Question:** **Explain, the function and syntax of the array splice() method?**

**Interview Answer:** The splice method is a swiss army knife for arrays, it can do everything. The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

**Answer:** The splice method is a swiss army knife for arrays, it can do everything. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The basic syntax of the splice method includes modifying arrays starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Then it returns the array of removed elements.

**Syntax:** `arr.splice(start[, deleteCount, elem1, ..., elemN]);`

Code Example:

```js
let arr = ['I', 'study', 'JavaScript'];

arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

// inserts at index 1

console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, 'May');

// replaces 1 element at index 4

console.log(months);

// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

Source: <https://javascript.info/array-methods#splice>

**Question:** **How do negative array indexes work?**

**Interview Answer:** A negative index begins at the end of an array and steps back towards the front of the array such as -1 being one index step from the end.

**Technical Answer:** Most array methods allow negative indexes. A negative index begins at the end of an array and steps back towards the front of the array such as -1 being one index step from the end. There is no zero-index position at the end of array.

Example:

```js
let arr = [1, 2, 5];

// from index -1 (one step from the end)

// delete 0 elements,

// then insert 3 and 4

arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5
```

Source: <https://javascript.info/array-methods#splice>

**Question:** **Explain, the function and syntax of the array slice() method?**

**Interview Answer:** The method arr.slice returns a new array copying to it all items from index start to end (not including end).

**Technical Answer:** The method arr.slice is much simpler than similar-looking arr.splice. It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed. It’s similar to a string method str.slice, but instead of substrings it makes subarrays. We can also call it without arguments: arr.slice() creates a copy of arr. That is often used to obtain a copy for further transformations that should not affect the original array.

**Syntax:** slice(start, end);

Code Example:

```js
let arr = ['t', 'e', 's', 't'];

console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
```

Source: <https://javascript.info/array-methods#slice>

**Question:** **Explain, the basic difference between the array splice and slice methods?**

**Interview Answer:** The basic difference between slice and splice is splice() changes the original array on which it is called and returns it. The slice() method doesn't change the original array but it does return a new array.

Code Example:

```js
// Array Slice Method \*

let arr = ['t', 'e', 's', 't'];

console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
console.log(arr); // ['t', 'e', 's', 't']; no change to the original array
// Array Splice Method \*\*

let arr2 = [1, 2, 5];

console.log(arr2.splice(-1, 0, 3, 4)); // returns []
// returns an empty array because it was ran before it was created

console.log(arr2); // 1,2,3,4,5 – modified the original array
```

Source: <https://javascript.info/array-methods#slice>

**Question:** **Explain, the function and syntax of the array concat method?**

**Interview Answer:** The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

**Technical Answer:** The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. It accepts any number of arguments using either arrays or values. Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added. But if an array-like object has a special Symbol.isConcatSpreadable property, then it is treated as an array by concat its elements are added instead.

**Syntax:** arr.concat(arg1, arg2...);

Example:

```js
let arr = [1, 2];

// create an array from: arr and [3,4]

alert(arr.concat([3, 4])); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]

alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6

alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
///////////////////////////////

let arr = [1, 2];

let arrayLike = {
  0: 'something',

  length: 1,
};

alert(arr.concat(arrayLike)); // 1,2,[object Object]
///////////////////////////////

let arr = [1, 2];

let arrayLike = {
  0: 'something',

  1: 'else',

  [Symbol.isConcatSpreadable]: true,

  length: 2,
};

alert(arr.concat(arrayLike)); // 1,2,something,else
```

Source: <https://javascript.info/array-methods#concat>

**Question:** **Explain, the function and syntax of the array forEach() method?**

**Interview Answer:** The arr.forEach method allows us to run a function for every element in an array. The function is not executed for array elements without values.

**Technical Answer:** The arr.forEach method allows us to run a function for every element of an array and returns undefined. The function is not executed for array elements without values. The forEach method accepts the current value and a callback with an optional item, index, and array. A forEach() loop is a function that runs another function (callback) on each item in an array. We define what happens in that callback function. It should be noted that the forEach expects a synchronous function forEach and does not wait for promises. forEach should not be used like a for or for..of loop on large data sets. It is known to cause bottlenecks, because you cannot directly break out of the loop using a break statement other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

**Syntax:** `arr.forEach(callback function(item, index, array) {});`

Code Example:

```js
// Using an Arrow Function

let myFunction = (item, index) => {
  console.log(index + ':' + item);
};

const fruits = ['apple', 'orange', 'cherry'];

fruits.forEach(myFunction);

// Using an Function Declaration

const fruits2 = ['apple', 'orange', 'cherry'];

fruits2.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ':' + item);
}
```

Source: <https://javascript.info/array-methods#iterate-foreach>

**Question:** **Why can’t you use a return statement in a forEach loop?**

**Interview Answer:** The foreEach is runs a callback function on every array item. Even if you attempt to write a return statement it only returns on that specific instance of the function.

**Note:** Additionally, break and continue statements are not valid statements and will result in a Syntax error.

Source: <https://javascript.info/array-methods#iterate-foreach>

**Question:** **What is the difference between the array indexOf, lastIndexOf, and includes methods and their string counterparts?**

**Interview Answer:** The operate on items instead characters, like their string counterparts.

**Technical Answer:** The methods array indexOf, lastIndexOf and includes method have the same syntax and do essentially the same as their string counterparts but operate on items instead of characters.

Source: <https://javascript.info/array-methods#indexof-lastindexof-and-includes>

**Question:** **Explain, the function and syntax of the array indexOf() method?**

**Interview Answer:** The indexOf array method returns the first index at which a given element can be found in the array, or -1 if it is not present. It accepts two arguments include the searchElement and fromIndex.

**Technical Answer:** The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It accepts two arguments include the searchElement and fromIndex. The searchElement is the element located in the array. The fromIndex is the starting index in the array that you want to start the element search from. indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

**Syntax:** `arr.indexOf(searchElement[, fromIndex])`

Example:

```js
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
```

Source: <https://javascript.info/array-methods#indexof-lastindexof-and-includes>

**Question:** **Explain, the function and syntax of the array lastIndexOf() method?**

**Interview Answer:** The lastIndexOf array method returns the last index at which a given element can be found in the array, or -1 if it is not present. It accepts two arguments include the searchElement and fromIndex.

**Technical Answer:** The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. The lastIndexOf method has two arguments. The searchElement is the element to be in the array. The second argument is the optional fromIndex which searchs from the specified index.

**Syntax:** `arr.lastIndexOf(searchElement[, fromIndex]);`

Example:

```js
let numbers = [2, 5, 9, 2];

console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(7)); // -1
console.log(numbers.lastIndexOf(2, 3)); // 3
console.log(numbers.lastIndexOf(2, 2)); // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3
```

Source: <https://javascript.info/array-methods#indexof-lastindexof-and-includes>

**Question:** **Explain, the function and syntax of the array includes() method?**

**Interview Answer:** The includes array method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

**Technical Answer:** The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. Returns a A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified). Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0. The include method also has an optional fromIndex position as a starting point in the index forward.

**Syntax:** `arr.includes(valueToFind[, fromIndex]);`

Example:

```js
[1, 2, 3]
  .includes(2) // true
  [(1, 2, 3)].includes(4) // false
  [(1, 2, 3)].includes(3, 3) // false
  [(1, 2, 3)].includes(3, -1) // true
  [(1, 2, NaN)].includes(NaN); // true
```

Source: <https://javascript.info/array-methods#indexof-lastindexof-and-includes>

**Question:** **What are some of the differences between includes and indexOf?**

**Interview Answer:** The only difference is that includes checks if you have passed it a regular expression instead of a string and throws an exception if you have. indexOf will accept a regular expression but always return -1.

**Technical Answer:** There are some notable differences between the includes() and indexOf() methods. The includes method returns a Boolean and the indexOf method returns a subscript. The includes method finds NaN and undefined whereas the indexOf method does not. The includes() method does not distinguish between -0 and +0 (This is not a bug, but clearly how JavaScript works. From a performance standpoint, the only difference is that includes checks if you have passed it a regular expression instead of a string and throws an exception if you have. indexOf will accept a regular expression but always return -1. So, while includes will be a tiny, tiny amount slower because it must check if you passed it a regex, this will make no difference to how fast your code runs. You should use indexOf if you care about where the substring is in the original string. If you do not care, just call includes because it makes the intent of your code clearer.

Example:

```js
// Using includes() method to check for NaN

const array1 = [NaN];

if (array1.includes(NaN)) {
  console.log('true. NAN was found in the array'); // true. NAN was found in the array
}

// Using indexOf() method to check for NaN

const array2 = [NaN];

if (array2.indexOf(NaN) == -1) {
  console.log('NaN not found in the array'); // NaN not found in the array
}
```

Source: <https://dev.to/adroitcoder/includes-vs-indexof-in-javascript>

**Question:** **Explain, the function and syntax of the array find() method?**

**Interview Answer:** The find method accepts a callback function on elements in an array where the item is the element, index is its index, and the array is the array itself. If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

**Note:** You should remember that index 0 will be interpreted as a falsie value in conditional statement checks on the find method.

**Technical Answer:** The find method accepts a callback function on elements in an array where the item is the element, index is its index, and the array is the array itself. If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned. You should remember that index 0 will be interpreted as a Falsy value in conditional statement checks on the find method.

**Syntax:** `arr.find(callback(element[, index[, array]])[, thisArg]);`

Example:

```js
// Simple Implementation

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);

// expected output: 12

// Implementation on Array Objects

let users = [
  { id: 1, name: 'John' },

  { id: 2, name: 'Pete' },

  { id: 3, name: 'Mary' },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // expected output: John
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find>

**Question:** **Explain, the function and syntax of the array findIndex() method?**

**Interview Answer:** The findIndex method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

**Syntax:** `arr.findIndex(callback( element[, index[, array]] )[, thisArg]);`

Example:

```js
// Simple Implementation

const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex((element) => element > 10);

console.log(found);

// expected output: 1

// Implementation on Array Objects

let users = [
  { id: 1, name: 'John' },

  { id: 2, name: 'Pete' },

  { id: 3, name: 'Mary' },
];

let user = users.findIndex((item) => item.id == 1);

console.log(user); // expected output: 0
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex>

**Question:** **Explain, the function and syntax of the array filter() method?**

**Interview Answer:** The filter method calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.

**Technical Answer:** The filter method creates a new array with all elements that pass the test implemented by the provided function. The filter method calls a provided callback function once for each element in an array and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are skipped, and are not included in the new array.

**Syntax:** arr.filter(callback(item, index, array);

Example:

```js
let users = [
  { id: 1, name: 'John' },

  { id: 2, name: 'Pete' },

  { id: 3, name: 'Mary' },
];

// returns array of the first two users

let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
// filter method with a callback function

function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// filtered is [12, 130, 44]
```

Source: <https://javascript.info/array-methods#filter>

**Question:** **Explain, the function and syntax of the array sort(fn) method?**

**Interview Answer:** The sort() method sorts the elements of an array in place and returns the sorted array in ascending order.

**Technical Answer:** The sort() method sorts the elements of an array in place (not copied) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units’ values. The sort method uses a comparative analyst of two elements where the first element is compared against the second element. Because of Unicode comparison, numbers are not compared properly by default.

**Syntax:** arr.sort([compareFunction])

Example:

```js
let arr = [1, 2, 15];

// the method reorders the content of arr

arr.sort();

alert(arr); // 1, 15, 2
// The FIX for sorting numbers

function compareNumeric(a, b) {
  if (a > b) return 1;

  if (a == b) return 0;

  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

alert(arr); // 1, 2, 15
```

Source: <https://javascript.info/array-methods#map>

**Question:** **Explain, the function and syntax of the array map() method?**

**Interview Answer:** The array map method accepts a call back function that is called for every element of array. Each time callback executes, the returned value is added to newArray. The callback accepts three arguments including the item, index, and array.

**Technical Answer:** The arr.map method is one of the most useful and often used. It calls the function for each element of the array and returns the new array of results. It accepts a call back function that is called for every element of arr. Each time callback executes, the returned value is added to newArray. The callback accepts three arguments including the item, index, and array. The item is the current item being called. Index and array are optional where the index is the index of the current item being processed in the array. The array is the array that the map method is being called upon.

**Syntax:**

```js
let result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});
```

Example:

```js
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let lengths = arr.map((item) => item.length);

alert(lengths); // 5,7,6
```

Source: <https://javascript.info/array-methods#map>

**Question:** **Explain, the function and syntax of the array reverse() method?**

**Interview Answer:** The reverse method reverses the order of elements in an array. The first array element becomes the last, and the last array element becomes the first.

**Technical Answer:** The reverse method reverses the order of elements in an array. The first array element becomes the last, and the last array element becomes the first. It also returns the array after the reversal.

**Note:** It should be noted that you cannot use the reverse method to reverse a string. It is strictly used for arrays, but this can give you some insight on the first step to reversing string with reverse method. Simply (It’s not that simple) it turns the string into an array.

**Syntax:** `arr.reverse()`

Example:

```js
const nums = [1, 2, 3];

console.log(nums); // [1, 2, 3]
// Now in reverse

nums.reverse();

console.log(nums); // [3, 2, 1]
// This is how you reverse string using the reverse method

let word = 'Hello';

// turn word to an array ['H', 'e', 'l', 'l', 'o']

let wordArr = Array.from(word);

wordArr.reverse(); // reverse ['H', 'e', 'l', 'l', 'o']
console.log(wordArr); // wordArr = ["o", "l", "l", "e", "H"]
```

Source: <https://javascript.info/array-methods#reverse>

**Question:** **Explain, the function and syntax of the array split method?**

**Interview Answer:** A split method divides a string into an ordered list of substrings, places them in an array, and returns that array of substrings. The split method accepts two arguments including delimiter and an optional number. The optional number sets the number of values returned in the array.

**Technical Answer:** The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array of strings. The division is done by searching for a pattern, where the pattern is provided as the first parameter in the method's call. The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though. When the empty string ("") is used as a separator, the string is not split by user-perceived characters (grapheme clusters) or Unicode characters (codepoints), but by UTF-16 code units. This destroys surrogate pairs.

**Syntax:** `string.split(delimiter[, optional: number])`

Example:

```js
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

console.log(arr);

for (let name of arr) {
  alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// Using optional second parameter to return the first two strings to the array

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // return Bilbo, Gandalf
```

Source: <https://javascript.info/array-methods#split-and-join>

**Question:** **Explain, the function and syntax of the array join() method?**

**Interview Answer:** The join method creates and returns a new string by concatenating all the elements in an array or an array-like object, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator in a string.

**Technical Answer:** The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. The call arr.join(glue) does the reverse of split. If an element is undefined, null or an empty array [], it is converted to an empty string.

**Syntax:** `arr.join([separator])`

Example:

```js
let arr = ['Wind', 'Water', 'Fire'];

arr.join(); // 'Wind,Water,Fire'
arr.join(', '); // 'Wind, Water, Fire'
arr.join(' + '); // 'Wind + Water + Fire'
arr.join(''); // 'WindWaterFire'
```

Source: <https://javascript.info/array-methods#split-and-join>

**Question:** **Explain, the function and syntax of the array reduce() method?**

**Interview Answer:** The reduce method reduces the array to a single value. The method executes a provided function for each value of the array, from left-to-right. The return value of the function is stored in an accumulator total.

**Note:** The reduce method does not execute the function for array elements without values or change the original array.

**Technical Answer:** The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. The reducer function takes four arguments including an accumulator, current value, current index, and the source array. The reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value. The method arr.reduceRight does the same, but goes from right to left.

**Syntax:** `arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])`

```js
let value = arr.reduce(
  function (accumulator, item, index, array) {
    // ...
  },
  [initial]
);
```

Example:

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

Source: <https://javascript.info/array-methods#reduce-reduceright>

**Question:** **Explain, the function and syntax of the array reduceRight() method?**

**Interview Answer:** The reduceRight method applies a function against an accumulator and each value of the array, from right-to-left, to reduce it to a single value. The reduce method does the same, but goes from left to right.

**Note:** The reduceRight method does not execute the function for array elements without values or change the original array.

**Syntax:** `arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])`

````js
let value = arr.reduceRight(function(accumulator, item, index, array) {

    // ...

}, [initial]);```


Example:
```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduceRight((sum, current) => sum + current, 0);

alert(result); // 15
````

Source: <https://javascript.info/array-methods#reduce-reduceright>

**Question:** **Explain, the function and syntax of the array isArray() method?**

**Interview Answer:** The Array.isArray() method determines whether the passed value is an Array. It returns true if it is an array, otherwise false. It is a much better option to using the typeof operator to determine the actual object type.

**Syntax:** `Array.isArray(value)`

Example:

```js
// all following calls return true

Array.isArray([]);

Array.isArray([1]);

Array.isArray(new Array());

Array.isArray(new Array('a', 'b', 'c', 'd'));

Array.isArray(new Array(3));

// Little known fact: Array.prototype itself is an array:

Array.isArray(Array.prototype); // returns true

// all following calls return false

Array.isArray();

Array.isArray({});

Array.isArray(null);

Array.isArray(undefined);

Array.isArray(17);

Array.isArray('Array');

Array.isArray(true);

Array.isArray(false);

Array.isArray(new Uint8Array(32));

Array.isArray({ \_\_proto\_\_: Array.prototype });
```

Source: <https://javascript.info/array-methods#array-isarray>

**Question:** **Explain, what typed arrays are in JavaScript and their basic use?**

**Interview Answer:** JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

**Technical Answer:** JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. As you may already know, Array objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast.

However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using WebSockets, and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data. This is where typed arrays come in. Each entry in a JavaScript typed array is a raw binary value in one of a number of supported formats, from 8-bit integers to 64-bit floating-point numbers.

However, typed arrays are not to be confused with normal arrays, as calling Array.isArray() on a typed array returns false. Moreover, not all methods available for normal arrays are supported by typed arrays (e.g. push and pop).

To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object) is an object representing a chunk of data; it has no format to speak of and offers no mechanism for accessing its contents. To access the memory contained in a buffer, you need to use a view. A view provides a context — that is, a data type, starting offset, and the number of elements — that turns the data into a typed array.

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays>
