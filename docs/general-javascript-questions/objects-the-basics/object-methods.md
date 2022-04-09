---
title: JavaScript Object Methods
description: Object Methods are methods that are attached to objects. They can be called on objects.
sidebar_position: 4
sidebar_label: Object Methods
---

**Objects the Basics: Object Methods - "This"**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a function that is a property of an object called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function that is a property of an object is called its method.
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
  alert('Hello, JavaScript');
};

user.sayHi(); // Hello, JavaScript
```

  </div>
  </div>
</details>

---

### What is the programming paradigm that uses objects to represent entities?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object-oriented Programming or OOP, is the programming paradigm that uses objects to represent entities.
</div>
  </div>
</details>

---

### What does the “this” keyword refer to in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript this keyword refers to the object that it belongs to. It has different values depending on where it is used.<br /><br />
  <ol>
    <li>In a method, this refers to the owner object.</li>
    <li>Alone, this refers to the global object.</li>
    <li>In a function, this refers to the global object.</li>
    <li>In a function, in strict mode, this is undefined.</li>
    <li>In an event, this refers to the element that received the event.</li>
    <li>Methods like call(), and apply() can refer this to any object.</li>
    <li>Arrow functions have no this.</li>
  </ol>
</div>
  </div>
</details>

---

### What is one of the advantages of using the “this” keyword in an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “this” keyword holds a reference to the object and in return removes any effort to nullify it later in the code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> “THIS” refers to the object<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    alert(this.name); // this works as intended
  },
};

let admin = user;
user = null; // attempt to override the object fails

admin.sayHi(); // alerts John
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Fails without the “THIS” keyword<br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    alert(user.name); // leads to an error
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

### What is the difference between “THIS” in a function in (strict mode) and (non-strict mode)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In strict mode, “this” returns undefined and in non-strict mode it returns global window.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Strict Mode<br /><br />

  <div></div>

```js
'use strict';

function sayHi() {
  alert(this);
}

sayHi(); // returns undefined
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Non-strict Mode<br /><br />

  <div></div>

```js
function sayHi() {
  alert(this);
}

sayHi(); // returns global window object
```

  </div>
  </div>
</details>

---

### What are the consequences of unbound “THIS”?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”. The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Unbound "this"<br /><br />

  <div></div>

```js
// non-strict mode
const author = {
  name: 'JavaScript',
  hello() {
    console.log(this.name);
  },
};

const hello = author.hello();
// hello is unbound, this refers to nothing in the global scope
// or window/global in non-strict mode
hello();
```

  </div>
  </div>
</details>

---

### Since arrow functions have no “This”, What is the outcome when the “THIS” keyword is used in an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The outcome in an arrow function is a return of undefined. This is because there is no access to the global window.
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
