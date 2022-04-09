---
title: Constructor Design Pattern
description: The constructor pattern is a class or function-based pattern used in the creation of specific types of objects.
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
      <strong>Interview Response:</strong> The constructor pattern is a class or function-based pattern used in the creation of specific types of objects. A constructor is a special method used to initialize a newly created object once the memory has been allocated for it. The constructor pattern is one of the most simple, popular, and modern JS design patterns. As suggested by the name, the purpose of this pattern is to aid constructor creation.
    </div><br />
    <div>
      <strong>Technical Response:</strong> “A constructor is a special method used to initialize a newly created object once the memory has been allocated for it. In JavaScript, as almost everything is an object, we’re most often interested in object constructors.” – Addy<br/>
    </div><br />

  </div>
</details>

---

### What are the two types of JavaScript objects used in the creational constructor pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The two types of objects used in the constructor pattern including classes and the traditional functions.
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

### In what pattern category does the Constructor pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Constructor pattern belongs to the Creational design pattern category.
    </div>
  </div>
</details>

---

### What ES6 object is used in the constructor pattern?

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

### Why would you want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The reason is that that constructor functions are limited in their control over the overall creation process and sometimes you will need to hand over control to a factory that has broader knowledge. This includes scenarios in which the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices. If your application needs more control over the object creation process, we should consider using a Factory.
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
      <strong>Interview Response:</strong> You can use the Constructor Pattern when you want to create multiple instances of the same object. The constructor pattern is commonly used in libraries and plugins.
    </div>
  </div>
</details>

---

### What are some of the issues related to the constructor pattern and methods?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> When building constructors, you should be aware of object duplication resulting in a new instance. This can be caused by using methods when you are building prototypes and return false results when checking instance equality.
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

### What is the difference between the constructor and prototype pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The major difference between the constructor and prototype pattern is reusability of components.
    </div><br />
    <strong>Constructor Pattern:</strong><br />
    When you create a new constructor you will create a new instance of everything and importantly any change made to the instances will only affect them and not the others.<br /><br />
    <strong>Prototype Pattern:</strong><br />
    When you create a new object using the prototype it will reuse the logic and any change to the prototype chain will affect everyone else.
    <div>
    </div>
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
