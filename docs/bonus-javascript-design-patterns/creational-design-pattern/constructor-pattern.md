---
title: Constructor Design Pattern
description: The constructor pattern is a class or function-based pattern used in the creation of specific types of objects. JavaScript interview questions and answers.
sidebar_position: 4
sidebar_label: Constructor
---

**Creational: Constructor Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the constructor design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The constructor pattern is a design pattern that uses a class or function to create unique types of objects. A constructor is a one-of-a-kind method for initializing a newly created object after allocated memory.<br/><br/>Constructor patterns are among the most fundamental, extensively used, and modern JavaScript patterns. The objective of this pattern, as hinted by the name, is to facilitate constructor creation.
    </div><br />
  </div>
</details>

---

### In the constructor pattern, what kinds of objects can we implement?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The two types of objects used in the constructor pattern include classes and traditional functions.
    </div><br />

  <div><strong className="codeExample">Code Example:</strong> Traditional "function" based syntax<br /><br />

  <div></div>

```js
//  a) Traditional "function" based syntax

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };
}
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example:</strong> ES6 "class" syntax<br /><br />

  <div></div>

```js
// ES6 "class" syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
      console.log(`${this.name} is ${this.age} years old!`);
    };
  }
}

//Creating new instance of Person
const personOne = new Person('John', 20);
personOne.getDetails();

// Output - “John is 20 years old!”
```

  </div>

  </div>
</details>

---

### In what pattern category does the Constructor pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Constructor pattern belongs to the creational design pattern category.
    </div>
  </div>
</details>

---

### What ES6 object do we use in the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The ES6 object used in the constructor pattern is a class object.
    </div>
  </div>
</details>

---

### When should you use the constructor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can use the Constructor Pattern when you want to create multiple instances of the same object. The constructor pattern is typical in libraries and plugins.
    </div>
  </div>
</details>

---

### What are some of the constructor pattern and methods issues?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> When building constructors, you should be aware of object duplication resulting in a new instance. The repetition can be caused by using methods when building prototypes and returning false results when checking instance equality.
    </div><br />

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Phone(brand, model, countryDesignedIn, countryMadein) {
  this.brand = brand;
  this.model = model;
  this.countryDesignedIn = countryDesignedIn;
  this.countryMadein = countryMadein;

  this.toString = function () {
    return `${this.brand} ${this.model} manufactured in ${this.countryMadein}`;
  };
}

Phone.prototype.toStringAlt = function () {
  return `${this.brand} ${this.model} designed in ${this.countryDesignedIn}`;
};

yourPhone = new Phone('Nokia', '3310', 'Denmark', 'Denmark');
myPhone = new Phone('iPhone', '7', 'USA', 'China');

// Test if toString method works
console.log(yourPhone.toString()); // Output: Nokia 3310 manufactured in Denmark
console.log(myPhone.toString()); // Output: iPhone 7 manufactured in China

// Test if toString function are not duplicated (let's say the same object)
console.log(
  `toString functions are the same object: ${
    yourPhone.toString === myPhone.toString
  }`
);

// Test if toStringAlt method works
console.log(yourPhone.toStringAlt()); // Output: Nokia 3310 designed in Denmark
console.log(myPhone.toStringAlt()); // Output: iPhone 7 designed in USA

// Test if toStringAlt function are not duplicated (let's say the same object)
console.log(
  `toStringAlt functions are the same object: ${
    yourPhone.toStringAlt === myPhone.toStringAlt
  }`
);
// Output: toStringAlt functions are the same object: true

// Checking Instance Equality
console.log(yourPhone === myPhone); // false
```

  </div>

  </div>
</details>

---

### What differentiates the constructor pattern from the prototype pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The primary difference between the constructor and prototype pattern is the reusability of components.
    </div><br />
    <strong>Constructor Pattern:</strong><br />
    When you create a new constructor, it creates a new instance of everything, and any changes made to the instantiated object do not affect the others.<br /><br />
    <strong>Prototype Pattern:</strong><br />
    Creating a new object using the prototype reuses the logic, and any change to the prototype chain affects everyone else.
    <div>
    </div>
  </div>
</details>
