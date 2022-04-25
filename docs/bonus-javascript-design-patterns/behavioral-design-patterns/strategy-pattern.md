---
title: Strategy Design Pattern
description: Strategy is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
sidebar_position: 10
sidebar_label: Strategy
---

**Structural: Strategy Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the strategy design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Strategy pattern encapsulates various algorithms (or strategies) for a specific task. It enables a method to be replaced at runtime with another method (Strategy) without the client knowing it. The Strategy pattern is essentially a collection of interchangeable algorithms.<br/>
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
      <strong>Interview Response:</strong> The Strategy pattern is part of the Behavioral design pattern set.
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
      <strong>Interview Response:</strong> Strategy Pattern Use-Cases.
    </div>
    <br />
    <div></div>

- When you need to employ several algorithms with varying versions, you must construct a concrete class (this may include one or more functions) to implement your algorithm.
- When there are conditional statements around by several connected algorithms
- When the majority of your classes exhibit similar behaviors

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
      <strong>Interview Response:</strong> Benefits of the Strategy Pattern
    </div>
    <br />
    <div></div>

- At runtime, you can alter the algorithms utilized within an object.
- You can separate an algorithm's implementation specifics from the code that utilizes it.
- The composition can get used in place of inheritance
- The principle of open/closed. You may implement new tactics without changing the context.

<br />
  </div>
</details>

---

### What are some of the Strategy pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Strategy Pattern.
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
