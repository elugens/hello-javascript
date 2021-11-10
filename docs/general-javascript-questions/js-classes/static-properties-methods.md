---
title: Static Props / Methods
sidebar_position: 3
---

# Static Props / Methods

**Classes: Static Props / Methods**

<head>
  <title>Static Props / Methods - JavaScript Interview Questions</title>
  <meta charSet="utf-8" />
</head>

### Can you explain how a static properties and methods function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they are called on the class itself. Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed configuration, or any other data you do not need to be replicated across instances. To call a static method or property within another static method of the same class, you can use the “this” keyword.
</div>
  </div>
</details>

:::note
The easiest way to remember how static methods work is to always call the method on the class name directly. Example: Rabbit.methodName - We are not required to declare a new Class Object for static methods or properties (class fields).
:::

Syntax:

```js
Method: static methodName() { ... }

Property: static propertyName [= value]
```

Example: Static Method and Static Property

```js
class User {
  static staticProp = 'I see you...'; // static property
  static staticMethod() {
    // static method

    console.log(this === User);

    console.log(this.staticProp);
  }
}

User.staticMethod(); // true, I see you...

//////////////////////////////////////

// That does the same as assigning it as a property directly:

class User {}

// The value of this in User.staticMethod() call is the class constructor User itself

User.staticMethod = function () {
  console.log(this === User);
};

User.staticMethod(); // true
```

Source: <https://javascript.info/static-properties-methods>

### Are static properties and methods inherited when inheriting from a base class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by default both static properties and methods are inherited.
</div>
  </div>
</details>

Code Example: Static Property and Method Inheritance

```js
class Animal {
  static planet = 'Earth';

  constructor(name, speed) {
    this.speed = speed;

    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;

    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Black Rabbit', 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.
alert(Rabbit.planet); // Earth
```

Source: <https://javascript.info/static-properties-methods>
