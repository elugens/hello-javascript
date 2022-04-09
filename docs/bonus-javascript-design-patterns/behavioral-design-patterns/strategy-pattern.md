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

### Can you explain the Strategy design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (Strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-Strategy.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Context** -- In example code: Shipping

- maintains a reference to the current Strategy object
- supports interface to allow clients to request Strategy calculations
- allows clients to change Strategy

**Strategy** -- In example code: UPS, USPS, Fedex

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

### In what pattern category does the Strategy pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Strategy pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should you use the Strategy Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> When to Use the Strategy Pattern.
    </div>
    <br />
    <div></div>

- When you need to use several algorithms with different variations. You need create a concrete class to implement your algorithm (which can consist of a or some functions).
- When there are conditional statements around several related algorithms.
- When most of your classes have related behaviors.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Strategy pattern?

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

- You can swap algorithms used inside an object at runtime.
- You can isolate the implementation details of an algorithm from the code that uses it.
- You can replace inheritance with composition.
- Open/Closed Principle. You can introduce new strategies without having to change the context.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Strategy pattern?

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

- If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.
- Clients must be aware of the differences between strategies to be able to select a proper one.
- A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the Strategy objects, but without bloating your code with extra classes and interfaces.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
