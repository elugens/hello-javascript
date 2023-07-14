---
title: Variables - JavaScript Interview Questions
description: JavaScript variables are used to store data. A variable is named storage for data in JavaScript. They include let, const, and var variables. Interview Questions
sidebar_position: 6
sidebar_label: Variables
keywords:
  - variables
  - javascript variables
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/VariablesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Variables | JavaScript Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: JavaScript Variables**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/cRwHvlOu9T0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### What is the definition of a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable in JavaScript is a named container for storing values, like numbers, strings, objects, or arrays, that can be reassigned, and used throughout your code.
  </div>
  </div>
</details>

---

### What are the keywords used to declare a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The keywords used to declare a variable include let, const, and var variables.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, variables are declared using the keywords 'var', 'let', or 'const'. 'var' is the original way to declare variables, while 'let' and 'const' were introduced in ES6.
  </div>
  </div>
</details>

---

### Can you declare multiple variables on one line?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, although the specification does not advise it for readability and consistency reasons. You can declare multiple variables on one line using either 'var', 'let', or 'const' by separating them with commas, but this is not the recommended approach.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: one-line

let user = 'John',
  age = 25,
  message = 'Hello';

// The multiline variant is a bit longer, but easier to read:

let user = 'John';

let age = 25;

let message = 'Hello';
```

  </div>
  </div>
</details>

---

### Is there a way to copy stored data from one variable to another?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript you can copy the value of one variable to another by assigning the value of the first variable to the second variable using the assignment operator.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let hello = 'Hello JavaScript!';

let message;

// copy 'Hello world' from hello into the message

message = hello;

// now two variables hold the same data

console.log(hello); // Hello world!
console.log(message); // Hello world!
```

  </div>
  </div>
</details>

---

### Does JavaScript allow you to change the value of a variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by declaring the variable equals the new value. It should be noted that a variable declared with const does not have this capability because it is a constant value.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let message;

message = 'Hello!';

message = 'World!'; // value changed
console.log(message); // returns 'World!'
```

  </div>
</details>

---

### Can you declare a variable twice in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can declare a variable twice in JavaScript, but it can lead to unexpected behavior or errors. In non-Strict Mode, you can declare the same variable multiple times with 'var', but it can lead to bugs. In Strict Mode, or using let or const, and redeclaring a variable throws an error.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
'use strict';
let message = 'This';

// repeated 'let' leads to an error

let message = 'That'; // SyntaxError: 'message' has already been declared
```

  </div>
</details>

---

### What are the limitations of variable names in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, variable names must start with a letter, underscore, or dollar sign, and can contain letters, digits, underscores, or dollar signs. They cannot be reserved words or contain spaces.
  </div><br />
  <div><strong className="codeExample">Examples of valid names:</strong><br /><br />

  <div></div>

```js
let userName;

let test123;
```

<strong className="codeExample">These names are also valid, but not recommended in the format below:</strong><br /><br />

  <div></div>

```js
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
console.log($ + _); // 3
```

<strong className="codeExample">These names are not valid and should not be used:</strong><br /><br />

  <div></div>

```js
// Invalid variable names
let 2ndName = "Alex";   // Cannot start with a number
let full-name = "John Doe";   // Cannot use hyphen
let for = "loop";    // Cannot use reserved keyword
```

  </div>
  </div>
</details>

---

### What is Lower CamelCase in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lower Camel Case, also known as 'camelCase' or medial capitals, is a naming convention in which words are joined together, and the first letter of each word after the first is capitalized, except for the first word which is in lowercase.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Here is an example of Lower Camel Case in JavaScript.<br /><br />

  <div></div>

```js
let firstName = "John";
let lastName = "Doe";
let age = 30;
let favoriteColor = "blue";
```

<p>In this example, the variable names use Lower Camel Case, with the first word in lowercase and the first letter of each subsequent word capitalized. This naming convention is commonly used in JavaScript for variable names, function parameters, and object properties.</p>
<p>Lower Camel Case is a popular naming convention because it is easy to read and understand, and it is consistent with the style used in many programming languages. It is important to choose a consistent naming convention throughout your codebase to improve readability and maintainability.</p>

  </div>
  </div>
</details>

---

### Can you explain the CamelCase naming method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CamelCase is a naming convention where words have no spaces and first letters capitalized. In JavaScript, we use CamelCase for variables, functions, and object properties. Pascal Case is used for classes and constructors.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
 // variable in CamelCase
let myFavoriteColor = "blue";
console.log(myFavoriteColor); // returns 'blue'
```

<p>CamelCase is a popular naming convention in JavaScript and is often used for variable names, function names, and object properties. It helps to make the code more readable and easier to understand.</p>
<p>It is important to note that while CamelCase is widely used in JavaScript, there are other naming conventions such as snake_case, kebab-case, and PascalCase. The choice of naming convention often depends on personal preference, team conventions, and the specific use case. However, using a consistent naming convention throughout your codebase can improve readability and maintainability.</p>

  </div>
  </div>
</details>

---

### In JavaScript, What stylization rule gets used in naming multi-word variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the most commonly used stylization rule for naming multi-word variables is Camel Case, in which each subsequent word starts with an uppercase letter and no spaces or underscores are used between the words.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myUserName;
```

  </div>
  </div>
</details>

---

### What is the stylization rule used for naming multi-word constructors in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, multi-word constructor names are typically written in PascalCase, which means that each word in the name starts with a capital letter and there are no spaces between the words. This convention is used to make the constructor names more readable and easier to distinguish from other types of variables in the code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function CarModel(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new CarModel("Honda", "Civic", 2022);
```

<p>In this example using the PascalCase naming convention to define a constructor function for a car model with three parameters: make, model, and year. We then create a new instance of this object using the new keyword and passing in some values for each of the parameters. The resulting object, myCar, has properties for make, model, and year based on the values we passed in.</p>

  </div>
  </div>
</details>

---

### Does variable case matter in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, variable case does matter in JavaScript, as it is a case-sensitive language. This means that two variables with different casing are considered to be different variables.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var myVariable = "hello";
var myvariable = "javascript";

console.log(myVariable);   // Output: "hello"
console.log(myvariable);   // Output: "javascript
```

<p>In this example, we have defined two variables with different casing - myVariable and myvariable. If we try to log the values of these variables to the console, we'll see that they are indeed different variables with different values.</p>
<p>It's important to note that while variable case does matter in JavaScript, it's generally considered good practice to use consistent naming conventions to make your code more readable and easier to understand. For example, you might choose to use camelCase for variable names, where the first word is in lowercase and subsequent words start with a capital letter. This convention is widely used in JavaScript and can make your code more consistent and easier to read, especially if you're working with other developers who are also following this convention.</p>
  </div>
  </div>
</details>

---

### In JavaScript, Are Non-Latin letters allowed in naming variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it is not recommended.</div><br />
  <div><strong>Technical Response:</strong> Yes, in modern versions of JavaScript, it is possible to use non-Latin letters, such as Arabic or Cyrillic characters, in variable names. However, it is generally not recommended for readability and compatibility reasons.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For example, technically, this can be implemented, but it remains a lousy approach and goes against recommendations.<br /><br />

  <div></div>

```js
var π = 3.14;
var こんにちは = "Hello";

console.log(π);            // Output: 3.14
console.log(こんにちは);  // Output: "Hello"

// More Examples

let имя = '...';

let 我 = '...';
```

<p>In this example, we've defined two variables using non-Latin characters. The first variable uses the Greek letter pi (π) as its name, and the second variable uses the Japanese greeting "こんにちは" (pronounced "Konnichiwa"). When we log the values of these variables to the console, we can see that they work just like any other variables in JavaScript.</p>

<p>It's important to note, however, that while you can use Unicode characters in variable names, it's generally considered good practice to stick to more conventional naming conventions that are easy to read and understand for other developers who may be working with your code.</p>

  </div>
  </div>
</details>

---

### Is it possible to declare a variable without let, const, or "The Old var"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Outside of strict mode, it is possible but not encouraged. It is possible to find it in earlier programs. Keyword let and const are used to declare variables in JavaScript and specify the scope and mutability of the variable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Technically, it is achievable but not recommended in modern JavaScript.<br /><br />

  <div></div>

```js
myVariable = "Hello, JavaScript!";
console.log(myVariable); // output: Hello, JavaScript

"use strict";
myVariable = "Hello, JavaScript!";
console.log(myVariable); // error thrown
```

<p>In this example, we simply assign a value to a variable called myVariable without using any of the usual variable declaration keywords. This will work in most cases, but it's important to note that doing so creates an implicit global variable, which can lead to unintended consequences if the variable is accidentally overwritten or used in other parts of the code.</p>
<p>It's generally considered best practice to always use let, or const to declare variables explicitly and avoid creating global variables unintentionally.</p>
  </div>
  </div>
</details>

---

### What is the difference between var and let in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One main difference is that var is function-scoped, while let is block-scoped. This means that variables declared with var are accessible within the entire function in which they are declared, while variables declared with let are only accessible within the block in which they are declared.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Take a quick look at this code snippet.<br /><br />

  <div></div>

```js
function test() {
  var x = 1;
  let y = 2;
  if (true) {
    var x = 3;
    let y = 4;
    console.log(x); // Output: 3
    console.log(y); // Output: 4
  }
  console.log(x);   // Output: 3
  console.log(y);   // Output: 2
}
test();
```

<p>In this example, we've declared two variables, x and y, using var and let, respectively. We've also used an if statement to create a block scope. When we log the values of x and y within the block, we can see that they have different values due to the block scope of let. However, when we log the values of x and y outside of the block, we can see that the var declaration of x has overwritten the original value of x within the function.</p>
<p>It's generally considered best practice to use let instead of var for declaring variables in modern JavaScript, as it helps to avoid unintended variable reassignment and makes it easier to reason about the scope of variables within your code.</p>
  </div>
  </div>
</details>

---

### Can you reassign a value in a variable declared with const?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it results in a syntax error because constants do not allow reassignment.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myConst = "Hello";
myConst = "JavaScript!"; // error, can't reassign the constant!
```

<p>In this example, we've declared a variable called myConst with the value "Hello". When we try to reassign a new value to myConst to “JavaScript” using the assignment operator (=), we get an error indicating that we cannot assign a new value to a constant variable.</p>
<p>const is used to declare variables whose values should not change over time. This can help prevent unintended changes to variables and make code more predictable and easier to reason about. If you need to declare a variable whose value may change over time, you should use let instead.</p>

  </div>
  </div>
</details>

---

### When should you use a constant as an alias in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A constant can be used as an alias when you want to use a shorter, more readable name for a value that is used multiple times in your code, but you don't want to modify the value. Constant values such as colors and numeric identifiers are a perfect use case.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Hexadecimal Colors<br /><br />

  <div></div>

```js
const COLOR_RED = '#F00';

const COLOR_GREEN = '#0F0';

const COLOR_BLUE = '#00F';

const COLOR_ORANGE = '#FF7F00';

// ...when we need to pick a color

let color = COLOR_ORANGE;

console.log(color); // #FF7F00
```

  </div>
  </div>
</details>

---

### What are the advantages of aliasing a constant in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Aliases are easy to remember, avoids repetition, enhances code organization, reduces cognitive load, and simplifies complex expressions.
  </div>
  </div>
</details>

---

### In JavaScript, When should a constant be named in all caps?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a constant should be named in all caps when it represents a value that is fixed and never changes throughout the program.</div><br />
  <div><strong>Technical Response:</strong> Constant discovery happens before code execution (like a hexadecimal value for red). Some constants are calculated at run-time during execution but do not alter after they are assigned. Capital-named constants only get used as aliases for "hard-coded" values.
  </div>
  </div>
</details>

---

### What are some excellent rules for variable naming conventions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable name should have a clean, obvious meaning, describing the data it stores, like currentUser or newUser. Unlike functions, where a variable name should always begin with a verb and describe an action.</div><br />
  <div><strong>Technical Response:</strong><br /><br />
  Some good-to-follow rules are: <br /><br />
    <ol>
      <li>Use names that are easy to remember, such as userName or shoppingCart.</li>
      <li>If you do not know what you are doing, avoid abbreviations or short names like a, b, and c (Ninja Coder – is not a great approach to creating code).</li>
      <li>Make your names as descriptive and straightforward as possible. Two instances of bad names are data and value, and such names are nonsensical, and they may only be used in a coding context to make it apparent what data or value the variable refers to in our code.</li>
      <li>Make terms with your team. When a site visitor gets referred to as "user," related variables, currentUser or newUser are utilized rather than currentVisitor or newLadyInRed.</li>
      <li>A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which generally should begin with a verb.</li>
      </ol>
  </div>
  </div>
</details>

---

### What differentiates variable and function naming conventions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which generally should begin with a verb.
  </div>
  </div>
</details>

---

### What is the difference between a global and local variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A global variable is declared outside of a function and can be accessed anywhere in the code, while a local variable is declared inside a function and can only be accessed within that function.
  </div>
  </div>
</details>

---

### What is the scope of a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scope of a variable in JavaScript is the region of the code where the variable is accessible. In general, variables declared inside a function are only accessible within that function, while variables declared outside of a function are accessible throughout the entire scope of the code.
  </div>
  </div>
</details>

---

### What is variable shadowing in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variable shadowing in JavaScript occurs when a local variable with the same name as a higher-level scope variable is declared, thus hiding the outer variable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Variable Shadowing<br /><br />

  <div></div>

```js
let x = 10;

function foo() {
  let x = 20; // local variable shadows the outer variable
  console.log(x); // prints 20
}

foo();
console.log(x); // prints 10
```

In the above example, the variable x is defined in the global scope with a value of 10. Inside the foo function, a local variable with the same name is declared and assigned the value of 20. This variable shadowing causes the outer x variable to be temporarily hidden and inaccessible within the foo function. When the console.log statement is called inside foo, it prints the value of the local x variable, which is 20. However, when the console.log statement is called outside the foo function, it prints the value of the outer x variable, which is 10. This is because the local x variable has a different scope and does not affect the value of the outer x variable.

  </div>
  </div>
</details>

---

### What is the difference between null and undefined in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Null is a value that represents the intentional absence of any object value, while undefined is a value that represents a variable that has been declared, but has not been assigned a value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Variable Shadowing<br /><br />

  <div></div>

```js
let x; // undefined variable
let y = null; // variable explicitly assigned null value
console.log(x); // prints undefined
console.log(y); // prints null
```

In the above example, x is declared but not assigned a value, so it has the value of undefined. On the other hand, y is explicitly assigned the value of null. When console.log is called on x, it prints undefined. When console.log is called on y, it prints null. It's important to note that undefined is also returned by a function when a return statement is not provided or when accessing an object property that doesn't exist.

  </div>
  </div>
</details>

---

### What is the difference between NaN and Infinity in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> NaN is a value that represents a "Not a Number" value, which can occur in math operations that produce undefined or non-numeric results. Infinity is a value that represents a positive or negative infinity, which can occur in math operations that produce very large or very small numbers.
  </div>
  </div>
</details>

---
