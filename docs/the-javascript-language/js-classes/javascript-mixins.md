---
title: Mixins
sidebar_position: 6
---

# JavaScript Mixins - Q&A

**Classes: MIXINS**

### What is a Mixin in JavaScript and why do you use them instead of a class inheritance?

**Interview Answer:** A mixin is a class containing methods that can be used by other classes without a need to inherit from it. In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.

**Note:** In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class. That is a limiting factor in class inheritance that may require the use of a mixin.

**Technical Answer:** In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class. That is a limiting factor in class inheritance that may require the use of a mixin. A mixin is a class containing methods that can be used by other classes without a need to inherit from it. In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.

Code Example:

// mixin

let sayHiMixin = {

    sayHi() {

      alert(`Hello ${this.name}`);

    },

    sayBye() {

      alert(`Bye ${this.name}`);

    }

};

// usage:

class User {

    constructor(name) {

      this.name = name;

    }

}

// copy the methods

Object.assign(User.prototype, sayHiMixin);

// now User can say hi

new User("Dude").sayHi(); // Hello Dude!

Source: <https://javascript.info/mixins#a-mixin-example>

### What is the simplest way to create a mixin in JavaScript?

**Answer:** The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class. There is no inheritance, but a simple method copying.

Example:

```js
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin = {
  sayHi() {
    // call parent method

    sayMixin.say(`Hello, ${this.name}!`); // (\*)
  },

  sayBye() {
    sayMixin.say(`Bye, ${this.name}!`); // (\*)
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods

Object.assign(User.prototype, sayHiMixin);

// now User can say hi

new User('Dude').sayHi(); // Hello, Dude!
new User('Jane').sayBye(); // Bye, Jane!
```

Source: <https://javascript.info/mixins#a-mixin-example>

If you are interested in learning event mixins go to: <https://javascript.info/mixins#eventmixin>
