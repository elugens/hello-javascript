---
title: Object Methods
sidebar_position: 4
---

# Object Methods - "This"

**Objects the Basics: OBJECT METHOD, “THIS”**

### What is a function that is a property of an object called?

**Interview Answer:** A function that is a property of an object is called its method.

```js
let user = {
  name: 'John',

  age: 30,
};

// Here sayHi is a method of the object user

user.sayHi = function () {
  alert('Hello, JavaScript');
};

user.sayHi(); // Hello, JavaScript
```

Source: <https://javascript.info/object-methods#method-examples>

### What is the programming paradigm that uses objects to represent entities?

**Interview Answer:** Object-oriented Programming or OOP, is the programming paradigm that uses objects to represent entities.

Source: <https://javascript.info/object-methods>

### What does the “this” keyword refer to in JavaScript?

**Answer:** The JavaScript this keyword refers to the object that it belongs to. It has different values depending on where it is used.

- In a method, this refers to the owner object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.
- Arrow functions have no this.

Source: <https://www.w3schools.com/js/js_this.asp>

### What is one of the advantages of using the “this” keyword in an object?

**Answer:** The “this” keyword holds a reference to the object and in return removes any effort to nullify it later in the code.

**Example:** “THIS” refers to the object

```js
let user = {
  name: 'John',

  age: 30,

  sayHi() {
    alert(this.name); // this works as intended
  },
};

let admin = user;

user = null; // attempt to override the object fails
admin.sayHi(); // alerts John
```

**Example:** Fails without the “THIS” keyword

```js
let user = {
  name: 'John',

  age: 30,

  sayHi() {
    alert(user.name); // leads to an error
  },
};

let admin = user;

user = null; // overwrite to make things obvious
admin.sayHi(); // TypeError: Cannot read property 'name' of null
```

Source: <https://javascript.info/object-methods#this-in-methods>

### What is the difference between “THIS” in a function in (strict mode) and (non-strict mode)?

**Answer:** In strict mode, “this” returns undefined and in non-strict mode it returns global window.

Example: Strict Mode

```js
'use strict';

function sayHi() {

  alert(this);

}

sayHi(); // returns undefined


Example: Non-strict Mode

function sayHi() {

  alert(this);

}

sayHi(); // returns global window
```

Source: <https://javascript.info/object-methods#this-is-not-bound>

### What are the consequences of unbound “THIS”?

**Answer:** In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”. The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.

Source: <https://javascript.info/object-methods#this-is-not-bound>

### Since arrow functions have no “This”, What is the outcome when the “THIS” keyword is used in an arrow function?

**Answer:** The outcome in an arrow function is a return of undefined. This is because there is no access to the global window.

Example: Regular Function

```js
const brunch = {

   food: 'Dim sum',

   beverage: 'Jasmine tea',

   order: function () {

      return `I'll have the ${this.food} with ${this.beverage} please.`;

      },
};

// the console log returns "I'll have the Dim sum with Jasmine tea please."

console.log(brunch.order());


Example: Arrow Function

const brunch = {

  food: 'Dim sum',

  beverage: 'Jasmine tea',

  order: () => {

      return `I'll have the ${this.food} with ${this.beverage} please.`;

  },

};

// the console log returns "I'll have the undefined with undefined please."

console.log(brunch.order());


Proof that “THIS” refers to the global window object:

window.food = 'pizza'; // global object variables

window.beverage = 'beer';

const brunch = {

  food: 'Dim sum',

  beverage: 'Jasmine tea',

  order: () => {

      return `I'll have the ${this.food} with ${this.beverage} please.`;

  },

};

// the console log returns "I'll have the pizza with beer please."

console.log(brunch.order());

```

Source: <https://javascript.info/object-methods#arrow-functions-have-no-this>
