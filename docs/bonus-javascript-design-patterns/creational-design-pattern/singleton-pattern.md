---
title: Singleton Design Pattern
description: Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
sidebar_position: 6
sidebar_label: Singleton
---

**Creational: Singleton Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the singleton pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Singleton pattern is a design principle that restricts a class's instantiation to one object. That's also useful when just one object is required to coordinate system-wide actions. The Singleton pattern is traditionally implemented by creating a class with a method that creates a new instance of the class even if one doesn't already exist. If an instance of the object already exists, it simply returns a pointer to it.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-singleton.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Singleton** -- In example code: _MySingleton_

- It returns an instance via a constructor.
- In charge of creating and managing the instance object.

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// ES2015+ keywords/syntax used: const, let, arrow function syntax
//                  class, constructor, import, export

// Instance stores a reference to the Singleton
let instance;

// Private methods and variables
const privateMethod = () => {
    console.log('I am private');
  };
const privateVariable = 'Im also private';
const randomNumber = Math.random();

// Singleton
class MySingleton {
  // Get the Singleton instance if one exists
  // or create one if it doesn't
  constructor() {
    if (!instance) {
      // Public property
      this.publicProperty = 'I am also public';
      instance = this;
    }

    return instance;
  }

  // Public methods
  publicMethod() {
    console.log('The public can see me!');
  }

  getRandomNumber() {
    return randomNumber;
  }
}
// [ES2015+] Default export module, without name
export default MySingleton;


// Instance stores a reference to the Singleton
let instance;

// Singleton
class MyBadSingleton {
    // Always create a new Singleton instance
    constructor() {
        this.randomNumber = Math.random();
        instance = this;

        return instance;
    }

    getRandomNumber() {
        return this.randomNumber;
    }
}

export default MyBadSingleton;

// Usage:
import MySingleton from './MySingleton';
import MyBadSingleton from './MyBadSingleton';

const singleA = new MySingleton();
const singleB = new MySingleton();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

const badSingleA = new MyBadSingleton();
const badSingleB = new MyBadSingleton();

console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber()); // true

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.
```

  </div>

  </div>
</details>

---

### What pattern family does the Singleton belong to?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The singleton pattern is a type of Creational design pattern.
    </div>
  </div>
</details>

---

### What distinguishes Singletons from static classes or objects?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Singletons varies from static classes (or objects) in that their initialization can be delayed, typically because they require information that may not be available at the time of initialization. They don't make it easy for code that isn't aware of a previous reference to them to find them. This is because a Singleton returns a structure rather than an object or a "class." Consider how closure variables aren't closures - the closure is the function scope that provides the closure.
    </div>

  </div>
</details>

---

### What are some of the advantages of using the Singleton Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Singleton Pattern
    </div>
    <br />
    <div></div>

- You can be certain that a class has only one instance.
- You are granted global access to that instance.
- The singleton object is only initialized the first time it is requested.

<br />
  </div>
</details>

---

### What are some of the Singleton Pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Restricting the instantiation to just one instance could save a lot of memory space. Instead of setting up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are considered an anti-pattern and can (or should) be avoided in JavaScript.
    </div>
    <br />
    <div></div>

- Infringes on the Single Responsibility Principle. At the same time, the pattern solves two problems.
- The Singleton pattern can hide bad design, such as when application components know too much about each other.
- In a multithreaded environment, the pattern must be treated differently so that multiple threads do not create a singleton object multiple times.
- Unit testing the Singleton's client code may be difficult because many test frameworks rely on inheritance when producing mock objects. This is relative to the constructor of the singleton class being private and overriding static methods is impossible in most languages, you'll need to come up with a unique way to mock the Singleton. Or don't write the tests at all. Alternatively, avoid using the Singleton pattern.

<br />
  </div>
</details>

---
