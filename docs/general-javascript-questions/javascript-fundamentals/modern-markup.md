---
title: Modern Markup - JavaScript Interview Questions
description: Modern Markup in JavaScript - When working with modules, we use the script type attribute in Modern JavaScript. Frontend Developer Interview Questions n Answers
sidebar_position: 2
sidebar_label: Modern Markup
keywords:
  - modern markup
  - markup language
  - functions
  - modern javascript
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
  - modern markup
  - markup language
  - functions
  - modern javascript
  - interview answers
  - interview questions
---

<!-- Notes: Passed Rich Snippets validation. -->

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ModernMarkupSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Modern Markup | JavaScript Frontend Phone Interview Answers</title>
</head>

**JavaScript Fundamentals: Modern Markup**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/Skg3OnfabzA"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### Can you explain the script type attribute used in Modern JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>The type attribute in modern JavaScript development is used to specify the scripting language or module format for an &#60;script&#62; element. For instance, setting type="module" allows you to use JavaScript modules with import/export syntax.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> JavaScript type attribute<br /><br /></div>
  
  <div></div>

```javascript
<script type="module">
  import { myFunction } from './myModule.js';
  myFunction();
</script>
```

 <div>Here, the type="module" specifies that this script should be treated as a JavaScript module, enabling the use of import and export statements for modular code organization.
</div>
</details>

---

### What was the script language attribute used for in early web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This property displays the language of the script. According to the MDN, we no longer utilize it since it is <em>deprecated</em>.</div><br />
  <div><strong>Technical Response:</strong> In early web development, the type attribute in the &#60;script&#62; tag was used to specify the scripting language used in the code block within the script element. This was important at the time, different scripting languages were used for client-side scripts, such as JavaScript, VBScript, and others.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> JavaScript language attribute<br /><br /></div>
  
  <div></div>

```html
<html>
  <body>
    <script language="javascript">
      // <-- this is the script language attribute
      <!--
      document.write('Hello JavaScript!');
      //-->
    </script>
  </body>
</html>
```

<div>In this example, we use an arrow function and template literals for cleaner code, default parameters for flexibility, destructuring for easier assignment, ES6 module exports, and class syntax for object-oriented programming.</div><br/>
</details>

---

### What is the difference between traditional and modern JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Traditional JavaScript focuses on basic scripting, lacks advanced features, and has limited browser support. Modern JavaScript incorporates ECMAScript updates, provides advanced features, supports modern web development, and offers better browser compatibility.
  </div>
  </div><br />
  <div><strong className="codeExample">Take a quick look at this code snippet - Traditional JavaScript:</strong></div><br/>
  
  <div></div>

```javascript
function add(a, b) {
  return a + b;
}

var result = add(5, 3);
console.log("Result: " + result);
```

<div>This example uses a traditional function declaration and var for variable declaration. It defines a simple add function and logs the result to the console.</div><br/>
 <div><strong className="codeExample">Modern JavaScript:</strong></div><br/>
  
  <div></div>

```javascript
const add = (a, b) => a + b;

const result = add(5, 3);
console.log(`Result: ${result}`);
```

<div>The modern example uses arrow functions (=>) for a more concise syntax and const for variable declaration, providing better scoping and immutability. Template literals are used for cleaner string interpolation.</div><br/>

</details>

---

### What are the benefits of using ES6 syntax in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ES6 provides enhanced readability, conciseness, and maintainability. It introduces arrow functions, template literals, destructuring, modules, and classes for improved programming experience and productivity.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> ES6 syntax<br /><br /></div>
  
  <div></div>

```javascript
// Arrow function and template literals
const greet = (name) => `Hello, ${name}!`;

// Default parameter
const multiply = (a, b = 2) => a * b;

// Destructuring assignment
const person = { name: 'Alice', age: 28 };
const { name, age } = person;

// ES6 module (export)
export const add = (a, b) => a + b;

// ES6 class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal('Buddy');
dog.speak(); // Output: Buddy makes a noise.
```

<div>In this example, we use an arrow function and template literals for cleaner code, default parameters for flexibility, destructuring for easier assignment, ES6 module exports, and class syntax for object-oriented programming.</div><br/>
</details>

---

### What is the difference between let and const variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> let is used to declare block-scoped, mutable variables, while const declares block-scoped, immutable variables that cannot be reassigned.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> let and const<br /><br /></div>
  
  <div></div>

```javascript
let count = 0;
const maxLimit = 10;

for (let i = 0; i < maxLimit; i++) {
  count++;
}

console.log(count); // Output: 10
// maxLimit = 15; // Error: Assignment to constant variable.
```

<div>In this example, count is declared with let since its value changes, while maxLimit uses const as it remains constant. Attempting to reassign maxLimit results in an error.</div><br/>
</details>

---

### What is a callback function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback function in JavaScript is a function passed as an argument to another function, executed after the completion of an asynchronous operation.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Callback Function<br /><br /></div>
  
  <div></div>

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello, world!';
    callback(data);
  }, 1000);
}

fetchData((response) => {
  console.log(response); // Output: Hello, world!
});
```

<div>In this example, fetchData simulates an asynchronous operation using setTimeout. The callback function is passed as an argument, which logs the response once the operation is complete.</div><br/>
</details>

---

### What is a promise in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation, providing a more structured way to handle async code.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Promise<br /><br /></div>
  
  <div></div>

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((response) => {
    console.log(response); // Output: Hello, world!
  })
  .catch((error) => {
    console.error(error);
  });
```

<div>In this example, fetchData returns a Promise that simulates an asynchronous operation using setTimeout. The resolve function is called with the resulting data once the operation is complete. The then method handles the fulfilled Promise, logging the response, while the catch method handles errors.</div><br/>
</details>

---

### What is async/await in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Async/await in JavaScript simplifies asynchronous code, making it more readable by using async functions and await expressions to handle Promises.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Async/Await<br /><br /></div>
  
  <div></div>

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 1000);
  });
}

async function main() {
  try {
    const response = await fetchData();
    console.log(response); // Output: Hello, world!
  } catch (error) {
    console.error(error);
  }
}

main();
```

<div>In this example, fetchData returns a Promise simulating an asynchronous operation. The main function is declared as async, allowing the use of await to pause execution until the Promise resolves. This results in more readable and synchronous-like code while handling asynchronous operations.</div><br/>
</details>

---

### What is async/await in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Async/await in JavaScript simplifies asynchronous code, making it more readable by using async functions and await expressions to handle Promises.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Async/Await<br /><br /></div>
  
  <div></div>

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello, world!';
      resolve(data);
    }, 1000);
  });
}

async function main() {
  try {
    const response = await fetchData();
    console.log(response); // Output: Hello, world!
  } catch (error) {
    console.error(error);
  }
}

main();
```

<div>In this example, fetchData returns a Promise simulating an asynchronous operation. The main function is declared as async, allowing the use of await to pause execution until the Promise resolves. This results in more readable and synchronous-like code while handling asynchronous operations.</div><br/>
</details>

---
