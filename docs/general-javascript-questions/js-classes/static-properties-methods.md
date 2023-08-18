---
title: Static Properties / Methods
description: Static Properties / Methods are a way to create properties and methods that are shared by all instances of a class. JavaScript Frontend Interview Questions
sidebar_position: 3
sidebar_label: Static Props / Methods
keywords:
  - static properties
  - static methods
  - javascript static props
  - javascript static methods
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
  - static properties
  - static methods
  - javascript static props
  - javascript static methods
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StaticPropsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Static Properties / Methods | JavaScript Interview Answers</title>
</head>

**Classes: Static Props / Methods**

---

<AdSense />

---

<CloseAllAnswers />

---

### Can you explain how static properties and methods function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The static keyword defines a static method or property for a class. Neither static methods nor static properties get called on class instances, and instead, they get called on the class itself. Static methods are often utility functions, such as functions to create or clone objects. In contrast, static properties are helpful for caches, fixed-configuration, or any other data you do not need to get replicated across instances. To call a static method or property within another static method of the same class, you can use the “this” keyword.
</div><br />
  <div>
  
  <strong>Syntax:</strong><br /><br />

  <div></div>

```js
Method: static methodName() { ... }

Property: static propertyName [= value]
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Static Method and Static Property<br /><br />

  <div></div>

```js
class User {
  static staticProp = 'I see you...'; // static property
  static staticMethod() {
    // static method
    console.log(this === User);
    console.log(this.staticProp);
  }
}

User.staticMethod(); // true, I see you...

//////////////////////////////////////

// That does the same as assigning it as a property directly:

class User {}

// The value of this in User.staticMethod() call is the class constructor User itself
User.staticMethod = function () {
  console.log(this === User);
};

User.staticMethod(); // true
```

---

:::note
The easiest way to remember how static methods work is to always call the method on the class name directly. Example: Rabbit.methodName - We are not required to declare a new Class Object for static methods or properties (class fields).
:::

  </div>
  </div>
</details>

---

### When inheriting a base class, are static properties and methods inherited?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, both static properties and methods get inherited by default.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Static Property and Method Inheritance<br /><br />

  <div></div>

```js
class Animal {
  static planet = 'Earth';

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Black Rabbit', 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

console.log(Rabbit.planet); // Earth
```

  </div>
  </div>
</details>

---
