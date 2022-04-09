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

### Can you explain the singleton design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-singleton.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Singleton** -- In example code: _MySingleton_

- Uses a constructor to return an instance
- responsible for creating and managing the instance object.

</div><br />
  <div><strong className="codeExample">Code Example:</strong> Modern ES2015+<br /><br />

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

### In what pattern category does the Singleton pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The singleton pattern belongs to the Creational design pattern category.
    </div>
  </div>
</details>

---

### How do Singletons differ from static classes or objects?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> : Singletons differ from static classes (or objects) as we can delay their initialization, generally because they require some information that may not be available during initialization time. They don't provide a way for code that is unaware of a previous reference to them to easily retrieve them. This is because it is neither the object nor "class" that's returned by a Singleton, it's a structure. Think of how closured variables aren't actually closures - the function scope that provides the closure is the closure.
    </div>

  </div>
</details>

---

### What are some of the benefits of the Singleton Pattern?

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

- You can be sure that a class has only a single instance.
- You gain a global access point to that instance
- The singleton object is initialized only when it’s requested for the first time.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Singleton Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are considered an anti-pattern, and can (or... should) be avoided in JavaScript.
    </div>
    <br />
    <div></div>

- Violates the Single Responsibility Principle. The pattern solves two problems at the time.
- The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
- The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
- It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
