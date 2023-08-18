---
title: JavaScript Object Methods
description: Object Methods are methods that are attached to objects. They can be called on objects. Frontend Phone Interview Questions and Answers
sidebar_position: 4
sidebar_label: Object Methods
keywords:
  - object methods
  - object method
  - javascript object methods
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
  - object methods
  - object method
  - javascript object methods
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectMethodsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Object Methods | JavaScript Frontend Phone Interview Answers</title>
</head>

**Objects the Basics: Object Methods - "This"**

---

<AdSense />

---

<CloseAllAnswers />

### What is a function that is a property of an object called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function that is a property of an object is called a "method" in JavaScript programming. Methods are used to perform actions or manipulate object data.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
};

// Here sayHi is a method of the object user
user.sayHi = function () {
  console.log('Hello, JavaScript');
};

user.sayHi(); // Hello, JavaScript
```

  </div>
  </div>
</details>

---

### What is the difference between a regular function and an object method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, regular functions are standalone, while object methods are functions attached to objects. Methods have access to object properties through the 'this' keyword.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Regular Function
function greet() {
  console.log('Hello!');
}

greet(); // Invoking the regular function

// Object with a Method
const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name + '!');
  }
};

person.greet(); // Invoking the object method
```

  </div>
  </div>
</details>

---

### What is the programming paradigm that uses objects to represent entities?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The programming paradigm that uses objects to represent entities is called Object-Oriented Programming (OOP). It emphasizes encapsulation, inheritance, and polymorphism for code organization.
</div>
  </div>
</details>

---

### What does the "this" keyword refer to in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "this" keyword in JavaScript refers to the object to which it belongs, and it has varying values depending on where it is used.<br /><br />
  <ol>
    <li>In a method, this refers to the owner object.</li>
    <li>Alone, this refers to the global object.</li>
    <li>In a function, this refers to the global object.</li>
    <li>In strict mode, this is undefined.</li>
    <li>In an event, this refers to the element that received the event.</li>
    <li>Methods like call() and apply() can refer "this" to any object.</li>
    <li>Arrow functions have no this.</li>
  </ol>
</div>
  </div>
</details>

---

### What is one of the advantages of using the "this" keyword in an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "this" keyword provides object context, allowing access to its properties and methods, promoting code reusability, and easier maintenance. The "this" keyword holds a reference to the object and, in return, removes any effort to nullify it later in the code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> “THIS” refers to the object<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(this.name); // this works as intended
  },
};

let admin = user;
user = null; // attempt to override the object fails

admin.sayHi(); // console.logs John
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Fails without the “THIS” keyword<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(user.name); // leads to an error
  },
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
```

  </div>
  </div>
</details>

---

### What is the difference between "THIS" in a function in (strict mode) and (non-strict mode)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In non-strict mode, the ‘this’ keyword in a function refers to the global object if the function is called without being accessed on anything. In strict mode, the ‘this’ keyword in a function is undefined if the function is called without being accessed on anything.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> In non-strict mode, the following code will print "window"<br /><br />

  <div></div>

```js
function myFunction() {
  console.log(this);
}

myFunction();
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Non-strict Mode<br /><br />

  <div></div>

```js
"use strict";

function myFunction() {
  console.log(this);
}

myFunction();
```

  </div>
  </div>
</details>

---

### What are the consequences of unbound "THIS"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unbound this in JavaScript leads to the loss of context, resulting in runtime errors or unexpected behavior when attempting to access properties or methods that rely on the proper binding of this.
</div><br />
  <div><strong>Interview Response:</strong> In JavaScript, the “this” keyword is free. Its value is evaluated at run-time and does not depend on where the method was defined. But instead, the object that precedes the dot. The concept of run-time evaluated "this" has both pluses and minuses. On the one hand, a function can get reused for different objects, and on the other hand, greater flexibility creates more possibilities for mistakes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Unbound "this"<br /><br />

  <div></div>

```js
function myFunction() {
  console.log(this); // 'this' refers to the global object (e.g., Window in a browser)

  this.myProperty = "Hello"; // Adding a property to the global object

  function innerFunction() {
    console.log(this.myProperty); // 'this' is unbound, so 'myProperty' is undefined
  }

  innerFunction();
}

myFunction();
```

  </div>
  </div>
</details>

---

### Since arrow functions have no "This". What is the outcome when the "THIS" keyword gets used in an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The outcome in an arrow function is a return of undefined. This outcome is because there is no access to the global window.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Regular Function<br /><br />

  <div></div>

```js
const brunch = {
  food: 'Dim sum',
  beverage: 'Jasmine tea',
  order: function () {
    return `I'll have the ${this.food} with ${this.beverage} please.`;
  },
};

// the console log returns "I'll have the Dim sum with Jasmine tea please."
console.log(brunch.order());
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Arrow Function<br /><br />

  <div></div>

```js
const brunch = {
  food: 'Dim sum',
  beverage: 'Jasmine tea',
  order: () => {
    return `I'll have the ${this.food} with ${this.beverage} please.`;
  },
};

// the console log returns "I'll have the undefined with undefined please."
console.log(brunch.order());
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Proof that “THIS” refers to the global window object.<br /><br />

  <div></div>

```js
window.food = 'pizza'; // global object variables
window.beverage = 'beer';

const brunch = {
  food: 'Dim sum',
  beverage: 'Jasmine tea',
  order: () => {
    return `I'll have the ${this.food} with ${this.beverage} please.`;
  },
};

// the console log returns "I'll have the pizza with beer please."
console.log(brunch.order());
```

  </div>
  </div>
</details>

---

### How can you define an object method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can define an object method by assigning a function to a property within an object literal or using the ES6 method shorthand syntax.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myObject = {
  myMethod: function() {
    console.log("This is a method.");
  }
};

// Logs "This is a method."
myObject.myMethod(); // Calling the object method
```

  </div>
  </div>
</details>

---

### Can you use the same method for multiple objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript you can use the same method for multiple objects by assigning the method to their prototype or creating a shared function and referencing it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Method definition
function myMethod() {
  console.log("This is a shared method.");
}

// Object creation
const obj1 = {};
const obj2 = {};

// Assigning method to objects
obj1.myMethod = myMethod;
obj2.myMethod = myMethod;

// Calling the shared method on objects
obj1.myMethod(); // Prints "This is a shared method."
obj2.myMethod(); // Prints "This is a shared method."
```

  </div>
  </div>
</details>

---

### What happens if you call an object method on an object that does not have that method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you call a method on an object that doesn't have it, a TypeError is thrown, stating that the method is not a function.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const obj1 = {
  myMethod: function() {
    console.log("This is obj1's method.");
  }
};

const obj2 = {};

obj1.myMethod(); // Calling method on obj1
obj2.myMethod(); // Calling method on obj2 (which does not have the method)
```

  </div>
  </div>
</details>

---

### What is the difference between a static method and an instance method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a static method is associated with a class and called on the class itself, while an instance method is associated with an object instance and called on that instance.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {
  static staticMethod() {
    console.log('This is a static method.');
  }

  instanceMethod() {
    console.log('This is an instance method.');
  }
}

MyClass.staticMethod(); // "This is a static method."

let instance = new MyClass();
instance.instanceMethod(); // "This is an instance method."
```

  </div>
  </div>
</details>

---

### How can you call a static method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To call a static method in JavaScript, you reference the class itself followed by the static method name, separated by a period. No instance is required.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {
  static myStaticMethod() {
    console.log('Hello from the static method!');
  }
}

MyClass.myStaticMethod(); // Outputs: "Hello from the static method!"
```

  </div>
  </div>
</details>

---
