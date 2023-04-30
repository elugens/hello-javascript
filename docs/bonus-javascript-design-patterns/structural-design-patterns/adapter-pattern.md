---
title: Adapter Design Pattern
description: Adapter is a structural design pattern that facilitates the collaboration of objects having conflicting interfaces.
sidebar_position: 1
sidebar_label: Adapter
keywords:
  - adapter pattern
  - adapter design pattern
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
  - adapter pattern
  - adapter design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AdapterSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Adapter Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Adapter Pattern**

<CloseAllAnswers />

---

### What is an adapter design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> An adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together by creating a middle-layer adapter that translates requests between them. The wrapper pattern is another name for it.
    </div><br />
    <div>
      <strong>Interview Response:</strong> In JavaScript, the adapter design pattern allows objects or classes with incompatible interfaces to work together. Interfaces from different classes or objects connect through an adapter work together despite their incompatible interfaces. The wrapper pattern is another name for it.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-adapter.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- calls into Adapter to request a service

**Adapter** -- In example code: _ShippingAdapter_

- implements the interface that the client expects or knows

**Adaptee** -- In example code: _AdvancedShipping_

- the object being adapted
- has a different interface from what the client expects or knows

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
class SimpleEarphones {
  constructor() {
    this.attach = function () {
      console.log('Use Earphones with Type C phone');
    };
  }
}

// Adapter
class EarPhoneAdapter extends SimpleEarphones {
  constructor(typeCphone) {
    super();
    this.attach = function () {
      typeCphone.attach();
    };
  }
}

class TypeCPhone {
  constructor() {
    this.attach = function () {
      console.log('Earphones attached to Type C phone');
    };
  }
}

let typeCphone = new TypeCPhone();
let adapter = new EarPhoneAdapter(typeCphone);
adapter.attach();

/*

Output:

Earphones attached to Type C phone

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong> ES5 Classical Implementation<br /><br />

<img src="/img/javascript-adapter.jpg" /><br /><br />

  <div></div>

```js
// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    // ...
    return '$49.75';
  };
}

// new interface

function AdvancedShipping() {
  this.login = function (credentials) {
    /* ... */
  };
  this.setStart = function (start) {
    /* ... */
  };
  this.setDestination = function (destination) {
    /* ... */
  };
  this.calculate = function (weight) {
    return '$39.50';
  };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function run() {
  var shipping = new Shipping();
  var credentials = { token: '30a8-6ee1' };
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request('78701', '10010', '2 lbs');
  console.log('Old cost: ' + cost);

  // new shipping object with adapted interface

  cost = adapter.request('78701', '10010', '2 lbs');

  console.log('New cost: ' + cost);
}

run();

/*
OUTPUT:

Old cost: $49.75
New cost: $39.50

*/
```

  </div>

  </div>
</details>

---

### The Adapter pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Adapter pattern belongs to the Structural Design Patterns category, which deals with object composition and relationships between objects to form larger structures.
    </div>
  </div>
</details>

---

### What is the Adapter Pattern's most noticeable feature?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The most noticeable feature of the Adapter pattern in JavaScript is its ability to allow objects with incompatible interfaces to work together seamlessly by creating a middle layer adapter.
    </div>

  </div>
</details>

---

### What Pros and Cons can you think of regarding the Adapter Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Pros: Enables objects with incompatible interfaces to work together, promotes reusability, improves maintainability. Cons: Increases complexity, can lead to performance issues, adds an extra layer of abstraction.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits vs. Drawbacks
    </div>
    <br />
    <div></div>

**Benefits**

- Based on SOLID principles.
- We can add new adapters without breaking existing code.
- The code is both reusable and adaptable.
- Clean code — because the client/context does not use a different interface in each concrete class and can switch between additional adapters using polymorphism.
- Single Responsibility Principle - The principle of single responsibility. You can separate the interface or data conversion code from the main business logic of the program.
- Open/Closed Principle. If they interact with the adapters via the client interface, you can start introducing new kinds of adapters into the application without having to break the existing client code.

**Drawbacks**

- The overall complexity of the code rises as a result of the addition of new interfaces and classes. Changing the service class to match the rest of your code is sometimes easier.

<br />
  </div>
</details>

---

### When should the Adapter Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Adapter pattern in JavaScript should be used when integrating existing code with new code, connecting incompatible interfaces, or promoting code reuse.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Use Case
    </div>
    <br />
    <div></div>

- There is a class whose interfaces do not match the one you need.
- There are several subclasses, but it’s impractical to adapt their interface by sub-classing every one.

<br />
  </div>
</details>

---

### In JavaScript, Are there any alternatives to using the adapter pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Adapter pattern in JavaScript include refactoring the code to use a common interface, using the Facade pattern, or using the Decorator pattern.
    </div>

  </div>
</details>

---
