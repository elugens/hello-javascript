---
title: JavaScript Arrays
description: What is an array? Arrays are a collection of indexed values that can be
  accessed by a numerical index. We use arrays to store an collection of values.
  Frontend
sidebar_position: 4
sidebar_label: Arrays
keywords:
  - javascript arrays
  - arrays
  - indexed collections
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - collections
  - frontend
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:02:03.566Z
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ArraysSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JavaScript Arrays | Frontend Developer Phone Interview</title>
</head>

<!-- Developer Line Notes: If you try to access this note your brain will explode. Boom!!! -->

**Data Types: Arrays**

---

<AdSense />

---

<CloseAllAnswers />

### An object is a keyed collection of values. What is an array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, an array is an ordered list of values that can be of any type, indexed numerically starting from zero.</div><br />
  <div><strong>Technical Response:</strong> An array is a special data structure that we use to store an ordered collection of values. Arrays are ordered with numbered indexes starting at zero and encapsulated in square brackets. To access the values, you must use the variable and an assigned index number to extract the value.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
```

  </div>
  </div>
</details>

---

### What type of elements can you store in an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An array can store elements of any single data type: integers, floats, strings, booleans, objects, other arrays, etc., depending on the programming language.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Storing integers
let intArray = [1, 2, 3, 4, 5];

// Storing strings
let strArray = ['hello', 'world'];

// Storing objects (like other arrays)
let objectArray = [[1, 2], [3, 4]];
```

  </div>
  </div>
</details>

---

### What are the two syntaxes used to create an empty array in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two syntaxes to create an empty array in JavaScript are using array literal notation ([ ]) or the Array() constructor using the new operator.
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
  <div><strong>Interview Response:</strong> You can get the length of an array in JavaScript using the .length property of the array object, e.g. myArray.length.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits.length); // 3
```

  </div>
  </div>
</details>

---

### What is the benefit of using a trailing comma in an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using a trailing comma in an array can make it easier to add or remove items from the list without causing syntax errors.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

<p>Without a trailing comma:</p>

```js
let arr = [
  'item1',
  'item2',
  'item3'  // No trailing comma here
];
```

<p>If you want to add 'item4' to this array, you need to add a comma to the end of 'item3' and then add 'item4'. This changes two lines:</p>

```js
let arr = [
  'item1',
  'item2',
  'item3', // Line changed to add comma
  'item4'  // New line added
];
```

<p>With a trailing comma:</p>

```js
let arr = [
  'item1',
  'item2',
  'item3', // Trailing comma here
];
```

<p>Now, if you want to add 'item4', you only need to add the new line:</p>

```js
let arr = [
  'item1',
  'item2',
  'item3',
  'item4',  // New line added, no previous line changed
];
```

:::note

In version control systems like Git, this will be shown as a single line added, rather than one line modified and one line added. This can make changes clearer and easier to review.

:::

  </div>
  </div>
</details>

---

### In JavaScript, what are the two data structures that arrays can mimic?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, arrays can mimic two data structures: stacks (using push() and pop() methods) and queues (using shift() and push() or unshift() and pop() methods). An array can also act as a deque data structure.
</div><br />
  <div><strong className="codeExample">Code Examples:</strong><br /><br />

  <div></div>

<p><strong>Stack:</strong></p>

```js
let stack = [];
stack.push("a"); // ["a"]
stack.push("b"); // ["a", "b"]
stack.pop();     // ["a"]
```

<br/>
<p><strong>Queue:</strong></p>

```js
let queue = [];
queue.push("a"); // ["a"]
queue.push("b"); // ["a", "b"]
queue.shift();   // ["b"]
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the array pop() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The pop() method in an array removes and returns its last element, and doesn't take any arguments or parameters.</div><br />
  <div><strong>Technical Response:</strong> The array pop() method removes the last element of an array and returns the element. It also affects the array's length and returns undefined if the array is empty. The pop method is considered a generic method, and it can be called or applied to array-like objects. However, it may not work correctly with objects that have no length. The pop method has no parameters/arguments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.pop()<br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.pop()); // remove "Pear" and console.log it

console.log(fruits); // Apple, Orange

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

### Can you explain the function of the array push() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The push() method adds one or more elements to the end of an array in JavaScript, and increases the array length.</div><br />
  <div><strong>Technical Response:</strong> The array push() method appends one or more elements to the end of an array. The push method is generic by design and allows it to get used on array-like objects. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot convert into a number, the index used is 0. This outcome includes the possibility of length being nonexistent, in which case length gets created. Although strings are native, Array-like objects, they are not suitable in applications of the push method, as strings are immutable, similarly to the native, Array-like object arguments. The push syntax allows for single or multiple elements.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.push(element1, element2)<br /><br />

  <div></div>

```js
// Pushing a single element
let fruits = ['Apple', 'Orange'];

fruits.push('Pear');

console.log(fruits); // Apple, Orange, Pear

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

### Can you explain the function of the array shift() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The shift() method removes and returns the first element of an array in JavaScript, shifting all other elements down by one index.</div><br />
  <div><strong>Technical Response:</strong> The array shift() method removes the first element at the beginning of an array and returns the removed element. The shift method always changes the length of the array. If the array is empty, then the shift method returns undefined. The shift method is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner. The shift method has no additional parameters because of its generic design.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> arr.shift() <br /><br />

  <div></div>

```js
let fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.shift()); // remove Apple and console.log it

console.log(fruits); // Orange, Pear
```

  </div>
  </div>
</details>

---

### How does the array unshift() method work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The unshift() method adds one or more elements to the beginning of an array in JavaScript, shifting existing elements up by one index, and returns the new length of the array.</div><br />
  <div><strong>Technical Response:</strong> The array shift() method removes the first element at the beginning array and returns the removed element. The shift method constantly changes the length of the collection. If the array is empty, then the shift method returns undefined. The shift method is generic; this method gets applied to objects that look like arrays. Objects that do not contain a length property mirroring the last in a series of consecutive, zero-based numerical properties may not behave properly. The shift method has no additional parameters because of its generic design.
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

### Why is an array a special kind of object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An array is a special object because the square brackets used to access a property arr[0] come from the object syntax.</div><br />
  <div><strong>Technical Response:</strong> An array is a special object because the square brackets used to access a property arr[0] come from the object syntax. That is essentially the same as obj[key], where arr is the object, while numbers get used as keys. An array-like object typically has the length property within its structure, like regular arrays. They extend objects by providing special methods to work with ordered collections of data and the length property. But at the core, it is still an object. Unlike array-like objects, arrays are optimized for fast performance and handling of internal components.
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

### What happens when you try to utilize an Array in JavaScript as an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can use an array as an object, but its numerical indices will be converted to strings, and it will lose some of its array-specific functionality including its optimizations and benefits.</div><br />
  <div><strong>Technical Response:</strong> An array is a specialized object with internal optimized components. When you attempt to use an array as an object, it loses all its optimizations and benefits. It is good to think of arrays as special structures to work with the ordered data, and they provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data; please use them this way. And if you need arbitrary keys, the chances are high that you require a regular object &#123; &#125;.<br /><br />
  <strong>Examples: Misusing an array.</strong><br /><br />
  <ol>
    <li>Add a non-numeric property like arr.test = 5.</li>
    <li>Make holes, like add arr[0] and then arr[1000] (and nothing between them).</li>
    <li>Fill the array in the reverse order, like arr[1000], and arr[999].</li>
  </ol>
  </div>
  </div>
</details>

---

### Why is it faster to work with the end of an array than with its beginning?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The performance difference between working the end of the array and the beginning is tangible. Anytime an element must be removed or pushed onto the front of an array, the other elements need re-indexing.</div><br />
  <div><strong>Technical Response:</strong> The performance difference between working at the end of the array versus the beginning is tangible. Anytime an element must be removed or pushed onto the front of an array, the other elements should get reindexed. This performance difference means the engine (affecting performance and memory usage) must work harder to re-index all the elements. In contrast, when you push or remove an element from the end of an element, there is no need to re-index the remaining elements because their index position remains the same.<br /><br />
  <strong>Examples: The shift operation must do 3 things.</strong><br /><br />
  <ol>
    <li>Remove the element with the index 0.</li>
    <li>Move all elements to the left, renumber them in the index 1 to 0, from 2 to 1, and on to completion.</li>
    <li>Update the length property.</li>
  </ol>
  </div>
  </div>
</details>

---

### What are the three common ways to loop over an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Three common ways to loop over an array are the for loop, forEach() method, and for...of loop in JavaScript.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// 1. for loop:

let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2. forEach() method:

let arr = ['a', 'b', 'c'];
arr.forEach(function(element) {
  console.log(element);
});

// 3. for...of loop:


let arr = ['a', 'b', 'c'];
for (let element of arr) {
  console.log(element);
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
  <div><strong>Interview Response:</strong> Several problems make it a bad idea—the loop for..in iterates over all properties, not only the numeric ones. The for..in loop by specification gets optimized for generic objects, not arrays, and thus is 10-100 times slower.</div><br />
  <div><strong>Technical Response:</strong> There are several issues that make using a for...in loop with arrays a bad idea. The loop iterates over all properties, not just numeric ones. Additionally, the for...in loop is optimized for generic objects rather than arrays, resulting in slower performance by a factor of 10-100 times slower than other looping methods.<br /><br />
  <strong>Examples:</strong><br /><br />
  <ol>
    <li>The for..in loop iterates across all attributes, not just the numerical ones. In the browser and other contexts, there exist so-called "array-like" objects that resemble arrays. They have length and index features, but they may also include non-numeric attributes and techniques that we do not typically require. The for..in loop, on the other hand, displays a list of them. As a result, if we need to deal with array-like objects, these "extra" properties may cause problems.</li>
    <li>The for..in loop gets optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it is still speedy, and the speed may only matter in bottlenecks. But still, we should be aware of the difference.</li>
  </ol>
  </div>
  </div>
</details>

---

### Can you explain the limitations related to the array length property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The range limitation for the length property must be lower than 2 to the 32<sup>nd</sup> power. Another limitation is the length property’s inability to return the correct number of elements.</div><br />
  <div><strong>Technical Response:</strong> According to the MDN, the range limitation for the length property must be lower than 2<sup>32</sup>. Another limitation is the length property’s inability to return the correct number of elements. For example, if there is no element in one of the indices, the length property still counts that position, and length returns the highest index, not the number of elements. A less common issue is array mutation when an element is deleted (delete colors[0]) from an array. (Note: You should never use the delete method to clear an array or remove elements.) The length is not updated with the new number of elements and returns the highest index.
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

A less common issue is array mutation when an element gets deleted from an array. The length is not updated with the new number of elements and returns the highest index.

:::

  </div>
  </div>
</details>

---

### What's the significant difference between an Array and an array literal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Array constructor (new Array()) creates an array, optionally with a set length or predefined elements. Array literal ([]) creates an array with given elements, if any.</div><br />
  <div><strong>Technical Response:</strong> There are several differences in the behaviors of the Array constructor and array literal. The constructor is rarely used in modern JavaScript because array literals use the square bracket [] syntax, which is shorter. Array constructors (new Array(2)) also have glitchy features that can produce adverse effects. When a new Array function gets invoked with a single argument, a number, it returns an array with no items but the specified length.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = new Array(3); // will it create an array of [3] ?

console.log(arr[0]); // returns undefined! no elements.

console.log(arr.length); // length 3
```

  </div>
  </div>
</details>

---

### What's the drawback of using the Array constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Array constructor can cause confusion if a single numeric argument is provided, as it sets the length of the array instead of creating an array with one number element.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Jere's a JavaScript example to demonstrate the potential confusion with the Array constructor:

let arr1 = new Array(5);   // Creates an array of length 5, not containing the number 5
console.log(arr1);         // Logs: [ <5 empty items> ]

let arr2 = [5];            // Creates an array containing the number 5
console.log(arr2);         // Logs: [ 5 ]

let arr3 = new Array(5, 1); // Creates an array containing the numbers 5 and 1
console.log(arr3);         // Logs: [ 5, 1 ]

```

  </div>
  </div>
</details>

---

### Are there any rules governing the equality comparison of two Arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the equality comparison of two arrays is done by reference, meaning that two arrays with the same values and even the same lengths are not considered equal unless they refer to the same object in memory.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 == arr2); // Logs: false, because arr1 and arr2 are different objects
console.log(arr1 === arr2); // Logs: false, for the same reason

console.log(arr1 == arr3); // Logs: true, because arr1 and arr3 are the same object
console.log(arr1 === arr3); // Logs: true, for the same reason
```

  </div>
  </div>
</details>

---

### What kind of issues can we run into when comparing an Array literal to zero?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Comparing an array literal to zero in JavaScript can lead to unexpected results due to type coercion. The expression [] == 0 returns true because [] converts to 0.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log([] == 0);  // Logs: true

// Here's why:
// 1. The array literal [] is converted to a string.
// 2. An empty array converted to a string gives an empty string "".
// 3. An empty string "" is then coerced to a number for the comparison with 0, which gives 0.
// 4. Hence, [] == 0 turns into "" == 0, then into 0 == 0, which is true.
```

  </div>
  </div>
</details>

---

### When should you use a for...of loop instead of a for loop with arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You should use a for...of loop instead of a for loop with arrays in JavaScript when you need to loop over array elements without using their index, and when you don't need to modify the array.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here are JavaScript examples illustrating the difference:

`for...of` loop (when you only care about values):

```javascript
let arr = ['a', 'b', 'c'];
for (let value of arr) {
  console.log(value);  // Logs: 'a', 'b', 'c'
}
```

`for` loop (when you need to access or manipulate the index):

```javascript
let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);  // Logs: '0 a', '1 b', '2 c'
}
```

In the `for...of` example, we simply iterate over the values in the array. In the `for` loop example, we have access to each index (`i`), and we can do something with it if needed.

  </div>
  </div>
</details>

---
