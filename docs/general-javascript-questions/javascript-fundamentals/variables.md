---
title: JavaScript Variables
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

<head>
  <title>Variables | JavaScript Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: JavaScript Variables**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the definition of a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable is a “named storage” for data. We can use variables to store values, visitor information, and other data.</div>
  </div>
</details>

---

### What are the keywords used to declare a variable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The keywords used to declare a variable include let, const, and var variables.</div><br />
  <div><strong>Technical Response:</strong> There are three variable declaration keywords used in JavaScript. They include let, const, and var variables. In modern JavaScript, development let and const remain recommended to optimize your application.
  </div>
  </div>
</details>

---

### Can you declare multiple variables on one line?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, although the specification does not advise it for readability and consistency reasons.</div><br />
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
  <div><strong>Interview Response:</strong> Yes, declare two variables and copy data into one—better known as copy by reference.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let hello = 'Hello JavaScript!';

let message;

// copy 'Hello world' from hello into the message

message = hello;

// now two variables hold the same data

alert(hello); // Hello world!
alert(message); // Hello world!
```

  </div>
  </div>
</details>

---

### Does JavaScript allow you to change the value of a variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by declaring the variable equals the new value. A const declaration on a variable does not have this capability because it is a constant value.</div>
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
  <div><strong>Interview Response:</strong> No, it results in a syntax error.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let message = 'This';

// repeated 'let' leads to an error

let message = 'That'; // SyntaxError: 'message' has already been declared
```

  </div>
</details>

---

### What are the two limitations of variable names in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The variable must contain only letters, digits, dollar signs, or an underscore. The first character cannot be a number.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, variable names are subject to two limitations. Only letters, numbers, or the symbols $ and an underscore _ may appear in the name, and the first character cannot be a number.
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
alert($ + _); // 3
```

  </div>
  </div>
</details>

---

### Can you explain the CamelCase naming method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CamelCase is a naming method in which a name gets made up of many words combined into a single term. Each word’s initial letter gets capitalized so that the name may be easily read. In JavaScript, we use the lowerCamelCase implementation.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let lowerCamelCase = 'lowerCamelCase';
console.log(lowerCamelCase); // returns lowerCamelCase
```

  </div>
  </div>
</details>

---

### What stylization rule gets used in naming multi-word variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the name contains multiple words, lower camelCase is the standard.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myUserName;
```

  </div>
  </div>
</details>

---

### Does variable case matter in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, variables named <strong>myUser</strong> and <strong>myuser</strong> are two different variables because variables in JavaScript are case-sensitive.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myUser = 'Jack';
let myuser = 'Jane';

console.log(myUser === myuser); // returns false
console.log(myUser); // Jack
console.log(myuser); // Jane
```

  </div>
  </div>
</details>

---

### Are Non-Latin letters allowed in naming variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it is not recommended.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is possible to use any language, including Cyrillic letters or even hieroglyphs, but it remains a lousy approach and not recommended, according to the MDN.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For example, technically, this can be implemented, but it remains a lousy approach and goes against recommendations.<br /><br />

  <div></div>

```js
let имя = '...';

let 我 = '...';
```

  </div>
  </div>
</details>

---

### Is it possible to declare a variable without let, const, or "Old var"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Outside of strict mode, it is possible but not encouraged. It is possible to find it in earlier programs.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Technically, it is achievable but not recommended in modern JavaScript.<br /><br />

  <div></div>

```js
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5
```

  </div>
  </div>
</details>

---

### What is the difference between var and let in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The distinction is that var is function scoped, whereas let is block scoped. If used outside of a function, it is called a global variable.</div><br />
  <div><strong>Technical Response:</strong> We use both var and let for variable declaration in JavaScript. However, the distinction is that var is function scoped and let is block scoped. When compared to let, a variable declared using var is considered defined throughout the program.
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
const myBirthday = '01.09.1969';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

  </div>
  </div>
</details>

---

### When should you use a constant as an alias in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For constant variable values that are difficult to memorize, we use aliases. Capital letters and underscores should get used in this case.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Hexadecimal Colors<br /><br />

  <div></div>

```js
const COLOR_RED = '#F00';

const COLOR_GREEN = '#0F0';

const COLOR_BLUE = '#00F';

const COLOR_ORANGE = '#FF7F00';

// ...when we need to pick a color

let color = COLOR_ORANGE;

alert(color); // #FF7F00
```

  </div>
  </div>
</details>

---

### What are the advantages of aliasing a constant in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Aliases are easy to remember than numeric identifiers, like hexadecimal numbers.</div>
  </div>
</details>

---

### When should a constant be named in caps, and when should it be named in the usual way?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Capital-named constants only get used as aliases for “hard-coded” values.</div><br />
  <div><strong>Technical Response:</strong> Constant discovery happens before code execution (like a hexadecimal value for red). Some constants are calculated at run-time during execution but do not alter after they are assigned. Capital-named constants only get used as aliases for "hard-coded" values.
  </div>
  </div>
</details>

---

### What are some excellent rules for variable naming conventions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A variable name should have a clean, obvious meaning, describing the data it stores, like currentUser or newUser. Unlike functions, a variable name should always be camelCase and begin with a noun</div><br />
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
  <div><strong>Interview Response:</strong> A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which generally should begin with a verb.</div>
  </div>
</details>

---
