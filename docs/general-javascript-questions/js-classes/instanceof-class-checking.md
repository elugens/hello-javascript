---
title: Class Checking "instanceof"
description: Class Checking instanceof is the syntax for checking if an object is an instance of a class. The instanceof allows us to check if an object belongs to a  class.
sidebar_position: 6
sidebar_label: Class Checking
keywords:
  - class checking
  - instanceof
  - instanceOf operator
  - javascript
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
  - class checking
  - instanceof
  - instanceOf operator
  - interview answers
  - interview questions
---

<head>
  <title>Class Checking instanceof | Frontend Phone Interview Answers</title>
</head>

**Classes: Class Checking**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does the instanceof operator do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The instanceof operator allows us to check whether an object belongs to a certain class. It also takes inheritance into account. Such a check may be necessary in many cases, and it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert(rabbit instanceof Rabbit); // true

// It also works with constructor functions:

// instead of class
function Rabbit() {}

alert(new Rabbit() instanceof Rabbit); // true

// And with built-in classes like Array:

let arr = [1, 2, 3];
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true
```

  </div>
  </div>
</details>

---

### Is an Array an instance of an Object, in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, an Array belongs to the Object class, because Array prototypically inherits from Object. At the base of JavaScript, all native objects like Array and even Function inherit from the Object class. The instanceof operator examines the prototype chain to render a result as true or false.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(Array instanceof Object); // true
console.log(Function instanceof Object); // true
```

  </div>
  </div>
</details>

---

### Is it possible to make a custom obj instanceof Class algorithm?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can create a rough representation of the algorithm using a static method of Symbol.hasInstance, then just call it. It should return true or false as a result, by default it should be set to true. Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called
```

  </div>
  </div>
</details>

---

### In plain words, explain what happens with an instanceof class check?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain. If any answer is true, return true. If it does not reach true as a result and reaches the end of the chain, return false. The Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match! return true)
```

  </div>
  </div>
</details>

---

### We already know that plain objects are converted to string as [object Object]. Is there a way to create a custom toString result for our custom objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the behavior of Object toString can be customized using a special object property Symbol.toStringTag. The Symbol.toStringTag also works for environment-specific objects like the window and XMLHttpRequest objects.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  [Symbol.toStringTag]: 'User',
};

alert({}.toString.call(user)); // [object User]

// toStringTag for the environment-specific object and class:
alert(window[Symbol.toStringTag]); // Window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

alert({}.toString.call(window)); // [object Window]
alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]
```

  </div>
  </div>
</details>

---
