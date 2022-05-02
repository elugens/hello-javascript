---
title: Private, Protected Props / Methods
description: Private, Protected Props / Methods are a way to create properties and methods that are only accessible within the class. Frontend Developer Interview Questions
sidebar_position: 4
sidebar_label: Private, Protected Props / Methods
keywords:
  - private properties
  - protected properties
  - private methods
  - private method
  - private props
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - private properties
  - protected properties
  - private methods
  - private method
  - private props
  - interview answers
  - interview questions
---

<head>
  <title>Private, Protected Props / Methods | Frontend Interview</title>
</head>

**Classes: Private, Protected Props / Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain one of the essential principles of object-oriented programming (OOP)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One of the essential principles of object-oriented programming is delimiting (separating) the internal interface from the external one.
</div>
  </div>
</details>

---

### What are the two interfaces into which properties and methods get divided in object-oriented programming (OOP)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In object-oriented programming, properties and methods get split into internal and external interfaces. The internal interface has methods and properties accessible within the class but not outside it, and the external interfaces are properties and methods outside the class but are still accessible.
  </div>
  </div>
</details>

---

### What is the key distinction between private and protected JavaScript fields?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between private and protected fields is that private fields get supported at the language level, and protected fields are not. Protected properties usually get prefixed with an underscore _. That does not get enforced at the language level, but it is a well-known convention among programmers that such properties and methods should not be accessible from the outside. Privates should start with hash symbol #. They are only accessible from inside the class and currently have language-level support (almost a standard). The hash sign (#) is a special sign that the field is private on the language level. We cannot access it from outside or from inheriting classes. We should note that private fields may require a Polyfill to account for older browsers.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example 1: Protected Fields _
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);

//////////////////////////////////////////////////

// Example 2: Private Fields #

class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}
```

  </div>
  </div>
</details>

---

### Is there a way to make a class property read-only in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This implementation is possible by creating a getter and withdrawing the setter from the equation. This approach allows access to the value created at creation time, but we cannot override it after that point.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)
```

  </div>
  </div>
</details>

---

### Are protected fields inherited by sub-classes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if we inherit from parent classes, the inheriting class has access to protected fields. The same rules apply in the inheriting class as they do in the parent.
</div>
  </div>
</details>

---

### Could you perhaps briefly describe private properties and methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Private methods and properties with the private hash # indicator are only accessible within a class. The hash sign # is a special sign that the field is private on the language level, and it is not accessible from the outside or inherited classes. Private and public fields are not incompatible, and it is possible to have both private and public fields simultaneously. Unlike protected ones, private fields get enforced by the JavaScript language.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

let coffeeMachine = new CoffeeMachine();

// cannot access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

  </div>
  </div>
</details>

---
