---
title: Arrays
sidebar_position: 4
---

# JavaScript Arrays

**Data Types: Arrays**

<head>
  <title>JavaScript Arrays - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### An object is a keyed collection of values, what is an array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An array is used to store an ordered collection of values.</div><br />
  <div><strong>Technical Response:</strong> An array is a special data structure that is used to store an ordered collection of values. Arrays are ordered with numbered indexes start at zero and encapsulated in square brackets. To access the values, you must use the variable and an assigned index number to extract the value.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Plum'];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
```

  </div>
  </div>
</details>

---

### What are the two syntaxes to create an empty array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The array global object and an array literal using square brackets are used to create an empty array.</div><br />
  <div><strong>Technical Response:</strong> There are two syntaxes you can use to create an array including the Array() global object and an array literal using square brackets. The common practice is to use the square bracket representation.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = new Array();
let arr = [];
```

  </div>
  </div>
</details>

---

### How do you get the length of an array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In order, to extract the length of an array you must use the array length property.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Plum'];

alert(fruits.length); // 3
```

  </div>
  </div>
</details>

---

### What type of elements can you store in an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically in JavaScript, arrays can have elements of different types without producing an error.</div><br />
  <div><strong>Technical Response:</strong> Arrays are classified as Homogeneous Data Structures because they store elements of the same type in programming languages like Java. However, JavaScript Arrays are considered objects and do not have the same technical specifications. Technically in JavaScript, arrays can have elements of different types without producing an error. Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Array of Numbers
let nums = [0, 1, 2];

for (num of nums) {
  console.log(nums); // 1, 2, 3
}

// Array of multiple Types
let rands = [0, 'a', 'b', true];

for (rand of rands) {
  console.log(rand); // 0, a, b, true
}
```

  </div>
  </div>
</details>

---

### What is the benefit of using a trailing comma in an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The trailing comma style makes it easier to insert and remove items because all lines become alike.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = [
  'Apple',
  'Orange',
  'Plum', // <-- Trailing Comma
];
```

  </div>
  </div>
</details>

---

### What are the two common data structures arrays are used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript arrays can be used as a queue or stack data structures. An array can also act as a deque data structure.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = [
  'Apple',
  'Orange',
  'Plum', // <-- Trailing Comma
];
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the array pop() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The array pop() method removes the last element of an array and returns the element. It has no arguments or parameters.</div><br />
  <div><strong>Technical Response:</strong> The array pop() method removes the last element of an array and returns the element. It also has an affect on the length of the array and returns undefined if the array is empty. The pop method is considered a generic method and it can be called or applied on array like objects. However, it may not work in a proper way with objects that have no length. The pop method has no parameters/arguments.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.pop()<br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Pear'];

alert(fruits.pop()); // remove "Pear" and alert it

alert(fruits); // Apple, Orange

// Works with array like objects (required: length property)

var myFish = {
  0: 'angel',
  1: 'clown',
  2: 'mandarin',
  3: 'sturgeon',
  length: 4,
};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the array push() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The array push method appends one or more elements to the end of an array.</div><br />
  <div><strong>Technical Response:</strong> The array push() method appends one or more elements to the end of an array. The push method is generic by design and allows it to be used on array like objects. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot be converted into a number, the index used is 0. This includes the possibility of length being nonexistent, in which case length will also be created. Although strings are native, Array-like objects, they are not suitable in applications of the push method, as strings are immutable. Similarly, for the native, Array-like object arguments. The push syntax allows for single or multiple elements.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.push(element1, element2)<br /><br />

  <div></div>

```js
// Pushing a single element
let fruits = ['Apple', 'Orange'];

fruits.push('Pear');

alert(fruits); // Apple, Orange, Pear

// Pushing multiple elements
let sports = ['soccer', 'baseball'];
let total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the array shift() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The array shift() method removes the first element at the beginning array and returns the removed element.</div><br />
  <div><strong>Technical Response:</strong> The array shift() method removes the first element at the beginning array and returns the removed element. The shift method always changes the length of the array. If the array is empty then the shift method returns undefined. Shift is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner. The shift method has no additional parameters because of it’s generic design.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.shift() <br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Pear'];

alert(fruits.shift()); // remove Apple and alert it

alert(fruits); // Orange, Pear
```

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the array unshift() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.</div><br />
  <div><strong>Technical Response:</strong> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. Please note that, if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters. This method can be called or applied to objects resembling arrays. Objects which do not contain a length property—reflecting the last in a series of consecutive, zero-based numerical properties—may not behave in any meaningful manner.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.unshift(element1[, ...[, elementN]])<br /><br />

  <div></div>

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

  </div>
  </div>
</details>

---

### Explain, why is an array a special kind of object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An array is a special kind of object because the square brackets used to access a property arr[0] actually come from the object syntax.</div><br />
  <div><strong>Technical Response:</strong> An array is a special kind of object because the square brackets used to access a property arr[0] actually come from the object syntax. That is essentially the same as obj[key], where arr is the object, while numbers are used as keys. An array like object typically has the length property within its structure which is like regular arrays. They extend objects providing special methods to work with ordered collections of data and the length property. But at the core it is still an object. Unlike array like objects, arrays are optimized for fast performance and handling of internal components.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Array Like Object
let fruits = {
  0: 'Apple',
  1: 'Pear',
  2: 'Banana',
  length: 3,
};

// Array
let fruits2 = ['Apple', 'Pear', 'Banana'];

console.log(fruits[0]); // array-like object returns Apple

console.log(fruits2[0]); // array returns Apple

console.log(fruits.length); // length returns 3

let arrFruits = Array.from(fruits); // converts array-like object to an array

console.log(arrFruits.length); // length returns 3

console.log(arrFruits.pop()); // removes Banana

console.log(arrFruits.length); // length returns 2
```

  </div>
  </div>
</details>

---

### What happens when you try to use an array like an object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  When you attempt to use an array as an object, it loses all its optimizations and benefits.</div><br />
  <div><strong>Technical Response:</strong>An array is a specialized object that has internal optimized components. When you attempt to use an array as an object, it loses all its optimizations and benefits. It is good to think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you require a regular object &#123; &#125; .<br /><br />
  <strong>Examples: Misusing an array</strong><br /><br />
  <ol>
    <li>Add a non-numeric property like arr.test = 5.</li>
    <li>Make holes, like: add arr[0] and then arr[1000] (and nothing between them).</li>
    <li> Fill the array in the reverse order, like arr[1000], arr[999] and so on.</li>
  </ol>
  </div>
  </div>
</details>

---

### Why is it faster to work with the end of an array than with its beginning?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  The performance difference with working the end of array versus the beginning is tangible. Anytime an element must be removed or pushed onto the front of an array all the other existing elements must be reindexed.</div><br />
  <div><strong>Technical Response:</strong>The performance difference with working the end of array versus the beginning is tangible. Anytime an element must be removed or pushed onto the front of an array all the other existing elements must be reindexed. This means the engine (affecting performance and memory usage) must work harder to re-index all the elements. In contrast when you push or remove an element from the end of an element. There is no need to re-index the remaining elements because their index position will remain the same.<br /><br />
  <strong>Examples: The shift operation must do 3 things…</strong><br /><br />
  <ol>
    <li>Remove the element with the index 0.</li>
    <li>Move all elements to the left, renumber them in the index 1 to 0, from 2 to 1 and so on.</li>
    <li>Update the length property.</li>
  </ol>
  </div>
  </div>
</details>

---

### What are the two common ways to loop over an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two common ways to loop an array is using the for and for…of loops. Both looping structures are optimized for performance with arrays.</div><br />
  <div><strong>Technical Response:</strong> The two common ways to loop an array is using the for and for…of loops. Both looping structures are optimized for performance with arrays. In addition, to these two loops the array forEach method is available, but it is known to cause bottlenecks.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// for...loop example
let arr = ['Apple', 'Orange', 'Pear'];

for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// for...of example
let fruits = ['Apple', 'Orange', 'Plum'];

// iterates over array elements
for (let fruit of fruits) {
  alert(fruit);
}
```

  </div>
  </div>
</details>

---

### Can you explain some of the drawbacks of using a for…in loop on arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  There are several problems that make it a bad idea. The loop for..in iterates over all properties, not only the numeric ones. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower.</div><br />
  <div><strong>Technical Response:</strong>Although it is possible to use a for…in loop on an array, it is not a recommended. There are several problems that make it a bad idea.<br /><br />
  <strong>Examples:</strong><br /><br />
  <ol>
    <li>The loop for..in iterates over all properties, not only the numeric ones. There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually do not need. The for..in loop will list them though. So, if we need to work with array-like objects, then these “extra” properties can become a problem.</li>
    <li>The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it is still amazingly fast. The speed may only matter in bottlenecks. But still, we should be aware of the difference.</li>
  </ol>
  </div>
  </div>
</details>

---

### Explain, some of the limitations related to the length property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The range limitation for the length property must be lower than 2 to the 32nd power. Another limitation is the length property’s inability to return the correct number of elements.</div><br />
  <div><strong>Technical Response:</strong> The range limitation for the length property must be lower than 2 to the 32nd power (232), according to the MDN. Another limitation is the length property’s inability to return the correct number of elements. For example, if there is no element in one of the indices, the length property will still count that position. Length returns the highest index and not the number of elements. A less common issue is array mutation, when an element is deleted (delete colors[0]) from an array. (Note: You should never use delete to clear an array or remove elements.) The length is not updated with the new number of elements and returns the highest index.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var animals = ['cat', 'dog', , 'monkey']; // animals is sparse

// prints 4, but real number of elements is 3
console.log(animals.length);

var words = ['hello'];

//the highest index is 6
words[6] = 'welcome';

//prints 7, based on highest index
console.log(words.length);

var colors = ['blue', 'red', 'yellow', 'white', 'black'];

// prints 5
console.log(colors.length);

// remove the first element 'blue'.
// The array becomes sparse
delete colors[0];

// still prints 5, because the highest index 4 was not modified
console.log(colors.length);
```

:::warning

A less common issue is array mutation when an element is deleted from an array. The length is not updated with the new number of elements and returns the highest index.

:::

  </div>
  </div>
</details>

---

### What is the difference between an Array and an array literal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The constructor is rarely used in modern JavaScript because array literals use the short square bracket syntax. If “new” Array is called with a single argument which is a number, then it creates an array without items, but with the given length.</div><br />
  <div><strong>Technical Response:</strong> There are several differences in the behaviors of the Array constructor and array literal. The constructor is rarely used in modern JavaScript because array literals use the square bracket [] syntax, which is shorter. Array constructors (new Array(2)) also have some glitchy features that can produce adverse effects. If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = new Array(3); // will it create an array of [3] ?

alert(arr[0]); // returns undefined! no elements.

alert(arr.length); // length 3
```

  </div>
  </div>
</details>

---

### Are there any rules in governing the equality comparison of two arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The basic rule is to always use the strict equality operator because the equality operator can produce some adverse effects, like 0 == [] returns true, when it should return false.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: Equality Operator
alert([] == []); // false
alert([0] == [0]); // false

// Comparison with primitives may give strange results as well:

alert(0 == []); // true, should be false

alert(0 === []); // false, no primitive conversion in strict equality
```

  </div>
  </div>
</details>

---
