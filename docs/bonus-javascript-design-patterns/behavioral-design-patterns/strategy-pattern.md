---
title: Strategy Design Pattern
description: The strategy is a behavioral pattern that allows an object to shift its way of responding to changes in its internal state.
sidebar_position: 10
sidebar_label: Strategy
keywords:
  - strategy pattern
  - strategy design pattern
  - design patterns
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
  - strategy pattern
  - strategy design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StrategySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Strategy Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Strategy Pattern**

<CloseAllAnswers />

---

### What is the Strategy Design Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The strategy design pattern is a behavioral pattern that allows for interchangeable algorithms by encapsulating them in separate objects and selecting one dynamically.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Strategy pattern encapsulates various algorithms (or strategies) for a specific task. It enables a method to be replaced at runtime with another method (Strategy) without the client knowing it. The Strategy pattern is essentially a collection of interchangeable algorithms.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-Strategy.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Context** -- example code: Shipping

- keeps track of the current Strategy object
- provides an interface by which clients can request Strategy computations
- enables clients to adjust their strategy

**Strategy** -- example code: UPS, USPS, FedEx

- implements the algorithm using the Strategy interface

<br/>

```js
let Shipping = function () {
  this.company = '';
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },

  calculate: function (package) {
    return this.company.calculate(package);
  },
};

let UPS = function () {
  this.calculate = function (package) {
    // calculations...
    return '$45.95';
  };
};

let USPS = function () {
  this.calculate = function (package) {
    // calculations...
    return '$39.40';
  };
};

let Fedex = function () {
  this.calculate = function (package) {
    // calculations...
    return '$43.20';
  };
};

function run() {
  let package = { from: '76712', to: '10012', weigth: 'lkg' };

  // the 3 strategies

  let ups = new UPS();
  let usps = new USPS();
  let fedex = new Fedex();

  let shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log('UPS Strategy: ' + shipping.calculate(package));
  shipping.setStrategy(usps);
  console.log('USPS Strategy: ' + shipping.calculate(package));
  shipping.setStrategy(fedex);
  console.log('Fedex Strategy: ' + shipping.calculate(package));
}

run();

/*

OUTPUT:

UPS Strategy: $45.95
USPS Strategy: $39.40
Fedex Strategy: $43.20

*/
```

</div>
 </div>

</details>

---

### The Strategy pattern belongs to which pattern group?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Strategy pattern belongs to the behavioral pattern group in JavaScript, which focuses on communication and interaction between objects and classes.
    </div>
  </div>
</details>

---

### When should the JavaScript Strategy Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The JavaScript Strategy Pattern is beneficial when different variations of an algorithm exist or when an algorithm may change dynamically at runtime.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The JavaScript Strategy Pattern should be used when you need to dynamically switch between multiple algorithms or behaviors at runtime, while keeping the code flexible and maintainable.<br/><br/><strong>Strategy Pattern Use-Cases:</strong>
    </div>
    <br />
    <div></div>

- When you need to employ several algorithms with varying versions, you must construct a concrete class (this may include one or more functions) to implement your algorithm.
- When there are conditional statements around by several connected algorithms
- When the majority of your objects or classes exhibit similar behaviors

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Strategy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some advantages of using the Strategy pattern in JavaScript include increased flexibility, maintainability, and code reuse, as well as improved encapsulation and separation of concerns.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Strategy Pattern
    </div>
    <br />
    <div></div>

- At runtime, you can alter the algorithms utilized within an object.
- You can separate an algorithm's implementation specifics from the code that utilizes it.
- It use the composition in place of inheritance
- The principle of open/closed. You may implement new tactics without changing the context.

<br />
  </div>
</details>

---

### What's a disadvantage of the Strategy Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It can over complicate the code if used for only slightly different algorithms or if overused.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Some drawbacks of the Strategy pattern in JavaScript include increased complexity and overhead, as well as potential performance issues when switching between strategies frequently or with large datasets.<br/><br/><strong>Drawbacks of the Strategy Pattern:</strong>
    </div>
    <br />
    <div></div>

- If you only have a few algorithms that seldom change, there's no point in complicating the program with new classes and interfaces that come with the pattern.
- Clients must understand the distinctions between tactics to choose the best one.
- Many current programming languages feature functional types, which allow you to implement different variants of an algorithm within a collection of anonymous functions. You may then utilize these methods the same way you used Strategy objects, but without cluttering your code with unnecessary classes and interfaces.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Strategy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Strategy pattern in JavaScript include using conditionals, function composition, or the Factory pattern to achieve similar functionality with less overhead.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Strategy Pattern.
    </div>
    <br />
    <div></div>

- If you only have a few algorithms that seldom change, there's no point in complicating the program with new classes and interfaces that come with the pattern.
- Clients must understand the distinctions between tactics to choose the best one.
- Many current programming languages feature functional types, which allow you to implement different variants of an algorithm within a collection of anonymous functions. You may then utilize these methods the same way you used Strategy objects, but without cluttering your code with unnecessary classes and interfaces.

<br />
  </div>
</details>

---

### What are the main components of the Strategy Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It mainly consists of the Context, Strategy Abstract, and a set of Concrete Strategies.
  </div>
  </div>
</details>

---

### How does the Context work in the Strategy Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Context maintains a reference to a Strategy object and delegates it to execute the required algorithm.
  </div>
  </div>
</details>

---

### Can you explain Concrete Strategies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Concrete Strategies implement different variants of an algorithm the Context uses.
  </div>
  </div>
</details>

---

### Is the Strategy Pattern similar to the State Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, they're similar, but the State Pattern is about changing behavior based on internal state, while Strategy changes behavior externally.
  </div>
  </div>
</details>

---

### How does the Strategy Pattern aid in unit testing?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It allows easy mocking of strategies in unit tests, making code more testable.
  </div>
  </div>
</details>

---

### Can the Strategy Pattern increase performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It can help in some cases, as it allows choosing the most efficient algorithm at runtime.
  </div>
  </div>
</details>

---
